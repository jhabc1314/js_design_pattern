import { Builder } from './Builder'

// 指挥官 用于定制不同的构建计划步骤
interface Director {
  builder: Builder
  build()
}

class DirectorBase {
  builder: Builder
  constructor(b: Builder) {
    this.builder = b
  }
}

class DirectorA extends DirectorBase {

  build() {
    this.builder.buildStepB()
    this.builder.buildStepC()
  }
}

class DirectorB extends DirectorBase {
  build() {
    this.builder.buildStepA()
    this.builder.buildStepC()
  }
}

export { DirectorA, DirectorB, Director }
