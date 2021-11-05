import React from "react";
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import GiftExpertApp from "../GiftExpertApp";


describe('Pruebas al componente GifExpert App', () => {
    
    test('* debe renderizar el componente de manera correcta', () => {
        
        const wrapper = shallow(<GiftExpertApp />);

        expect(wrapper).toMatchSnapshot();

    });

    test('* debe de mostrar una lista de categorias', () => {
        const categories = ['Nanatsu no taiza', 'Parasyte'];
        const wrapper = shallow(<GiftExpertApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
    
    
});
