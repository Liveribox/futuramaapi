import { useState } from "react";
import { Modal , Input } from "antd";


export const CrearFuturama = ({addItem,newId,setOpenForm}) => {
  
    const [inputName, setInputName] = useState('');
    const [inputGender, setInputGender] = useState('');
    const [inputSpecies, setInputSpecies] = useState('');
    const [inputImagen, setinputImagen] = useState('');

    const AddItem = () => {
        const Item = {
            id: newId + 1,
            name: inputName,
            gender: inputGender,
            species: inputSpecies,
            image: inputImagen
        }

        addItem(Item)
    }

    const crear = () => {
        AddItem()
        setOpenForm(false);
    }

    const aparecerModal = () => {
        setOpenForm(true)
    }

    const esconderModal = () => {
        setOpenForm(false)
    };

    return(

        <Modal
        className="modal"
        title="Crear"
        open={aparecerModal}
        onOk={crear}
        onCancel={esconderModal}
        okText="Crear"
        cancelText="Cancelar"
      >
        <Input placeholder="Nombre" id="name" value={inputName} onChange={(e) => setInputName(e.target.value)}/>
        <br/>
        <br/>
        <Input placeholder="Genero" id="genero" value={inputGender} onChange={(e) => setInputGender(e.target.value)}/>
        <br/>
        <br/>
        <Input placeholder="Especie" id="specie" value={inputSpecies} onChange={(e) => setInputSpecies(e.target.value)}/>
        <br/>
        <br/>
        <Input placeholder="Enlace Imagen" id="image" value={inputImagen} onChange={(e) => setinputImagen(e.target.value)}/>
        
      </Modal>

        /*<>
            <form>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                />

                <label htmlFor="gender">Gender:</label>
                <input
                    type="text"
                    id="gender"
                    value={inputGender}
                    onChange={(e) => setInputGender(e.target.value)}
                />

                <label htmlFor="species">Species:</label>
                <input
                    type="text"
                    id="species"
                    value={inputSpecies}
                    onChange={(e) => setInputSpecies(e.target.value)}
                />

                <label htmlFor="images">Species:</label>
                <input
                    type="text"
                    id="images"
                    value={inputImagen}
                    onChange={(e) => setinputImagen(e.target.value)}
                />

                <button type="button" onClick={enviar}>Enviar</button>
                
            </form>
        </>*/
        

            
    )

    
  
}
