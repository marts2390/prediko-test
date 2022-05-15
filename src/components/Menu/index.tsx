import { FC } from 'react'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import Link from 'next/link'

import SettingsIcon from 'icons/SettingsIcon'
import ClientsIcon from 'icons/ClientsIcon'
import UserIcon from 'icons/UserIcon'
import SignOutIcon from 'icons/SignOutIcon'

import { IMenuItemModel } from 'models/menuItemModel'

import { styles } from './styles'
import ThemeVariables from 'theme/variables'

const MenuComponent:FC = () => {
  const router = useRouter()

  const menuItems: IMenuItemModel[] = [
    {
      icon: <SettingsIcon color={ router.pathname === '/settings' ? ThemeVariables.colours.white : ThemeVariables.colours.grey } />,
      url: '/settings',
      active: router.pathname === '/settings',
    },
    {
      icon: <UserIcon color={ router.pathname.includes('/users') ? ThemeVariables.colours.white : ThemeVariables.colours.grey }  />,
      url: '/users',
      active: router.pathname.includes('/users'),
    },
    {
      icon: <ClientsIcon color={ router.pathname === '/clients' ? ThemeVariables.colours.white : ThemeVariables.colours.grey }  />,
      url: '/clients',
      active: router.pathname === '/clients',
    },
  ]

  return (
    <Box sx={ styles.menu }>
      <Box>
        {menuItems.map((item) => {
          return (
            <Link
              key={ item.url }
              href={ item.url }
              passHref
            >
              <Box
                sx={ [
                  styles.menuItem,
                  item.active && styles.active
                ] }
              >
                {item.icon}
              </Box>
            </Link>
          )
        })}
      </Box>
      <Box sx={ styles.menuItem }>
        <SignOutIcon />
      </Box>
    </Box>
  )
}

export default MenuComponent