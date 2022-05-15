import { FC, useRef, useEffect } from 'react'
import { Box, Fade } from '@mui/material'
import { FormikProps } from 'formik'

import { IAddNewUserFormModel } from 'models/addUserFormModel'
import EditUserHeader from 'components/EditUserHeader'

import AddUserForm from 'forms/AddUserForm'

import { styles } from './styles'
import { IUserModel } from 'models/userModel'

interface IEditUsersPageComponentProps {
  id: string;
  selectedUser: IUserModel | null;
  getUser: (id: string) => void;
  updateUser: (userDetails: IAddNewUserFormModel, id: string) => void;
  deleteUser: (id: string) => void;
  clearSelectedUser: () => void;
}

const EditUsersPageComponent:FC<IEditUsersPageComponentProps> = ({
  id,
  selectedUser,
  getUser,
  updateUser,
  deleteUser,
  clearSelectedUser
}) => {
  const formRef = useRef<FormikProps<IAddNewUserFormModel>>(null)

  const formSubmit = () => {
    formRef.current?.submitForm()
  }

  const handleSubmit = (e: IAddNewUserFormModel) => {
    updateUser(e, id)
  }

  useEffect(() => {
    getUser(id)

    return () => {
      clearSelectedUser()
    }
  }, [])

  return (
    <Box>
      <EditUserHeader
        title='Edit user'
        saveText='Update user'
        deleteText='Delete user'
        saveAction={ formSubmit }
        deleteAction={ () => deleteUser(id) }
      />
      <Box sx={ styles.content }>
        <Fade
          in={ !!selectedUser }
          unmountOnExit
        >
          <div>
            <AddUserForm
              formRef={ formRef }
              userDetails={ selectedUser }
              handleSubmit={ handleSubmit }
            />
          </div>
        </Fade>
      </Box>
    </Box>
  )
}

export default EditUsersPageComponent