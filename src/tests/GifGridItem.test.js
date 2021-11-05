import react from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../components/GifGridItem';


describe('Pruebas del componente GifGridItem', () => {
    // Para actualizar un snapshot presionamos "u" en consola.
    // De esta manera podemos podemos validar que nuestras condiciones
    // funcionen como esperamos evaluando un antes y después del snapshot.

    const title = 'Un título';
    const url = 'https://localhost';
    const wrapper = shallow(<GifGridItem title={ title } url={ url } />);

    test('* debe mostrar el component GifGridItem correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    // Evaluando el <p>párrafo</p> del componente
    test('* debe de tener un párrafo con el title', () => {
        // el wrapper funciona como el query selector del DOM en JS
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });
    
    test('* debe de tener la imágen al url y al alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

        // para ver el html
        // console.log(img.html());

        // para ver las props del elemento
        // console.log(img.props());
    });

    test('* debe de tener la clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        const animateClass = 'animate__fadeIn';

        expect(div.hasClass(animateClass)).toEqual(true);
    })
    
    
    
});