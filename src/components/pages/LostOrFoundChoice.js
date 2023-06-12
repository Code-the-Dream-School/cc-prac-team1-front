import { Container, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./css/LostOrFoundChoice.css";

const LostOrFound = () => {
  const goToAddPet = useNavigate();

  return (
    <Container className="center-container">
      <p>Report a Lost of Found Pet</p>
      <div className="center-button">
        <Button onClick={() => goToAddPet("/addlostpet")}>Lost Pet</Button>
        <Button onClick={() => goToAddPet("/addfoundpet")}>Found Pet</Button>
      </div>
    </Container>
  );
};

export default LostOrFound;
