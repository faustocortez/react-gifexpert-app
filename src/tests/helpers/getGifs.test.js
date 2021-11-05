import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con el método getGifd Fetch', () => {
    // ponemos async para no usar el .then
    test('* debe traer 10 elementos', async() => {
        
        const gifs = await getGifs('One punch');
        expect(gifs.length).toBe(10);
    });

    test('* debe de ser vacio', async() => {
        
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
    
})
