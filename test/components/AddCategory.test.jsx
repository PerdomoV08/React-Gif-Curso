import { fireEvent, render, screen } from "@testing-library/react"
import AddCategory from "../../src/components/AddCategory"

describe('Prueba del componente de <AddCategory />', () => {

    test('Debe de cambiar el valor de la caja de texto ', () => {
        render(<AddCategory onNewCategory={() => {}}/>);
        // Disparar un evento
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: 'Jujutsu Kaisen'}});

        expect(input.value).toBe('Jujutsu Kaisen')
    })

    test('Deberia de llamar el onNewCategory si el input tiene un valor ', () => {
        const inputValue = 'Jujutsu Kaisen'
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }/>);

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, {target: {value: inputValue }}) // Evalue que la caja de texto tenga el valor
        fireEvent.submit(form); // Evalua que el form si exita
        expect(input.value).toBe('')

        expect(onNewCategory).toHaveBeenCalled() // Valida que la funcion haya sido llamada
        expect(onNewCategory).toHaveBeenCalledTimes(1) // Valida que la funcion haya sido llamada una ves o el numero que se ponga
        expect(onNewCategory).toHaveBeenCalledWith(inputValue) // valida que la funcion haya sido llamada con un valor respectivo
    })
    
    test('No debe de llamar el onNewCategory si el input esta vacio ', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory }/>);

        const form = screen.getByRole('form')
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0) 
        //expect(onNewCategory).not.toHaveBeenCalledTimes(0) // Otra forma de hacerlo
    })
    
})
