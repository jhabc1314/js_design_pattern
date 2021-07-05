interface Cloneable {
  clone()
}

class Mail {
  private receiver: string
  private sender: string
  clone() {
    const obj = Object.assign({}, this)
    obj.setReceiver = this.setReceiver
    obj.setSender = this.setSender
    obj.send = this.send
    return obj
  }
  setReceiver(receiver: string) {
    this.receiver = receiver
  }
  setSender(sender: string) {
    this.sender = sender
  }
  send() {
    console.log(`${this.sender} 发送邮件给 ${this.receiver}`)
  }
}

export { Mail }
