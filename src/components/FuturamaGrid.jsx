import { FuturamaItem } from "./FuturamaItem"
import { useFetchFuturamas } from "../hooks/useFetchFuturama"
import { useState } from "react";
import { CrearFuturama } from "./CrearFuturama";
import { EditarFuturama } from "./EditarFuturama";


export const FuturamaGrid = () => {
  
    const {futuramas, setFuturamas ,isLoading} = useFetchFuturamas();

    const [OpenForm, setOpenForm] = useState(false)

    const addItem = (newItem) => {
        setFuturamas([...futuramas , newItem])
    }

    const editItem = (editItem) => {
        const updateItems = futuramas.map(futurama => {
            if(futurama.id === editItem.id ){
                return {
                    ...futurama,
                    name: editItem.name,
                    gender: editItem.gender,
                    species: editItem.species,
                    image: editItem.image
                }    
            }
            return futurama;


        });
        setFuturamas(updateItems); 
    }

    return(
        <div className="card-grid">
            <button className="botonCrear" onClick={() =>{setOpenForm(true);}}>Crear</button>

            {OpenForm && <CrearFuturama addItem={addItem} newId={futuramas.length} setOpenForm={setOpenForm} />}

            {
                futuramas.map( (futurama) => (

                    <FuturamaItem

                        key={futurama.id}
                        {...futurama}
                        editItem={editItem}
                    />

                ))
            }
        </div>
    )

}
