import { render, screen } from "@testing-library/react"
import GifGrid from "../../src/components/GifGrid"
import useFetchGifs from "../../src/hooks/useFetchGifs"


jest.mock('../../src/hooks/useFetchGifs')

describe('Prueba de <GifGrid />', () => {

    const category = 'Jujutsu Kaisen'

    test('Debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category}/>)
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))
    })
    
    test('Debe de mostrar cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Jujutsu Kaisen',
                url: 'https://localhost/jujutsu-kaisen.jp'
            },
            {
                id: '123',
                title: 'HxH',
                url: 'https://localhost/hunterxhunter.jp'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={category}/>)
        expect(screen.getAllByRole('img').length).toBe(2) 

    })
    
})
