class Counter extends React.Component {
  state = {

  }
  render() {
    return (
      <div>
        <h1>React Counter App</h1>
        <h2>0</h2>

        <div>
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    )
  }
}




ReactDOM.render(<Counter/>, document.getElementById('root'))