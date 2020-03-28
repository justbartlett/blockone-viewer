import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Blocks from '../components/blocks';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

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
});
