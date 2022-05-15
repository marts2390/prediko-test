import ThemeVariables from 'theme/variables'

export const styles = {
  header: {
    p: '1.25em',
    backgroundColor: ThemeVariables.colours.white,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.04)',
    borderRadius: ThemeVariables.borderRadius.small,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    mb: '2em',
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  arrowIcon: {
    mr: '2em',
    transform: 'rotate(180deg)',
    backgroundColor: ThemeVariables.colours.gold,
    borderRadius: '50%',
    minWidth: '2.4em',
    minHeight: '2.4em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      cursor: 'pointer',
    }
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  deleteButton: {
    ml: '1.5em'
  }
}