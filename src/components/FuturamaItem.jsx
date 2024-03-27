import { useState } from "react";
import { EditarFuturama } from "./EditarFuturama";


export const FuturamaItem = ({name,gender,species,image,id, editItem}) => {

  const [OpenForm, setOpenForm] = useState(false)

  return (
    <div className="card">
        <p>Nombre: {name}</p>
        <p>Genero: {gender}</p>
        <p>Especie: {species}</p>
        <img src={image} alt={name}/>
        <button type="button" onClick={() => {setOpenForm(true)}}>Editar</button>
        {OpenForm && <EditarFuturama id={id} editItem={editItem} setOpenForm={setOpenForm}/>} 
        <button type="button">Eliminar</button>
    </div>
  )
}
