import React from "react";

class Clock extends React.Component {
  state = { date: new Date() };

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }
  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <>
        <h1>Digital clock by Class Component</h1>
        <h1>{this.state.date.toLocaleTimeString(this.props.value)}</h1>
      </>
    );
  }
}

export default Clock;