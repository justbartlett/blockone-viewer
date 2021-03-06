import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Blocks from '../components/blocks';
import Block from '../components/block';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Pacman from '../components/pacman';
import ErrorMessage from '../components/errorMessage';

/*  getting an odd
    console.error node_modules/react-dom/cjs/react-dom.development.js:88
    Warning: `NaN` is an invalid value for the `left` css style property.
    in span
    so supressing the warning
*/

const originalError = console.error;
beforeAll(() => {
  console.error = jest.fn();
});
afterAll(() => {
  console.error = originalError;
});

Enzyme.configure({ adapter: new Adapter() });

describe('the Blocks component', () => {
  it('should render a Block component for each block', () => {
    const blocks = [
      {
        id: '06b570581dbc8cc398ac80b2dc98683701f1d7ef32dbabea4bfff7402ef436ee',
        timestamp: '2020-03-28T16:34:54.500',
        actions: 20
      },
      {
        id: '06b570581dbc8cc398ac80b2dc98683701f1d7ef32dbabea4bfff7402ef436e1',
        timestamp: '2020-03-28T16:34:54.500',
        actions: 17
      },
      {
        id: '06b570581dbc8cc398ac80b2dc98683701f1d7ef32dbabea4bfff7402ef436e2',
        timestamp: '2020-03-28T16:34:54.500',
        actions: 15
      }
    ];
    const wrapper = shallow(<Blocks blocks={blocks} />);
    expect(wrapper.find('Block').length).toEqual(3);
  });
  it('should match the last snapshot without blocks', () => {
    const wrapper = shallow(<Blocks blocks={[]} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should match the last snapshot with blocks', () => {
    const blocks = [
      {
        id: '06b570581dbc8cc398ac80b2dc98683701f1d7ef32dbabea4bfff7402ef436ee',
        timestamp: '2020-03-28T16:34:54.500',
        actions: 20
      },
      {
        id: '06b570581dbc8cc398ac80b2dc98683701f1d7ef32dbabea4bfff7402ef436e1',
        timestamp: '2020-03-28T16:34:54.500',
        actions: 17
      },
      {
        id: '06b570581dbc8cc398ac80b2dc98683701f1d7ef32dbabea4bfff7402ef436e2',
        timestamp: '2020-03-28T16:34:54.500',
        actions: 15
      }
    ];
    const wrapper = shallow(<Blocks blocks={blocks} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should match a snapshot with pacman if loading', () => {
    const wrapper = shallow(<Blocks isLoading="true" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('the Block component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Block
        block={{
          id: 1,
          timestamp: '1',
          transactions: [
            {
              trx: [{ id: 1 }]
            }
          ]
        }}
        blockIndex="1"
      />
    );
  });
  it('should match the last snapshot with a block', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should toggle the accordion text', () => {
    expect(wrapper.find('.text-less.disabled').length).toEqual(1);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(wrapper.find('.text-less.active').length).toEqual(1);
  });
});

describe('the Pacman component', () => {
  it('should match the last Pacman snapshot', () => {
    const wrapper = shallow(<Pacman />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('the ErrorMessage component', () => {
  it('should match the last ErrorMessage snapshot', () => {
    const wrapper = shallow(<ErrorMessage message="oh no, error" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
