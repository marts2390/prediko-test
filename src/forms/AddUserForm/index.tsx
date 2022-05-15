import { FC, RefObject } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { Formik, Form, FormikProps } from 'formik'

import TextField from 'components/TextField'
import Select from 'components/Select'
import { IAddNewUserFormModel } from 'models/addUserFormModel'

import { validationSchema } from './validator'
import { styles } from './styles'
import { IUserModel } from 'models/userModel'

interface AddUserFormComponentProps {
  formRef: RefObject<FormikProps<IAddNewUserFormModel>>
  userDetails?: IUserModel | null;
  handleSubmit: (formValues: IAddNewUserFormModel) => void;
}

const AddUserFormComponent: FC<AddUserFormComponentProps> = ({
  formRef,
  userDetails,
  handleSubmit,
}) => {
  const initialValues: IAddNewUserFormModel = {
    firstname: userDetails ? userDetails.name.split(' ')[0] : '',
    lastname: userDetails ? userDetails.name.split(' ')[1] : '',
    email: userDetails ? userDetails.email : '',
    role: userDetails ? userDetails.role : '',
  }

  const roleList = [
    {
      name: 'Administrator',
      id: 'ADMIN'
    },
    {
      name: 'Regular user',
      id: 'DEV'
    }
  ]

  return (
    <Box>
      <Typography
        sx={ styles.contentTitle }
        variant="h6"
      >
        User Information
      </Typography>

      <Formik
        innerRef={ formRef }
        initialValues={ initialValues }
        validationSchema={ validationSchema }
        validateOnChange={ false }
        onSubmit={ (e) => handleSubmit(e) }
      >
        {(props: FormikProps<IAddNewUserFormModel>) => {
          const { handleChange, setFieldError, setFieldValue, errors, values } = props

          return (
            <Form>
              <Grid
                container
                spacing={ 6 }
              >
                <Grid
                  item
                  xs={ 12 }
                  sm={ 4 }
                >
                  <TextField
                    error={ !!errors.firstname }
                    errorMessage={ errors.firstname }
                    defaultValue={ initialValues.firstname }
                    label="First name"
                    name="firstname"
                    placeHolder="Insert first name"
                    onChange={ handleChange }
                    onFocus={ () => setFieldError('firstname', undefined) }
                  />
                </Grid>
                <Grid
                  item
                  xs={ 12 }
                  sm={ 4 }
                >
                  <TextField
                    error={ !!errors.lastname }
                    defaultValue={ initialValues.lastname }
                    errorMessage={ errors.lastname }
                    label="Last name"
                    name="lastname"
                    placeHolder="Insert last name"
                    onChange={ handleChange }
                    onFocus={ () => setFieldError('lastname', undefined) }
                  />
                </Grid>
                <Grid
                  item
                  xs={ 12 }
                  sm={ 4 }
                >
                  <TextField
                    error={ !!errors.email }
                    errorMessage={ errors.email }
                    defaultValue={ initialValues.email }
                    label="Email"
                    name="email"
                    placeHolder="Insert email"
                    onChange={ handleChange }
                    onFocus={ () => setFieldError('email', undefined) }
                  />
                </Grid>
                <Grid
                  item
                  xs={ 12 }
                  sm={ 4 }
                >
                  <Select
                    value={ values.role }
                    list={ roleList }
                    label="Role"
                    error={ !!errors.role }
                    errorMessage={ errors.role }
                    onFocus={ () => setFieldError('role', undefined) }
                    onChange={ (e) => setFieldValue('role', e.target.value) }
                    renderValue={ () => {
                      if (values.role !== '') {
                        return values.role
                      }

                      return 'select role'
                    } }
                  />
                </Grid>
              </Grid>
            </Form>
          )
        }}
      </Formik>
    </Box>
  )
}

export default AddUserFormComponent