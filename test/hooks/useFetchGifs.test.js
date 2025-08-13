import { renderHook, waitFor } from "@testing-library/react"
import useFetchGifs from "../../src/hooks/useFetchGifs"
import { exact } from "prop-types";

describe('Prueba de usefetch,js', () => {

    test('Debe de regresar el estado inicial ', () => {
        const {result} = renderHook(() => useFetchGifs('Jujutsu Kaisen'));
        const {images, isLoading} = result.current;

        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()
    })
    

    test('Deberia de retornar un arreglo de imagenes y isLoading en false ', async () => {
        const {result} = renderHook(() => useFetchGifs('Jujutsu Kaisen'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)  // Mayor a 0
        )

        const {images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()
    })  
    
})
