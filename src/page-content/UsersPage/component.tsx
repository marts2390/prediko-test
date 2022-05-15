import { FC, useEffect } from 'react'
import Link from 'next/link'
import { Typography, Box, Grid, TextField, InputAdornment, Button, Fade } from '@mui/material'
import ClipLoader from 'react-spinners/ClipLoader'

import PlusIcon from 'icons/PlusIcon'
import SearchIcon from 'icons/SearchIcon'
import UserCard from 'components/UserCard'

import { IUserModel } from 'models/userModel'

import { styles } from './styles'
import ThemeVariables from 'theme/variables'


interface IUsersPageComponentProps {
  isLoading: boolean;
  users: IUserModel[];
  handleSearch: (searchValue: string) => void;
  getUsers: () => void;
}

const UsersPageComponent: FC<IUsersPageComponentProps> = ({
  isLoading,
  users,
  handleSearch,
  getUsers,
}) => {
  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      {isLoading && (
        <Box sx={ styles.loaderContainer }>
          <ClipLoader
            color={ ThemeVariables.colours.primary }
            size={ 100 }
          />
        </Box>
      )}
      <Fade in={ !isLoading }>
        <div>
          <Box sx={ styles.container }>
            <Typography variant="h4">Our Users</Typography>
            <Box sx={ styles.actionBar }>
              <TextField
                sx={ styles.searchBar }
                variant='filled'
                placeholder='Search for a user'
                fullWidth
                label={ false }
                onChange={ (e) => handleSearch(e.target.value) }
                InputProps={ {
                  startAdornment: (
                    <InputAdornment
                      position="start"
                    >
                      <SearchIcon />
                    </InputAdornment>
                  ),
                } }
              />
              <Link
                passHref
                href="/users/add-new"
              >
                <Button
                  variant="contained"
                  color='white'
                  startIcon={ (
                    <Box sx={ styles.buttonIcon }>
                      <PlusIcon />
                    </Box>
                  ) }
                >
                    add new user
                </Button>
              </Link>
            </Box>
            <Grid
              mt='1.5em'
              container
              spacing={ 3 }
            >
              {users.map((user: IUserModel) => (
                <Grid
                  item
                  key={ user.id }
                  xs={ 6 }
                  sm={ 4 }
                >
                  <UserCard user={ user } />
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
      </Fade>
    </>
  )
}

export default UsersPageComponent