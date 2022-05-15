import * as Yup from 'yup'

export const validationSchema = Yup.object({
  firstname: Yup.string().required('Required'),
  lastname: Yup.string().required('Required'),
  email: Yup.string().email().required('Not a valid email'),
  role: Yup.string().required('Please select a role'),
})
