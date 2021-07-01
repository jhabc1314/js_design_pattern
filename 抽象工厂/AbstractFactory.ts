// 抽象工厂
// 场景，生产各种风格椅子，有维多利亚风格，有现代风格等
// 生产各种风格沙发，有维多利亚和现代等
// 生成各种风格桌子，有维多利亚和现代等

interface Chair {
    hasLeg():void
    sitOn():void
}

class VictorianChair {
    hasLeg() {
        console.log("我拥有维多利亚风格的腿")
    }
    sitOn() {
        console.log("我是维多利亚风格椅子，我可以坐")
    }
}

class ModernChair {
    hasLeg() {
        console.log("我拥有现代风格的腿")
    }
    sitOn() {
        console.log("我是现代风格的椅子，我也可以坐")
    }
}

// 定义抽象生产工厂
interface AbstractProductFactory {
    createChair():Chair
    createSofa()
    createDesk()
}

// 定义实际产品工厂
class VictorianProductFactory {
    createChair() {
        return new VictorianChair()
    }
    createSofa() {
        // 创建维多利亚风格沙发
    }
    createDesk() {
        // 创建维多利亚风格桌子
    }
}

class ModernProductFactory {
    createChair() {
        return new ModernChair()
    }
    createSofa() {
        // 生成现代风格沙发
    }
    createDesk() {
        // 生产现代风格桌子
    }
}

export {
    // Chair,
    // victorianChair,
    // modernChair,
    AbstractProductFactory,
    VictorianProductFactory,
    ModernProductFactory
}
