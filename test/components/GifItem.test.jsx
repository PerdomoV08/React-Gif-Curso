// @ts-nocheck
import {render, screen} from '@testing-library/react'
import GifItem from '../../src/components/GifItem'

describe('Pruebas en el componente <GifItem />', () => {

    const title = 'HxH';
    const url = 'htts://hunterXhunter.com';

    test('Debe de hacer macth con el snapshot', () => {
        const {container} = render(<GifItem title = {title} url = {url}/>)
        expect(container).toMatchSnapshot();
    })
    
    test('Debe de mostrar la imagen con el URL y ALT indicado', () => {
        render(<GifItem title={title} url={url} />);
        //screen.debug() // Muestra una ayuda para comprender mejor su funcionamiento
        // expect(screen.getByRole('img').src).toBe(url) // Otra forma de hacerlo
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    })
    
    test('Debe de mostrar el titulo en el componente', () => {
        render(<GifItem title={title} url= {url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    })
    

})
