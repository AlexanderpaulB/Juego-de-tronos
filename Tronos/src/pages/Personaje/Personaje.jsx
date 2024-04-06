import React from "react";
import axios from "axios";
import "./Personaje.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Personaje() {
  const [character, setCharacter] = useState([]);
  const { name } = useParams(null);

  useEffect(() => {
    const getCharacters = async () => {
      const res = await axios.get("http://localhost:3004/characters/" + name);
      console.log(res.data);
    };
    getCharacters();
  }, [name]);

  return <></>;
}
