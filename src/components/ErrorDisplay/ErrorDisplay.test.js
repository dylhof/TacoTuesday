import React from 'react';
import { shallow } from 'enzyme';
import {ErrorDisplay} from './ErrorDisplay';

describe('ErrorDisplay', () => {
  const mockPathName = '/yum-taco';
  let wrapper = shallow(<ErrorDisplay location={mockPathName}/>)

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});