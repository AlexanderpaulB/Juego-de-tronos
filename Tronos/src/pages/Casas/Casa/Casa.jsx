import './Casa.scss'
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Casa() {

  const [house, setHouse] = useState();
  const { id } = useParams();

  const getHouse = async () => {
    const response = await axios('http://localhost:3000/houses/'+id);
    setHouse(response.data);
    console.log(response.data)
  }

  useEffect(() => {
    getHouse()
  }, [])

  return (
    <>
      {house  &&
    <section className="house-sec"> {/* CAJA que recoge todo*/}
      <div className="house-log"> {/* Caja que recoge logo + nombre seleccionado */}
        <img src={house.image} alt={house.image} />
        <h1> {house.name} </h1>
      </div>

      <div className="house-info">   {/* Caja que recoge 6 cajas más*/}
        {/*<div>    Caja para  LEMA                     ¡¡  NO EXISTE !!
        </div> */}
        <div> {/* Caja para  SEDE */}
          <h2>SEDE</h2>
          <h3>{house.settlement}</h3>
        </div>
        <div>   {/* Caja para  REGIÓN */}
          <h2>REGIÓN</h2>
          <h3>{house.region}</h3>
        </div>
        <div>   {/* Caja para  ALIANZAS */}
          <h2>ALIANZAS</h2>
            <h3>{house.alliances[0]}</h3>
            <h3>{house.alliances[1]}</h3>
        </div>
        <div>   {/* Caja para  RELIGIONES */}
          <h2>RELIGIONES</h2>
            <h3>{house.religions[0]}</h3>
            <h3>{house.religions[1]}</h3>
        </div>
        <div>   {/* Caja para  FUNDACIÓN */}
          <h2>FOUNDACIÓN</h2>
            <h3>{house.foundation}</h3>
        </div>
      </div>
    </section>
      }
</>
  )
}
