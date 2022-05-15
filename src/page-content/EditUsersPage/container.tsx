import { FC } from 'react'
import { useObservableState } from 'observable-hooks'

import EditUsersPageComponent from './component'
import actions from 'actions'

interface IEditUsersPageContainerProps {
  id: string;
}

const EditUsersPageContainer:FC<IEditUsersPageContainerProps> = ({
  id
}) => {
  const { selectedUser } = useObservableState(actions.AppService.getSubject()
  || actions.AppService.getCurrentState())

  return (
    <EditUsersPageComponent
      id={ id }
      selectedUser={ selectedUser }
      getUser={ actions.AppService.getUser }
      updateUser={ actions.AppService.updateUser }
      deleteUser={ actions.AppService.deleteUser }
      clearSelectedUser={ actions.AppService.clearSelectedUser }
    />
  )
}

export default EditUsersPageContainer