import { FC, useRef } from 'react'
import { Box, Typography } from '@mui/material'
import { FormikProps } from 'formik'

import { IAddNewUserFormModel } from 'models/addUserFormModel'
import EditUserHeader from 'components/EditUserHeader'

import AddUserForm from 'forms/AddUserForm'

import { styles } from './styles'

interface IAddNewUsersPageComponentProps {
  handleSubmit: (formValues: IAddNewUserFormModel) => void;
}

const AddNewUsersPageComponent:FC<IAddNewUsersPageComponentProps> = ({
  handleSubmit
}) => {
  const formRef = useRef<FormikProps<IAddNewUserFormModel>>(null)

  const formSubmit = () => {
    formRef.current?.submitForm()
  }

  return (
    <Box>
      <EditUserHeader
        title="Add new user"
        saveText='save and add'
        saveAction={ formSubmit }
      />
      <Box sx={ styles.content }>
        <AddUserForm
          formRef={ formRef }
          handleSubmit={ handleSubmit }
        />
      </Box>
    </Box>
  )
}

export default AddNewUsersPageComponent