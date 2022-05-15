
import Axios, { AxiosInstance } from 'axios'

class ApiConnector {
  connector: AxiosInstance

  constructor() {
    this.connector = Axios.create({
      baseURL: 'https://test-front-p6cqni7znq-lz.a.run.app/',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
  }
}

export default new ApiConnector()
