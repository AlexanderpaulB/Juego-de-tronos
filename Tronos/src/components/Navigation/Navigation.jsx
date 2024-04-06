import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <div className="navig">
        <Link to="/personajes">Personajes</Link>  
        <Link to="/casas">Casas</Link>
        <Link to="/cronologia">Cronologia</Link>
      </div>
    </>
  )
}
