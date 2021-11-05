import React from 'react';
// to help with testing function
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en el componente <AddCategory />', () => {

    // const setCategories = () => {};
    const setCategories = jest.fn();
    const setInputValue = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={ setCategories } />);;

    beforeEach(() => {
        // para limpiar las simulaciones anteriores.
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories } />);

    })
    
    test('* debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('* debe de cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        
        // simular onchange()
        // { target: { value } } es por el parametro event
        input.simulate('change', { target: { value } });
    });

    test('* debe mostrar el valor de "inputValue" en un párrafo', () => {
        
        const p = wrapper.find('p');
        const value = 'Hola Mundo';

        expect(p.text().trim()).toBe(value);
    });

    // simular onSubmit()
    test('* no debe de postear la información oSubmit', () => {
        const form = wrapper.find('form');
        form.simulate('submit', { preventDefault(){} });

        // probar si se llama una función.
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('* debe de llamar el setCategory y limpiar la caja de texto', () => {
        // simulate input change
        const input = wrapper.find('input');
        let value = 'Halooo!';
        input.simulate('change', { target: { value } });

        // simular submit
        const form = wrapper.find('form');
        form.simulate('submit', { preventDefault(){} });


        // se llama al set categories
        expect(setCategories).toHaveBeenCalled();
        // validar que se ha llamado la función y no otro parametro
        // expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        
        // el valor del input es vacio
        expect(input.prop('value')).toBe('');


    })
    
    
    
    
    
})
