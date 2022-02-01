class Counter extends React.Component {
  state = {
    count: 0
  }

  handleIncrease = () => this.setState({count: count + 1})
  handleDecrease = () => this.setState({ count: count - 1 })
  
  render() {
    return (
      <div>
        <h1>React Counter App</h1>
        <h2>{ this.state.count}</h2>

        <div>
          <button onClick={this.handleDecrease}>-</button>
          <button onClick={this.handleIncrease}>+</button>
        </div>
      </div>
    )
  }
}




ReactDOM.render(<Counter/>, document.getElementById('root'))