import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('Test footer', () => {
  const footer = mount(<Footer />);
  test('Render del componente footer', () => {
    expect(footer.length).toEqual(1);
  });
  test('Render del titulo', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});
