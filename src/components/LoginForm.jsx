import { useState } from "react" 
import { LoginUsuario } from "./LoginUsuario"
import { FuturamaGrid } from "./FuturamaGrid";

export const LoginForm = () => {

    const [nombreUsuario, setNombreUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [error, setError] = useState('');
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const isValid = await LoginUsuario(nombreUsuario, contraseña);

            if (isValid) {
                <FuturamaGrid />
            } else {
                setError('Nombre de usuario o contraseña incorrectos.');
            }

        } catch (error) {
            setError('Ocurrió un error al intentar iniciar sesión.');
        }
        
    };


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={nombreUsuario} onChange={(e) => setNombreUsuario(e.target.value)} placeholder="Usuario"  />
            <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} placeholder="Contraseña"  />
            <button type="submit">Iniciar sesión</button>
            {error && <p>{error}</p>}    
        </form>
    );
}
