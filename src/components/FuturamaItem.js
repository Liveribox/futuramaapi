

export const FuturamaItem = ({name,gender,species,image,id}) => {

  return (
    <div className="card">
        <p>Nombre: {name}</p>
        <p>Genero: {gender}</p>
        <p>Especie: {species}</p>
        <img src={image} alt={name}/>
    </div>
  )
}
