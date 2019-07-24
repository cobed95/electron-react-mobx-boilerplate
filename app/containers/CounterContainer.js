import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Counter from '../components/Counter';

// function mapStateToProps(state) {
//   return {
//     counter: state.counter
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(CounterActions, dispatch);
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter);

@observer
export default class CounterContainer extends Component {
  render() {
    return (
      <Counter />
    )
  }
}
