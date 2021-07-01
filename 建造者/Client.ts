import { Builder, BuilderX, BuilderY } from './Builder'
import { Director, DirectorA, DirectorB } from './Director'

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})
readline.question('请选择建造者\n 1:X, 2:Y\n', (b) => {
  let builder: Builder
  if (b === '1') {
    builder = new BuilderX()
  } else if (b === '2') {
    builder = new BuilderY()
  } else {
    console.log('选择错误，请重新选择')
    readline.close()
    return
  }
  readline.question('请选择蓝图\n1:蓝图A，2:蓝图B\n', (d) => {
    let director: Director
    if (b === '1') {
      director = new DirectorA(builder)
    } else if (b === '2') {
      director = new DirectorB(builder)
    } else {
      console.log('蓝图选择错误，请重新选择')
      readline.close()
      return
    }
    // 开始构建，具体构建的内容步骤都是由指挥官指定
    director.build()
    // 打印结果
    builder.house.show()
    readline.close()
  })
})
