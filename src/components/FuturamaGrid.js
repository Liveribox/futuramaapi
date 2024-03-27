import { FuturamaItem } from "./FuturamaItem"
import { useFetchFuturamas } from "../hooks/useFetchFuturama"
import { useState } from "react";
import { CrearFuturama } from "./CrearFuturama";


export const FuturamaGrid = () => {
  
    const {futuramas, setFuturamas ,isLoading} = useFetchFuturamas();

    const [OpenForm, setOpenForm] = useState(false)

    const addItem = (newItem) => {
        setFuturamas([...futuramas , newItem])
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
                    />

                ))
            }
        </div>
    )

}
