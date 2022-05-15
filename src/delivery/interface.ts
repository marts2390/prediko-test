import { IFunctionResultModel } from 'models/functionResultModel'
import { IUserResponseModel } from 'models/userResponseModel'

export interface IAppActions {
  getUsers: () => Promise<IFunctionResultModel<IUserResponseModel[] | null>>;
  updateUser: (userDetails: IUserResponseModel, id: string) => Promise<IFunctionResultModel<IUserResponseModel | null>>;
  createNewUser: (newUser: IUserResponseModel) => Promise<IFunctionResultModel<IUserResponseModel | null>>;
  getUser: (id: string) => Promise<IFunctionResultModel<IUserResponseModel | null>>;
  deleteUser: (id: string) => Promise<IFunctionResultModel<boolean | null>>;
}

export default interface IAppCore {
  AppActions: IAppActions;
}
