import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas en getGifs()', () => {
    
    test('Debe de retornar un arreglo en gifs', async () => {
        
        const gifs = await getGifs('jujutsu kaisen');
        
        expect(gifs.length).toBeGreaterThan(0); // Sea mayor a 0
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
    })
    
})
