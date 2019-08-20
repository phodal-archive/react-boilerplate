import React, { Component } from 'react';

class PhdInput extends Component {
  private stepInput: React.RefObject<HTMLInputElement>;

  constructor(props: any) {
    super(props);
    this.stepInput = React.createRef();
  }

  componentDidMount(): void {
    if (this.stepInput.current) {
      this.stepInput.current.focus();
    }
  }

  render() {
    return (
      <input type="text" ref={this.stepInput} />
    )
  };
}

export default PhdInput;
