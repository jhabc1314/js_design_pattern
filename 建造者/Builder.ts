class House {
  parts: Array<string> = []
  show() {
    this.parts.forEach((part) => {
      console.log(part)
    })
  }
}
// 建造者，每个包含构建所需的必要步骤
interface Builder {
  house: House
  buildStepA()
  buildStepB()
  buildStepC()
}

// 可以有不同类型的建造者，比如材质不一样 X负责木屋，Y负责混泥土
class BuilderX {
  house: House
  constructor() {
    this.house = new House()
  }
  buildStepA() {
    console.log('执行建造者X的步骤A')
    this.house.parts.push('拥有A部件')
  }
  buildStepB() {
    console.log('执行建造者X的步骤B')
    this.house.parts.push('拥有B部件')
  }
  buildStepC() {
    console.log('执行建造者X的步骤C')
    this.house.parts.push('拥有C部件')
  }
}

class BuilderY {
  house: House
  constructor() {
    this.house = new House()
  }
  buildStepA() {
    console.log('执行建造者Y的步骤A')
    this.house.parts.push('拥有A部件')
  }
  buildStepB() {
    console.log('执行建造者Y的步骤B')
    this.house.parts.push('拥有B部件')
  }
  buildStepC() {
    console.log('执行建造者Y的步骤C')
    this.house.parts.push('拥有C部件')
  }
}

export { Builder, BuilderX, BuilderY }
