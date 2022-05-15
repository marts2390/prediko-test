import ThemeVariables from 'theme/variables'

export const styles = {
  userCard: {
    transition: '0.3s ease',
    backgroundColor: ThemeVariables.colours.white,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.04)',
    borderRadius: ThemeVariables.borderRadius.small,
    p: '1em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '&:hover': {
      cursor: 'pointer',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
    }
  },
  arrowIcon: {
    backgroundColor: ThemeVariables.colours.gold,
    borderRadius: '50%',
    minWidth: '1.6em',
    minHeight: '1.6em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
}