import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchHeadBlock, fetchBlocks, fetchBlocksSucceeded } from '../actions';
import * as api from '../api';

jest.unmock('../api');
api.fetchHeadBlock = jest.fn(
  () => new Promise((resolve, reject) => resolve({ data: 'meh' }))
);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('action creators:', () => {
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
});
