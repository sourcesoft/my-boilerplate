import React, { Component } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  color: #FFF;
  text-align: left;
  font-size: 1.2rem;
  padding: 15px 25px;
  margin-bottom: 10px;
  width: 100%;
  background-color: transparent;
  &:focus {
    background-color: #4b536b;
  }
  border: 1px solid #CCC;
`;

export class Input extends Component {
  render() {
    const { children, ...props } = this.props;
    return <StyledInput {...props}>{children}</StyledInput>;
  }
}

export default Input;
