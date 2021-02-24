import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      charCount: 0
    };
  }

  handleChange = (event) => {
    this.setState({
      charCount: event.target.value.length,
      message: event.target.value
    })
  }

  render() {
    let charNumber = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={(event) => this.handleChange(event)} type="text" name="message" id="message" value={this.state.message}/>
        <p>{(this.props.maxChars - this.state.charCount)} left</p>
      </div>
    );
  }
}

export default TwitterMessage;
