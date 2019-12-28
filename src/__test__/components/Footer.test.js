import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('Test footer', () => {
  test('Render del componente footer', () => {
    const footer = mount(<Footer />);
    expect(footer.length).toEqual(1);
  });
});
