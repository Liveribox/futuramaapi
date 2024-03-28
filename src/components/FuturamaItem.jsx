import { useState } from "react";
import { EditarFuturama } from "./EditarFuturama";
import DataTable from "react-data-table-component";


export const FuturamaItem = ({name,gender,species,image,id, editItem, deleteItem}) => {

  const [OpenForm, setOpenForm] = useState(false)

  return (
    
    <>
        {OpenForm && <EditarFuturama id={id} editItem={editItem} setOpenForm={setOpenForm}/>}
    </>
    
  );
};
