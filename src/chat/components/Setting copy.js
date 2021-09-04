import React from 'react'
// import styled from 'styled-components'

class Setting extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // 콜백에서 'this'를 동작하게 하려면 바인딩이 필수적으로 들어가야 합니다.
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }
  
  ReactDOM.render(
    <Setting />,
    document.getElementById('root')
  );