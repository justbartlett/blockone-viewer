import React, { Component } from 'react';
import { connect } from 'react-redux';
import ErrorMessage from '../components/errorMessage';
import Button from '../components/button';
import Blocks from '../components/blocks';
import { fetchHeadBlock } from '../actions';
import '../assets/scss/app.scss';

export class App extends Component {
  componentDidMount() {
    this.props.fetchBlocks();
  }
  render() {
    return (
      <div className="app">
        <div className="header">
          <h1>Block.one Viewer</h1>
          <Button onClick={this.props.fetchBlocks} />
        </div>
        {this.props.error && <ErrorMessage message={this.props.error} />}
        <Blocks blocks={this.props.blocks} isLoading={this.props.isLoading} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { blocks, isLoading, error } = state.blocks;
  return { blocks, isLoading, error };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBlocks: () => dispatch(fetchHeadBlock())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
