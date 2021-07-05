class Service {
  call(params: number[]) {
    params.forEach((item) => console.log(item))
    console.log('请求成功')
  }
}

class Adapter extends Service {
  call(params: number[]) {
    const p = this.translate(params)
    super.call(p)
  }
  // 做一层兼容性转换 假设客户端过来的是正序排列数组，服务端需要倒序排列数组。
  // 通过适配器做参数兼容，而不用修改客户端和服务端的代码
  translate(params: number[]) {
    return params.sort((a, b) => {
      if (a > b) {
        return -1
      }
      if (a < b) {
        return 1
      }
      // a must be equal to b
      return 0
    })
  }
}

export { Adapter }
