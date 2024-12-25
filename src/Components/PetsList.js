import { useState } from "react";
import petsData from "../petsData";
import PetItem from "./PetItem";


function PetsList() {
  //[here is reactive data] = useState is a function that hold anything that i gave to it 
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");

  // 
  const [petsDataAll, setPetsDataAll] = useState(petsData);

  //this will filter the id by compare the id that the user give with the id that written in code
  const removePetFromListById = (petId) => {
    const filteredList = petsDataAll.filter((pet) => pet.id !== petId);
    setPetsDataAll(filteredList);
  };


  const filterData = petsDataAll.filter((product) => product.name.includes(query));
  const filterPetSelector = filterData.filter((product) =>product.type.includes(type) );
  const petList=filterPetSelector.map((pet)=>(<PetItem handleAdobtButtonClick={removePetFromListById} pet={pet} key={pet.id}/> ));


  
  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
        
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <div className="input-group rounded">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  onChange={(event) => setQuery(event.target.value)}
                />
              </div>
              <br />
              Type:
              <select
                className="form-select"
                onChange={(event) => setType(event.target.value)}
              >
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{petList}</div>
      </div>
    </section>
  );
}

export default PetsList;
