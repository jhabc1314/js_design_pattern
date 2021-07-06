interface Implement {
  opreate1(): void
  opreate2(): void
}

class ImplementA implements Implement {
  opreate1() {
    console.log("I am ImplementA's opreate1")
  }
  opreate2() {
    console.log("I am ImplementA's opreate2")
  }
}

class ImplementB implements Implement {
  opreate1() {
    console.log("I am ImplementB's opreate1")
  }
  opreate2() {
    console.log("I am ImplementB's opreate2")
  }
}

interface Action {
  implement: Implement
  action1(): void
  action2(): void
}

class ActionA implements Action {
  constructor(public implement: Implement) {}
  action1() {
    this.implement.opreate1()
  }
  action2() {
    this.implement.opreate2()
  }
}

class ActionB implements Action {
  constructor(public implement: Implement) {}
  action1() {
    this.implement.opreate1()
  }
  action2() {
    this.implement.opreate2()
  }
}

export {
    ActionA,
    ActionB,
    ImplementA,
    ImplementB
}
