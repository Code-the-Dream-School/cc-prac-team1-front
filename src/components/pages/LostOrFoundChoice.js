import { Container } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./css/LostOrFoundChoice.css";
import FoundIcon from  "../../creative-assets/found-icon.js"
import LostIcon from "../../creative-assets/lost-icon"; 

const LostOrFound = () => {
  const goToAddPet = useNavigate();

  return (
    <Container className="center-container" >
      <p>Report a Lost of Found Pet</p>
      <div className="center-button">
      <LostIcon navigation ={goToAddPet}/>
       <FoundIcon navigation ={goToAddPet} />
      </div>
    </Container>
  );
};

export default LostOrFound;
