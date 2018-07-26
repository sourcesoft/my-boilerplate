import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import axios from 'axios';
import { connect } from 'react-redux';
import { API_URL } from '../utils/config';
import { setStatus } from '../modules/global';
import Wrapper from '../components/Wrapper';
import LegendHeader from '../components/LegendHeader';
import SubmitButton from '../components/SubmitButton';
import Input from '../components/Input';

// some simple css resets
injectGlobal`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  input {
    border: 0;
  }
  *:before, *:after {
    box-sizing: border-box;
  }
  body {
    font-size: 100%;
    background-color: #F8F8F8;
  }
  ol, ul {
    list-style: none;
  }
`;

export class App extends Component {
  componentDidMount() {
    // fetch BTC price
    axios
      .get(`${API_URL}/price/btc`)
      .then(response => {
        const data = response && response.data && response.data;
        const price = data && data.data && data.data.price;
        this.props.setStatus(true);
      })
      .catch(error => {
        this.props.setStatus(false);
      })
      .then(() => {
        this.props.setStatus(false);
      });
  }
  shouldSubmit = () => {
    return true;
  };
  handleSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <Wrapper>
        <form onSubmit={this.handleTrade}>
          <LegendHeader>Legend Header</LegendHeader>
          <Input required placeholder="First Name" />
          <SubmitButton
            disabled={!this.shouldSubmit()}
            onClick={this.handleSubmit}
            value="Submit"
          />
        </form>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  status: state.global.status,
});

const mapDispatchToProps = dispatch => ({
  setStatus: value => dispatch(setStatus(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
