import ThemeVariables from 'theme/variables'

export const styles = {
  loaderContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  container: {
    px: '4em',
    pt: '2em',
  },
  searchBar: {
    transition: '0.3s ease',
    maxWidth: '20em',

    '&:hover': {
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
    }
  },
  actionBar: {
    mt: '2em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  buttonIcon: {
    backgroundColor: ThemeVariables.colours.primary,
    borderRadius: ThemeVariables.borderRadius.small,
    mr: '1em',
    height: '1.75em',
    width: '1.75em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}