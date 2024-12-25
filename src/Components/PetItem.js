import { useState } from "react";
import Alert from '@mui/material/Alert';


function PetItem({ pet, handleAdobtButtonClick }) {
  const [petImage, setPetImage] = useState(pet.image);

  const handleClick = () => {
    if (petImage === pet.image) {
      setPetImage(pet.image2);
    } else {
      setPetImage(pet.image);
    }
  };


  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={petImage} />
        <div className="content">
          <h3>{pet.name}</h3>
         
          <button onClick={handleClick} type="button" className="btn btn-info">
            Pet
          </button>
          <button 
           onClick={()=>{handleAdobtButtonClick(pet.id) }}
          type="button"
            class="btn btn-info  m-2"
          >
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
