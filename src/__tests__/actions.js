import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  fetchHeadBlockSucceeded,
  fetchHeadBlockFailed,
  fetchHeadBlockStarted,
  fetchHeadBlock,
  fetchBlocks,
  fetchBlocksFailed,
  fetchBlocksStarted,
  fetchBlocksSucceeded
} from '../actions';
import * as api from '../api';
jest.unmock('../api');
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('action creators:', () => {
  it('#fetchHeadBlockSucceeded', () => {
    const expectedAction = {
      type: 'FETCH_HEAD_BLOCK_SUCCEEDED'
    };
    expect(fetchHeadBlockSucceeded()).toEqual(expectedAction);
  });
  it('#fetchHeadBlockStarted', () => {
    const expectedAction = {
      type: 'FETCH_HEAD_BLOCK_STARTED'
    };
    expect(fetchHeadBlockStarted()).toEqual(expectedAction);
  });
  it('#fetchHeadBlockFailed', () => {
    const error = 'This is an error message';
    const expectedAction = {
      type: 'FETCH_HEAD_BLOCK_FAILED',
      payload: {
        error
      }
    };
    expect(fetchHeadBlockFailed(error)).toEqual(expectedAction);
  });
  it('#fetchBlocksSucceeded', () => {
    const blocks = {
      id: '06b570581dbc8cc398ac80b2dc98683701f1d7ef32dbabea4bfff7402ef436ee',
      timestamp: '2020-03-28T16:34:54.500',
      actions: 20
    };
    const expectedAction = {
      type: 'FETCH_BLOCKS_SUCCEEDED',
      payload: {
        blocks
      }
    };
    expect(fetchBlocksSucceeded(blocks)).toEqual(expectedAction);
  });
  it('#fetchHeadBlock', () => {
    api.fetchHeadBlock = jest.fn(
      () => new Promise((resolve, reject) => resolve({ data: 'meh' }))
    );
    const expectedActions = [
      { type: 'FETCH_HEAD_BLOCK_STARTED' },
      { type: 'FETCH_HEAD_BLOCK_SUCCEEDED' },
      { type: 'FETCH_BLOCKS_STARTED' }
    ];
    const store = mockStore({
      blocks: {
        items: []
      }
    });
    return store.dispatch(fetchHeadBlock()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      expect(api.fetchHeadBlock).toHaveBeenCalled();
    });
  });
  it('#fetchBlocksFailed', () => {
    const error = 'This is an error message';
    const expectedAction = {
      type: 'FETCH_BLOCKS_FAILED',
      payload: {
        error
      }
    };
    expect(fetchBlocksFailed(error)).toEqual(expectedAction);
  });
  it('#fetchBlocksStarted', () => {
    const expectedAction = {
      type: 'FETCH_BLOCKS_STARTED'
    };
    expect(fetchBlocksStarted()).toEqual(expectedAction);
  });
  it('#fetchBlocks', () => {
    api.fetchBlocks = jest.fn(
      () => new Promise((resolve, reject) => resolve([{ data: 'meh' }]))
    );
    const expectedActions = [
      { type: 'FETCH_BLOCKS_STARTED' },
      { type: 'FETCH_BLOCKS_SUCCEEDED', payload: { blocks: [{ data: 'meh' }] } }
    ];
    const store = mockStore({
      blocks: {
        items: []
      }
    });
    return store.dispatch(fetchBlocks({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      expect(api.fetchBlocks).toHaveBeenCalled();
    });
  });
});
