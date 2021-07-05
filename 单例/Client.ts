import { MysqlConnector } from "./Singleton";

// const mysql = new MysqlConnector() error Constructor of class 'MysqlConnector' is private and only accessible within the class declaration.

let mysql = MysqlConnector.getInstance()
mysql.execute('SELECT * FROM user1', [])

mysql = MysqlConnector.getInstance()
mysql.execute('SELECT * FROM user2', [])

mysql = MysqlConnector.getInstance()
mysql.execute('SELECT * FROM user3', [])

mysql = MysqlConnector.getInstance()
mysql.execute('SELECT * FROM user4', [])
