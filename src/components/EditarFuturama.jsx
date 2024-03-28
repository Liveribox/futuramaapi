import { useState } from "react";


export const EditarFuturama = ({id ,editItem,setOpenForm2}) => {

    const [inputName, setInputName] = useState('');
    const [inputGender, setInputGender] = useState('');
    const [inputSpecies, setInputSpecies] = useState('');
    const [inputImagen, setinputImagen] = useState('');

    const EditItem = () => {
        const Item = {
            id: id,
            name: inputName,
            gender: inputGender,
            species: inputSpecies,
            image: inputImagen
        }

        editItem(Item)
    }

    const editar = () => {
        EditItem()
        setOpenForm2(false);
    }

    return(

        <>
            <form className="formulario">
                <label htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                />

                <label htmlFor="gender">Genero:</label>
                <input
                    type="text"
                    id="gender"
                    value={inputGender}
                    onChange={(e) => setInputGender(e.target.value)}
                />

                <label htmlFor="species">Especies:</label>
                <input
                    type="text"
                    id="species"
                    value={inputSpecies}
                    onChange={(e) => setInputSpecies(e.target.value)}
                />

                <label htmlFor="images">Imagenes:</label>
                <input
                    type="text"
                    id="images"
                    value={inputImagen}
                    onChange={(e) => setinputImagen(e.target.value)}
                />

                <button type="button" onClick={editar}>Enviar</button>
                
            </form>
        </> 
    )
}