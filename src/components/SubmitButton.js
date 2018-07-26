import React, { Component } from 'react';
import styled from 'styled-components';

const StyledButton = styled.input`
  color: #fff;
  text-align: center;
  padding: 20px 30px;
  font-size: 1.1rem;
  width: 100%;
  letter-spacing: 3px;
  background-color: #06a96e;
`;

export class SubmitButton extends Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <StyledButton
        disabled={props.disabled}
        type="submit"
        onClick={props.onClick}
        value={props.value}
      >
        {children}
      </StyledButton>
    );
  }
}

export default SubmitButton;
