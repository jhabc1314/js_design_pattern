"use strict";
exports.__esModule = true;
var Singleton_1 = require("./Singleton");
// const mysql = new MysqlConnector() error Constructor of class 'MysqlConnector' is private and only accessible within the class declaration.
var mysql = Singleton_1.MysqlConnector.getInstance();
mysql.execute('SELECT * FROM user1', []);
mysql = Singleton_1.MysqlConnector.getInstance();
mysql.execute('SELECT * FROM user2', []);
mysql = Singleton_1.MysqlConnector.getInstance();
mysql.execute('SELECT * FROM user3', []);
mysql = Singleton_1.MysqlConnector.getInstance();
mysql.execute('SELECT * FROM user4', []);
