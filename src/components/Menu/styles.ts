import ThemeVariables from 'theme/variables'

export const styles = {
  menu: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    pt: '4em',
    height: 'calc(100% - 2em)'
  },
  menuItem: {
    transition: '0.3s ease',
    borderRadius: '12px',
    background: ThemeVariables.colours.background,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mb: '2em',
    width: '3em',
    height: '3em',
    '&:hover': {
      cursor: 'pointer',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.10)',
    }
  },
  active: {
    background: ThemeVariables.colours.primary,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.10)',
  }
}