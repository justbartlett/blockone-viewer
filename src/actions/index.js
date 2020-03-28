import * as api from '../api';

export function fetchHeadBlockSucceeded() {
  return {
    type: 'FETCH_HEAD_BLOCK_SUCCEEDED'
  };
}

export function fetchHeadBlockFailed(error) {
  return {
    type: 'FETCH_HEAD_BLOCK_FAILED',
    payload: {
      error
    }
  };
}

export function fetchHeadBlockStarted() {
  return {
    type: 'FETCH_HEAD_BLOCK_STARTED'
  };
}

export function fetchHeadBlock() {
  return dispatch => {
    dispatch(fetchHeadBlockStarted());
    return api
      .fetchHeadBlock()
      .then(resp => {
        dispatch(fetchHeadBlockSucceeded());
        dispatch(fetchBlocks(resp.head_block_num));
      })
      .catch(err => {
        dispatch(fetchHeadBlockFailed(err));
      });
  };
}

export function fetchBlocksSucceeded(blocks) {
  return {
    type: 'FETCH_BLOCKS_SUCCEEDED',
    payload: {
      blocks
    }
  };
}

export function fetchBlocksFailed(error) {
  return {
    type: 'FETCH_BLOCKS_FAILED',
    payload: {
      error
    }
  };
}

export function fetchBlocksStarted() {
  return {
    type: 'FETCH_BLOCKS_STARTED'
  };
}

export function fetchBlocks(id) {
  return dispatch => {
    dispatch(fetchBlocksStarted());
    api
      .fetchBlocks(id, 10)
      .then(resp => {
        dispatch(fetchBlocksSucceeded(resp));
      })
      .catch(err => {
        dispatch(fetchBlocksFailed(err.message));
      });
  };
}
