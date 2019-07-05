import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../../components/Footer/Footer';

describe('<Footer/> Snapshot Test', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Footer/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
