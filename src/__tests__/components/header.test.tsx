import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Header } from '../../components';

describe('<Header />', () => {
  it('should render', () => {
    const component = shallow(
      <Header title='Web Docs' />
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});
