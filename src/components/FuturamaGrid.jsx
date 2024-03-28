import { FuturamaItem } from "./FuturamaItem"
import { useFetchFuturamas } from "../hooks/useFetchFuturama"
import { useState } from "react";
import { CrearFuturama } from "./CrearFuturama";
import { EditarFuturama } from "./EditarFuturama";
import DataTable from "react-data-table-component";

export const FuturamaGrid = () => {
  
    const {futuramas, setFuturamas ,isLoading} = useFetchFuturamas();

    const [OpenForm, setOpenForm] = useState(false)
    const [OpenForm2, setOpenForm2] = useState(false)
    const [Iddato, setIddato] = useState('')

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

    const deleteItem = (deleteItem) => {
        const deletedItems = futuramas.filter(futurama => futurama.id !== deleteItem);
        setFuturamas(deletedItems);
    }

    const columns = [
        {
          name: 'Nombre',
          selector: row => row.name,
        },
        {
          name: 'Genero',
          selector: row => row.gender
        },
        {
          name: 'Especie',
          selector: row => row.species, 
        },
        {
          name: "Imagen",
          selector: row => <img id="imageDataTable" src={row.image} alt={row.name}/>,
        },
        {
            name: "Editar",
            selector: row => <button onClick={() =>{setOpenForm2(true) ; setIddato(row.id)}}>Editar</button>
        },
        {
            name: "Eliminar",
            selector: row => <button onClick={() =>{deleteItem(row.id)}}>Eliminar</button>
        }
      ];

      

    return(
        <div className="card-grid">
            <button className="botonCrear" onClick={() =>{setOpenForm(true);}}>Crear</button>
            <button>Salir</button>

            {OpenForm && <CrearFuturama addItem={addItem} newId={futuramas.length} setOpenForm={setOpenForm} />}
            {OpenForm2 && <EditarFuturama id={Iddato} editItem={editItem} setOpenForm2={setOpenForm2}/>}

            <DataTable
                columns={columns}
                data={futuramas}
                highlightOnHover
                showGridlines
                responsive
            />

        {
            futuramas.map( (futurama) => (

                <FuturamaItem
                    key={futurama.id}
                    {...futurama}
                    //editItem={editItem}
                    //deleteItem={deleteItem}
                />

            ))
        }
            
        </div>

        
    )

}
