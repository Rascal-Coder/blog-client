import { Cash } from 'cash-dom'

// 扩展 Cash 类型，添加 addSwitchAppAnimation 方法
declare module 'cash-dom' {
  interface Cash {
    addSwitchAppAnimation(): Cash
  }
}
