import { FC } from 'react'

import AddNewUsersPageComponent from './component'
import actions from 'actions'

const AddNewUsersPageContainer:FC = () => {
  return (
    <AddNewUsersPageComponent
      handleSubmit={ actions.AppService.addNewUser }
    />
  )
}

export default AddNewUsersPageContainer