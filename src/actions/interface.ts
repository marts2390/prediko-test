import { IAddNewUserFormModel } from 'models/addUserFormModel'

export interface IActions {
  AppService: IAppBloc
}

export interface IAppBloc {
  getUsers: () => void;
  addNewUser: (formValues: IAddNewUserFormModel) => void;
  getUser: (id: string) => void;
  updateUser: (userDetails: IAddNewUserFormModel, id: string) => void;
  deleteUser: (id: string) => void;
  handleSearch: (searchValue: string) => void;
  closeNotification: () => void;
  clearSelectedUser: () => void;
}