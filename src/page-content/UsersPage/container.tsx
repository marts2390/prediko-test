import { FC } from 'react'
import { useObservableState } from 'observable-hooks'

import Actions from 'actions'
import UsersPageComponent from './component'
import actions from 'actions'

const UsersPageContainer:FC = () => {
  const { isLoading, filteredUsers } = useObservableState(Actions.AppService.getSubject()
  || Actions.AppService.getCurrentState())

  return (
    <UsersPageComponent
      users={ filteredUsers }
      isLoading={ isLoading }
      handleSearch={ actions.AppService.handleSearch }
      getUsers={ Actions.AppService.getUsers }
    />
  )
}

export default UsersPageContainer