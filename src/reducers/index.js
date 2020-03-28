const initialState = {
  blocks: [],
  isLoading: false,
  error: null
};

export default function blocks(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_HEAD_BLOCK_STARTED': {
      return {
        ...state,
        isLoading: true
      };
    }
    case 'FETCH_HEAD_BLOCK_SUCCEEDED': {
      return {
        ...state,
        isLoading: true
      };
    }
    case 'FETCH_HEAD_BLOCK_FAILED': {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }
    case 'FETCH_BLOCKS_STARTED': {
      return {
        ...state,
        isLoading: true
      };
    }
    case 'FETCH_BLOCKS_SUCCEEDED': {
      return {
        ...state,
        blocks: action.payload.blocks,
        isLoading: false
      };
    }
    case 'FETCH_BLOCKS_FAILED': {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }
    default: {
      return state;
    }
  }
}
