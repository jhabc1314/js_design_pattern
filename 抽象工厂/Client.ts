import {
  AbstractProductFactory,
  ModernProductFactory,
  VictorianProductFactory,
} from './AbstractFactory'
/**
 * 参考链接：https://zhuanlan.zhihu.com/p/366561608
 *
 * 优点：
 * 可以确保同一工厂生成的产品相互匹配。
 * 可以避免客户端和具体产品代码的耦合。
 * 单一职责原则。 可以将产品生成代码抽取到同一位置， 使得代码易于维护。
 * 开闭原则。 向应用程序中引入新产品变体时， 无需修改客户端代码。
 *
 * 缺点：
 * 由于采用该模式需要向应用中引入众多接口和类，代码可能会比之前更加复杂。
 *
 */
class Client {
  constructor(public factory: AbstractProductFactory) {}
  operation() {
    // 客服端其他操作
  }
}
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})
readline.question(
  '请选择要生产的椅子风格，\n1：维多利亚，2：现代\n',
  (style) => {
    let factory: AbstractProductFactory
    if (style === '1') {
      factory = new VictorianProductFactory()
    } else if (style === '2') {
      factory = new ModernProductFactory()
    } else {
      console.log('风格选择错误，请重新选择')
      readline.close()
      return
    }
    const client = new Client(factory)
    const chair = client.factory.createChair()
    chair.sitOn()
    chair.hasLeg()
    readline.close()
  }
)
