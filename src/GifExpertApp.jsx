import { useState } from "react"
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Jujutsu kaisen']);
    
    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory))return;

        setCategories([newCategory, ...categories]) // Hace una copia del arreglo y agrega el nuevo valor
        // setCategories(cat => [...categories, 'Haikyuu']) // Otra forma de hacerlo
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertAPP</h1>

            {/* Input */}
            <AddCategory 
                // setCategories = {setCategories} // Es una forma de hacerlo y es valido, pero no es la mejor forma
                onNewCategory = {onAddCategory}
            />
            
            {/* Listado de Gif */}
            {
                categories.map( (category) => (
                    //Gif Iten
                    <GifGrid 
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}

export default GifExpertApp
