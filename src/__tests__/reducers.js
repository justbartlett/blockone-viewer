import blocks from '../reducers';

describe('reducer', () => {
  const initialState = {
    blocks: [],
    isLoading: false,
    error: null
  };

  it('returns initialState', () => {
    expect(blocks(undefined, {})).toEqual(initialState);
  });

  it('FETCH_BLOCKS_STARTED', () => {
    const action = { type: 'FETCH_BLOCKS_STARTED' };
    const expectedState = { ...initialState, isLoading: true };
    expect(blocks(initialState, action)).toEqual(expectedState);
  });

  it('FETCH_BLOCKS_SUCCEEDED', () => {
    const block = [{ id: 1, title: 'testing', description: 'lets test this' }];
    const action = {
      type: 'FETCH_BLOCKS_SUCCEEDED',
      payload: { blocks: block }
    };
    const expectedState = { ...initialState, blocks: block };
    expect(blocks(initialState, action)).toEqual(expectedState);
  });
});
