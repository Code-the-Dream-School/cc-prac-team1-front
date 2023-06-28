import { Container } from "reactstrap";
import { useState } from "react";
import "./css/LostOrFoundChoice.css";
import FoundIcon from  "../../creative-assets/found-icon.js"
import LostIcon from "../../creative-assets/lost-icon"; 
import AddFoundPet from "./AddFoundPet";

const LostOrFound = () => {

  const [showComponent, setShowComponent] = useState(true)
   const handleIconClick = () =>{
    setShowComponent(false)
   }

  return (

    <div className="lostorfound-container">
      {showComponent && (
    <Container>
      <p>Report a Lost of Found Pet</p>
      <div className="both-buttons">
      <div className="lost-button">
        
      <button onClick={handleIconClick} ><LostIcon /></button>
       
      </div>
      <div className="line"></div>
      <div className="found-button">
        <button onClick={handleIconClick}>
       <FoundIcon /></button>
      </div>
      </div>
    </Container>)}
   {!showComponent && <AddFoundPet/>}
    </div>
  );
};




export default LostOrFound;
