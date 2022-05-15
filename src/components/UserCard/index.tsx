import { FC } from 'react'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'

import { IUserModel } from 'models/userModel'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import { styles } from './styles'

interface IUserCardComponentProps {
  user: IUserModel;
}

const UserCardComponent:FC<IUserCardComponentProps> = ({
  user
}) => {
  return (
    <Link href={ `/users/${user.id}` }>
      <Box sx={ styles.userCard } >
        <Box>
          <Typography variant="h6">{user.name}</Typography>
          <Typography variant="body2">{user.role}</Typography>
        </Box>
        <Box sx={ styles.arrowIcon }>
          <ArrowForwardIcon fontSize="small"/>
        </Box>
      </Box>
    </Link>
  )
}

export default UserCardComponent