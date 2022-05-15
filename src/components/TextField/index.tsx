import { FC, ChangeEvent } from 'react'
import { Box, Typography, TextField } from '@mui/material'

import { styles } from './styles'

interface ITextFieldComponentProps {
  label: string;
  placeHolder: string;
  name: string;
  error?: boolean;
  errorMessage?: string;
  defaultValue?: string;
  onFocus?: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const TextFieldComponent:FC<ITextFieldComponentProps> = ({
  label,
  placeHolder,
  error,
  name,
  errorMessage,
  defaultValue,
  onFocus,
  onChange
}) => {
  return (
    <Box>
      <Box>
        <Box sx={ styles.labelContainer }>
          <Typography
            sx={ styles.label }
            variant="body2"
          >
            {label}
          </Typography>
          {errorMessage && (
            <Typography
              color="error"
              sx={ [styles.label, styles.errorMessage] }
              variant="body2"
            >
              {`- ${errorMessage}`}
            </Typography>
          )}
        </Box>
      </Box>
      <TextField
        defaultValue={ defaultValue }
        name={ name }
        error={ error }
        fullWidth
        variant='outlined'
        placeholder={ placeHolder }
        onChange={ onChange }
        onFocus={ onFocus }
      />
    </Box>
  )
}

export default TextFieldComponent