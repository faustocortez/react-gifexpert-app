import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';


describe('Pruebas en el hook useFetchGifs', () => {
    
    test('* debe retornar el estado inicial', async() => {
        // const { data, loading } = useFetchGifs('One punch');

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('one punch'));
        const { data, loading } = result.current;

        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('* debe de retornar un arreglo de imágenes y loading false', async() => {
        
        // waitForNextUpdate retorna una promesa para saber cuando hay un cambio en el custom hook
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('one punch'));
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    })
    
    
});
