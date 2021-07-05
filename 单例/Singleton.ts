import config from './config'

interface Instance {
  connect(Db)
  reconnect()
  ping()
  execute(sql: string, params: [])
}
interface Db {
  host: string
  port: number
  username: string
  password: string
}

class MysqlInstance {
  connect(c: Db) {
    console.log(`恭喜，${c.host}:${c.port}连接成功-用户名:${c.username}`)
  }
  reconnect() {
    console.log('恭喜，重连成功')
  }
  ping() {
    return Math.random() >= 0.5
  }
  execute(sql: string, params: []) {
    console.log('成功执行sql-' + sql)
  }
}

interface Connector {
  getInstance(string): Instance
}

class MysqlConnector {
  private static _instance: Instance
  private constructor() {}

  static getInstance(dbname: string = 'default'): Instance {
    if (this._instance instanceof MysqlInstance) {
      this._instance.ping() || this._instance.reconnect()
      return this._instance
    }
    const dbconfig = config[dbname]
    this._instance = new MysqlInstance()
    this._instance.connect(dbconfig)
    return this._instance
  }
}

export { MysqlConnector }
