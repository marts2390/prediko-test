import { ProtoBloc } from '../proto-bloc'
import { IAppBlocState } from './state-model'
import { IAppBloc } from '../../interface'
import { v4 as uuidv4 } from 'uuid'

import { IUserResponseModel } from 'models/userResponseModel'
import { IAddNewUserFormModel } from 'models/addUserFormModel'

import delivery from 'delivery'
import Router from 'next/router'
import { IUserModel } from 'models/userModel'

const defaultState: IAppBlocState = {
  isLoading: true,
  newUserLoading: false,
  showNotification: false,
  notificationType: undefined,
  notificationMessage: '',
  users: [],
  filteredUsers: [],
  selectedUser: null,
}

class AppBloc extends ProtoBloc<IAppBlocState> implements IAppBloc {
  constructor() {
    super(defaultState)
  }

  getUsers = async () => {
    const { value, error } = await delivery.AppActions.getUsers()

    if (error) {
      this.pushState({
        ...this.state,
        isLoading: false,
      })

      return
    }

    if (value) {
      const formatUsers = value.map((item:IUserResponseModel) => {
        return {
          id: item.id,
          name: `${item.first_name} ${item.last_name}`,
          email: item.email,
          role: item.role === 'ADMIN' ? 'Administrator' : 'Regular user'
        }
      })

      this.pushState({
        ...this.state,
        users: formatUsers,
        filteredUsers: formatUsers,
        isLoading: false,
      })
    }
  }

  addNewUser = async (formValues: IAddNewUserFormModel) => {
    this.pushState({
      ...this.state,
      newUserLoading: true
    })

    const newUserObj: IUserResponseModel = {
      id: uuidv4(),
      first_name: formValues.firstname,
      last_name: formValues.lastname,
      email: formValues.email,
      role: formValues.role  === 'Administrator' ? 'ADMIN' : 'DEV'
    }

    const { value, error } = await delivery.AppActions.createNewUser(newUserObj)

    if (error) {
      this.pushState({
        ...this.state,
        newUserLoading: false,
        showNotification: true,
        notificationType: 'error',
        notificationMessage: 'Oops, something went wrong',
      })

      return
    }

    if (value) {
      this.pushState({
        ...this.state,
        newUserLoading: false,
        showNotification: true,
        notificationType: 'success',
        notificationMessage: 'User added',
      })

      Router.push('/users')
    }
  }

  getUser = async (id: string) => {
    const { value, error } = await delivery.AppActions.getUser(id)

    if (error)  {
      this.pushState({
        ...this.state,
        showNotification: true,
        notificationType: 'error',
        notificationMessage: 'User not found',
      })

      return
    }

    if (value) {
      const formatUser:IUserModel = {
        id: value.id,
        name: `${value.first_name} ${value.last_name}`,
        email: value.email,
        role: value.role === 'ADMIN' ? 'Administrator' : 'Regular user'
      }

      this.pushState({
        ...this.state,
        selectedUser: formatUser,
      })
    }
  }

  updateUser = async (userDetails: IAddNewUserFormModel, id: string) => {
    console.log(userDetails)
    const updateUserObj:IUserResponseModel = {
      id: id,
      first_name: userDetails.firstname,
      last_name: userDetails.lastname,
      email: userDetails.email,
      role: userDetails.role  === 'Administrator' ? 'ADMIN' : 'DEV'
    }

    const { value, error } = await delivery.AppActions.updateUser(updateUserObj, id)

    if (error)  {
      this.pushState({
        ...this.state,
        showNotification: true,
        notificationType: 'error',
        notificationMessage: 'User not found',
      })

      return
    }

    if (value) {
      const formatUser:IUserModel = {
        id: value.id,
        name: `${value.first_name} ${value.last_name}`,
        email: value.email,
        role: value.role === 'ADMIN' ? 'Administrator' : 'Regular user'
      }

      this.pushState({
        ...this.state,
        selectedUser: formatUser,
        showNotification: true,
        notificationType: 'success',
        notificationMessage: 'User updated',
      })
    }
  }

  deleteUser = async (id: string) => {
    const { value, error } = await delivery.AppActions.deleteUser(id)

    if (error)  {
      this.pushState({
        ...this.state,
        showNotification: true,
        notificationType: 'error',
        notificationMessage: 'Oops something went wrong',
      })

      return
    }

    if (value) {
      this.pushState({
        ...this.state,
        showNotification: true,
        notificationType: 'success',
        notificationMessage: 'User deleted',
      })

      Router.push('/users')
    }
  }

  closeNotification = () => {
    this.pushState({
      ...this.state,
      showNotification: this.defaultState.showNotification,
      notificationType: this.defaultState.notificationType,
      notificationMessage: this.defaultState.notificationMessage,
    })
  }

  handleSearch = (searchValue: string) => {
    const getResults = this.state.users.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))

    this.pushState({
      ...this.state,
      filteredUsers: getResults
    })
  }

  clearSelectedUser = () => {
    this.pushState({
      ...this.state,
      selectedUser: null,
    })
  }
}

export default new AppBloc()