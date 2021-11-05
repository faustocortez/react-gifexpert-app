import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en el componente <AddCategory />', () => {

    const setCategories = () => {};
    const wrapper = shallow(<AddCategory setCategories={ setCategories } />);
    const value = 'Hola Mundo';
    
    test('* debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('* debe de cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        
        // simular onchange()
        // { target: { value } } es por el parametro event
        input.simulate('change', { target: { value } });
    });

    test('* debe mostrar el valor de "inputValue" en un párrafo', () => {
        
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(value);
    })
    
    
    
})
