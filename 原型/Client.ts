import { Mail } from './Prototype'
/**
 * 优点：
    可以克隆对象， 而无需与它们所属的具体类相耦合。 
    可以克隆预生成原型， 避免反复运行初始化代码。 
    可以更方便地生成复杂对象。 
    可以用继承以外的方式来处理复杂对象的不同配置。
 * 缺点：
    克隆包含循环引用的复杂对象可能会非常麻烦。
 */
const Mailer = new Mail()

for (let i = 0; i < 5; i++) {
  const one = Mailer.clone()
  one.setReceiver('A' + i)
  one.setSender('B' + i)
  one.send()
}
