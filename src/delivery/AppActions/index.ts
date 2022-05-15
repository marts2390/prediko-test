import { IAppActions } from 'delivery/interface'
import { AxiosResponse } from 'axios'

import { IUserResponseModel } from 'models/userResponseModel'
import { IFunctionResultModel } from 'models/functionResultModel'

import ApiConnector from '../connector'
import { IUserModel } from 'models/userModel'

class AppActions implements IAppActions {
  getUsers = async () => {
    const result: IFunctionResultModel<IUserResponseModel[] | null> = {
      value: null,
      error: null,
    }

    try {
      const response = await ApiConnector.connector.get<IUserResponseModel, AxiosResponse<IUserResponseModel[]>>('')

      if (response.data) {
        result.value =  response.data
      } else {
        result.error = new Error(`API error, status: ${response.status}`)
      }
    } catch (e) {
      result.error = new Error('Network error, try again later')
    }

    return result
  }

  createNewUser = async (newUser: IUserResponseModel) => {
    const result: IFunctionResultModel<IUserResponseModel | null> = {
      value: null,
      error: null,
    }

    try {
      const response = await ApiConnector.connector.post<IUserResponseModel, AxiosResponse<IUserResponseModel>>('', {
        ...newUser,
      })

      if (response.data) {
        result.value =  response.data
      } else {
        result.error = new Error(`API error, status: ${response.status}`)
      }
    } catch (e) {
      result.error = new Error('Network error, try again later')
    }

    return result
  }

  getUser = async (id: string) => {
    const result: IFunctionResultModel<IUserResponseModel | null> = {
      value: null,
      error: null,
    }

    try {
      const response = await ApiConnector.connector.get<IUserResponseModel, AxiosResponse<IUserResponseModel>>(`/${id}`)

      if (response.data) {
        result.value =  response.data
      } else {
        result.error = new Error(`API error, status: ${response.status}`)
      }
    } catch (e) {
      result.error = new Error('Network error, try again later')
    }

    return result
  }

  updateUser = async (userDetails: IUserResponseModel, id: string) => {
    const result: IFunctionResultModel<IUserResponseModel | null> = {
      value: null,
      error: null,
    }

    try {
      const response = await ApiConnector.connector.put<IUserResponseModel, AxiosResponse<IUserResponseModel>>(`/${id}`, {
        ...userDetails,
      })

      if (response.data) {
        result.value =  response.data
      } else {
        result.error = new Error(`API error, status: ${response.status}`)
      }
    } catch (e) {
      result.error = new Error('Network error, try again later')
    }

    return result
  }

  deleteUser = async (id: string) => {
    const result: IFunctionResultModel<boolean | null> = {
      value: null,
      error: null,
    }

    try {
      const response = await ApiConnector.connector.delete<IUserResponseModel, AxiosResponse<null>>(`/${id}`)

      if (response.status === 200) {
        result.value = true
      } else {
        result.error = new Error(`API error, status: ${response.status}`)
      }
    } catch (e) {
      result.error = new Error('Network error, try again later')
    }

    return result
  }
}

export default new AppActions()