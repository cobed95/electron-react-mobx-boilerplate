import { observable, action } from 'mobx';

class CounterStore {
  @observable count;

  constructor() {
    this.count = 0;
  }

  @action.bound
  increment() {
    this.count += 1
  }

  @action.bound
  decrement() {
    this.count -= 1
  }

  @action.bound
  incrementIfOdd() {
    if (this.count % 2 === 0)
      return
    
    this.count += 1
  }

  @action.bound
  incrementAsync(delay) {
    const ms = delay === undefined ? 1000 : delay
    
    setTimeout(() => {
      this.increment()
    }, ms)
  }
}

export default new CounterStore();