import React from "react";
import "./Personajes.css";
import axios from "axios";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";

import { useEffect, useState } from "react";

export default function Personajes() {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const res = await axios.get(`http://localhost:3004/characters`);
    setCharacters(res.data);
    // console.log(res.data);
  };
  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <>
      <SimpleBar style={{ height: "300px" }}>
        <div className="container">
          <div className="cards">
            {characters.map((character, index) => (
              <figure className="card" key={index}>
                {/* <div className='card-img'> */}
                <img src={"/public" + character.image} alt={character.name} />
                {/* </div> */}
                <figcaption>
                  <Link to={`/personajes/${character.name}`}>
                    {character.name}
                  </Link>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </SimpleBar>
    </>
  );
}
