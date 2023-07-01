import { useState } from "react";
import AddFoundPet from '../components/pages/AddPet'


const LostIcon = () => {

    const [addPet, setAddPet] = useState(false)

  const handleAddPet = ()=>{
    setAddPet(true);
  }
  

  return (
    <div>
      {!addPet && (
    <button className="lost-button" onClick={handleAddPet}>
      <svg
        width="150"
        height="150"
        viewBox="0 0 276 238"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M150.5 150H125.5V87.5H150.5M150.5 200H125.5V175H150.5M0.5 237.5H275.5L138 0L0.5 237.5Z"
          fill="#FD678D"
        />
      </svg>
      Lost Pet
    </button>)}
    {addPet && (<AddFoundPet/>)}
   
    </div>
  );
};

export default LostIcon;
