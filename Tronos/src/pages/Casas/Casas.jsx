import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Casas.scss'

export default function Casas() {

  const [houses, setHouses] = useState([]);

  const getHouses = async () => {
    const response = await axios('http://localhost:3000/houses');
    setHouses(response.data)
    // console.log(houses)
  };
  useEffect(() => {
    getHouses();
  },[])

  return (
    <>
      <SimpleBar className="bar">
        {/* <div > */}
          <div className="house-bigbox">
            {houses.map((house, i) =>
              <section className="house-box" key={i}>
                <Link to={`/casas/${house.id}`}>
                {/* {console.log(house)} */}
                  <div className="house-img">
                  <img src={"public" + house.image} alt={house.image} />
                    
                  </div>
                {/* {console.log("public" + house.image)} */}
                <h3>{house.name}</h3>
                </Link> 
              </section>
            )}
          </div>
        {/* </div> */}
      </SimpleBar>
    
    </>
  )
}
