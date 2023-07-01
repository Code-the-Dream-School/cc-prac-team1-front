import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/ProfilePage.css";
import { Button, Container, Table } from "reactstrap";
import axios from "axios";
import ReactPaginate from "react-paginate";

function ProfilePage() {
  const [user, setUser] = useState(null);
  const [petDetails, setPetDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 5; // Number of items to display per page

  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const handleDelete = async (_id) => {
    try {
      await axios.delete(`http://localhost:5005/api/v1/pets/${_id}`, config);
      setPetDetails((prevPets) => prevPets.filter((pet) => pet._id !== _id));
    } catch (error) {
      console.log("Error deleting pet", error);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5005/api/v1/pets", config)
      .then((response) => {
        setPetDetails(response.data);
        setUser(response.data[0].contact);
      })
      .catch((error) => {
        console.log(
          "Error fetching user and pet information",
          error.response.data
        );
      });
  }, []);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * perPage;
  const pageCount = Math.ceil(petDetails.length / perPage);
  const paginatedPetDetails = petDetails.slice(offset, offset + perPage);

  return (
    <>
      <Container className="profile-header">
        <div>
          <h1 className="profile-h1">Profile</h1>
        </div>
      </Container>
      <div className="profile-page-container">
        <Container className="profile-user">
          <div className="user-info-container">
            <div className="user-icon">
              <i className="bi bi-person-circle icon-large"></i>
            </div>
            <div
              className="user-details"
              key={user?.id}
            >
              <h3>Name:</h3>
              <input
                type="text"
                value={user?.name}
              />
              <br />
              <br />
              <h3>Email:</h3>
              <input
                type="text"
                value={user?.email}
              />
              <br />
              <br />
              <h3>Phone Number:</h3>
              <input
                type="text"
                value={user?.phone}
              />
              <br></br>
              <br />
              <Button className="profile-update">Update</Button>
            </div>
          </div>
        </Container>
        <Container className="profile-table">
          <h2 className="profile-h2">Pet(s)</h2>
          <Table responsive>
            <thead>
              <tr>
                <th className="table-header">Image</th>
                <th className="table-header">Name</th>
                <th className="table-header">Details</th>
                <th className="table-header">Description</th>
                <th className="table-header">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedPetDetails.map((pet) => (
                <tr
                  className="pet-details-row"
                  key={pet._id}
                >
                  <td>
                    <img
                      src={pet.image}
                      className="rounded float-left"
                      alt="..."
                      width={100}
                    />
                  </td>
                  <td className="pet-name">{pet.petName}</td>
                  <td className="pet-details-list">
                    <ul>
                      <li>
                        <b>Type:</b> {pet.animalType}
                      </li>
                      <li>
                        <b>{pet.petSituation}</b>: {pet.petDate || "N/A"}
                      </li>
                      <li>
                        <b>Breed:</b> {pet.petBreed || "N/A"}
                      </li>
                      <li>
                        <b>Color:</b> {pet.petColor || "N/A"}
                      </li>
                      <li>
                        <b>Gender:</b> {pet.petGender || "N/A"}
                      </li>
                      <li>
                        <b>ZIP code:</b> {pet.petLocation || "N/A"}
                      </li>
                    </ul>
                  </td>
                  <td>{pet.petDescription || "N/A"}</td>
                  <td>
                    <Button
                      type="submit"
                      onClick={() => handleDelete(pet._id)}
                      className="pet-remove"
                    >
                      <i className="bi bi-trash-fill"></i>
                    </Button>
                    <br />
                    <Link to={`/profile-edit/${pet._id}`}>
                      <Button className="pet-edit">
                        <i className="bi bi-pencil-square"></i>
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination-container"}
            previousLinkClassName={"pagination-link"}
            nextLinkClassName={"pagination-link"}
            disabledClassName={"pagination-link-disabled"}
            activeClassName={"pagination-link-active"}
          />
        </Container>
      </div>
    </>
  );
}
export default ProfilePage;
