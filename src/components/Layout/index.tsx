import { FC, ReactElement } from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'

import logo from 'assets/prediko-logo.png'
import Menu from 'components/Menu'

import { styles } from './styles'

interface ILayoutComponentProps {
  children: ReactElement
}

const LayoutComponent:FC<ILayoutComponentProps> = ({ children }) => {
  return (
    <Box sx={ styles.container }>
      <Box sx={ styles.sidebar }>
        <Image
          alt='Prediko Logo'
          src={ logo.src }
          width={ 50 }
          height={ 50 }
        />
        <Menu />
      </Box>
      <Box sx={ styles.content }>
        {children}
      </Box>
    </Box>
  )
}

export default LayoutComponent