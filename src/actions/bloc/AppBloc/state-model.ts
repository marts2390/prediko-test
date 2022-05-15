import { IUserModel } from 'models/userModel'
import { AlertColor } from '@mui/material'

export interface IAppBlocState {
  isLoading: boolean;
  newUserLoading: boolean;
  showNotification: boolean;
  notificationMessage: string;
  notificationType?: AlertColor;
  users: IUserModel[];
  filteredUsers: IUserModel[];
  selectedUser:IUserModel | null;
}