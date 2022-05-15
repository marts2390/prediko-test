import { FC } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Box, Typography, Button } from '@mui/material'
import { useRouter } from 'next/router'

import { styles } from './styles'

interface IEditUserHeaderComponentProps {
  title: string;
  saveText: string;
  deleteText?: string;
  saveAction: () => void;
  deleteAction?: () => void;
}

const EditUserHeaderComponent:FC<IEditUserHeaderComponentProps> = ({
  title,
  saveText,
  deleteText,
  saveAction,
  deleteAction
}) => {
  const router = useRouter()

  return (
    <Box sx={ styles.header }>
      <Box sx={ styles.headerLeft }>
        <Box
          onClick={ () => router.back() }
          sx={ styles.arrowIcon }
        >
          <ArrowForwardIcon />
        </Box>
        <Typography variant="h4">{title}</Typography>
      </Box>
      <Box sx={ styles.buttons }>
        <Button
          variant="contained"
          color="secondary"
          onClick={ saveAction }
        >
          {saveText}
        </Button>
        {deleteAction && (
          <Button
            sx={ styles.deleteButton }
            variant="outlined"
            color="secondary"
            onClick={ deleteAction }
          >
            {deleteText}
          </Button>
        )}
      </Box>
    </Box>
  )
}

export default EditUserHeaderComponent