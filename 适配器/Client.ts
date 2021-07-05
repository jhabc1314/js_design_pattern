import { Adapter } from "./Adapter"

/**
 * 链接：https://zhuanlan.zhihu.com/p/366886445
 * 优点： 
 *  单一职责原则 可以将接口或数据转换代码从程序主要业务逻辑中分离。
 *  开闭原则。只要客户端代码通过客户端接口与适配器进行交互，就能在不修改现有客户端代码的情况下在程序中添加新类型的适配器。
 * 
 * 缺点：
 *  代码整体复杂度增加，因为需要新增一系列接口和类。
 *  有时直接更改服务类使其与其他代码兼容会更简单。
 */
let params = [1,2,3,4,5]

const adapter = new Adapter()
adapter.call(params)
