import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions/counter'

const Counter = (props) => (
  <div>
    Counter: {props.count}
    <button onClick={props.increment}>+</button>
    <button onClick={props.decrement}>-</button>
  </div>
)

Counter.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  count: state.getIn(['count']),
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
