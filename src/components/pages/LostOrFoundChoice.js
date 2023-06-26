import { Container } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./css/LostOrFoundChoice.css";
import FoundIcon from  "../../creative-assets/found-icon.js"
import LostIcon from "../../creative-assets/lost-icon"; 

const LostOrFound = () => {
  const goToAddPet = useNavigate();

  return (
    <div className="container">
    <Container>
      <p>Report a Lost of Found Pet</p>
      <div className="both-buttons">
      <div className="lost-button">
      <LostIcon navigation ={goToAddPet}/>
      </div>
      <div className="line"></div>
      <div className="found-button">
       <FoundIcon  navigation ={goToAddPet} />
      </div>
      </div>
    </Container>
    </div>
  );
};

export default LostOrFound;
