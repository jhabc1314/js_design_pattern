import { ActionA, ActionB, ImplementA, ImplementB } from './Bridge'

/**
 * 单一职责类，各司其职，使用组合而不是继承来实现各种功能的实现
 * 
 * 链接：https://zhuanlan.zhihu.com/p/367178577
 * 
 * 优点： 
 * 可以创建与平台无关的类和程序。 
 * 客户端代码仅与高层抽象部分进行互动，不会接触到平台的详细信息。
 * 开闭原则。可以新增抽象部分和实现部分，且它们之间不会相互影响。
 * 单一职责原则。抽象部分专注于处理高层逻辑，实现部分处理平台细节。
 * 
 * 缺点：
 * 对高内聚的类使用该模式可能会让代码更加复杂。
 */
let implementA = new ImplementA()
let implementB = new ImplementB()

let action = new ActionA(implementA)
action.action1()
action.action2()

action = new ActionB(implementB)
action.action1()
action.action2()
