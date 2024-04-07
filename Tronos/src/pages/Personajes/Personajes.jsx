import React from "react";
import "./Personajes.css";
import axios from "axios";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

import { useEffect, useState } from "react";
import Busqueda from "../../components/Busqueda/Busqueda";

export default function Personajes() {
  const [characters, setCharacters] = useState([]);
  const [filterCharacter, setFilterCharacter] = useState([]);

  const getCharacters = async () => {
    const res = await axios.get(`http://localhost:3004/characters`);
    setCharacters(res.data);
    // console.log(res.data);
  };

  const filterCharacters = async (searchName) => {
    const serchCharacter = characters.filter((character) =>
      character.name.toLowerCase().includes(searchName.toLowerCase())
    );
    setFilterCharacter(serchCharacter);
  };
  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <>
      <Busqueda search={filterCharacters} />

      <div className="container">
        <SimpleBar style={{ height: "600px" }}>
          <div className="cards">
            {characters.map((character, index) => (
              <Link key={index} to={`/personajes/${character.id}`}>
                <figure className="card">
                  <img src={"/public" + character.image} alt={character.name} />
                  <figcaption>
                    <Link to={`/personajes/${character.id}`}>
                      {character.name}
                    </Link>
                  </figcaption>
                </figure>
              </Link>
            ))}
          </div>
        </SimpleBar>
      </div>
    </>
  );
}
