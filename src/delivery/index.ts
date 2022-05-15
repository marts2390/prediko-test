
import connector from './connector'
import AppActions from './AppActions'
import IAppCore from './interface'

class AppCore implements IAppCore {
  connector = connector
  AppActions = AppActions
}

export default new AppCore()
