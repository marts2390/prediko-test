import { FC } from 'react'
import { Select, MenuItem, SelectChangeEvent, Box, Typography } from '@mui/material'

import { styles } from './styles'

interface IDropDownItemModel {
  id: string;
  name: string;
}

interface ISelectComponentProps {
  value: string;
  label: string;
  list: IDropDownItemModel[];
  errorMessage?: string;
  error?: boolean;
  onFocus?: () => void;
  renderValue?: () => string;
  onChange: (e: SelectChangeEvent<string>) => void;
}

const SelectComponent:FC<ISelectComponentProps> = ({
  value,
  list,
  label,
  error,
  errorMessage,
  renderValue,
  onChange,
  onFocus
}) => {
  return (
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
      <Select
        error={ error }
        variant='outlined'
        fullWidth
        onFocus={ onFocus }
        value={ value }
        renderValue={ renderValue }
        onChange={ (e) => onChange(e) }
      >
        {list.map((item) => (
          <MenuItem
            key={ item.id }
            value={ item.name }
          >
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </Box>
  )
}

export default SelectComponent