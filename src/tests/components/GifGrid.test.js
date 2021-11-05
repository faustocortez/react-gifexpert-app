import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
// para fingir la llamada al archivo
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas del componente GifGrid', () => {
    const category = 'Demon slayer';
    const mockUseFetchGifs = useFetchGifs;
    
    test('* renderizar el componente por primera vez correctamente', () => {
        
        // valores del estado inicial del useFetch.
        mockUseFetchGifs.mockImplementation( category => {
            return { data: [], loading: true }
        });

        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot(); 
    });

    test('* debe de mostrar items cuando se cargan imágenes useFetch', () => {
        
        // aplicando mocks: como si el componente ya cuenta con la inforamacion del request

        const data = [{
            id: '0',
            url: 'https://lorem.com/img',
            title: 'mockTitle'
        }];
    
        mockUseFetchGifs.mockImplementation( category => {
            return { data, loading: false };
        });
    
        const wrapper = shallow( <GifGrid category={ category } /> );
        expect( wrapper ).toMatchSnapshot();
        
        
    });
    
    
});
