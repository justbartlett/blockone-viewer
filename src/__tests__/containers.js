import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import ConnectedApp, { App } from '../containers/app';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/button';

Enzyme.configure({ adapter: new Adapter() });

describe('the App container', () => {
  it('should render an ErrorMessage component if there is an error', () => {
    const spy = jest.fn();
    const wrapper = shallow(<App fetchBlocks={spy} error="Boom!" />);
    expect(wrapper.find('ErrorMessage').exists()).toBe(true);
  });
  it('should dispatch fetchBlocks on mount', () => {
    const spy = jest.fn();
    const wrapper = mount(<App fetchBlocks={spy} blocks={[]} />);
    expect(spy).toHaveBeenCalled();
  });
  it('should dispatch fetchBlocks on button click', () => {
    const fetchBlocks = jest.fn();
    const button = shallow(<Button onClick={fetchBlocks} />);
    button.find('button').simulate('click');
    expect(fetchBlocks.mock.calls.length).toEqual(1);
  });
  it('should fetch head block on mount', () => {
    const middlewares = [thunk];
    const initialState = {
      blocks: {
        blocks: [],
        isLoading: false,
        error: null
      }
    };
    const mockStore = configureStore(middlewares)(initialState);
    const wrapper = mount(
      <Provider store={mockStore}>
        <ConnectedApp />
      </Provider>
    );
    const expectedAction = { type: 'FETCH_HEAD_BLOCK_STARTED' };
    expect(mockStore.getActions()[0]).toEqual(expectedAction);
  });
});
