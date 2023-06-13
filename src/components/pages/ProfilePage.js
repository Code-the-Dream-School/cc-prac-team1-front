import React from "react";
import "./css/ProfilePage.css";

function ProfilePage() {
  const user = {
    name: "Bob",
    image: "image",
    email: "bob123@gmail.com",
    phoneNumber: "(123) 456-6789",
  };

  const petDetails = [
    {
      name: "Charlie",
      image: "image",
      type: "Dog",
      status: "Lost",
      breed: "Beagal",
      color: "Brown",
      gender: "Male",
    },
    {
      name: "Willow",
      image: "image",
      type: "Cat",
      status: "Found",
      breed: "N/A",
      color: "Orange",
      gender: "Female",
    },
  ];

  return (
    <>
      <h1>Profile</h1>
      <img src={user.image} alt={user.name} />
      <h2>{user.name}</h2>
      <p>
        {user.email} <br /> {user.phoneNumber}
      </p>
      <button type="submit">Update</button>
      <br />

      <div className="container">
        <div className="row row-cols-auto">
          <div className="col-2">Image</div>
          <div className="col-2">Name</div>
          <div className="col-2">Details</div>
          <div className="col-2">Actions</div>
        </div>
        <div>
          {petDetails.map((pet, item) => (
            <div className="row row-cols-auto" key={item}>
              <div className="col-2">
                <img
                  src={pet.image}
                  className="rounded float-left"
                  alt="..."
                ></img>
              </div>
              <div className="col-2"> {pet.name} </div>
              <div className="col-2">
                <ul>
                  <li>Type: {pet.type}</li>
                  <li>Status: {pet.status}</li>
                  <li>Breed: {pet.breed}</li>
                  <li>Color: {pet.color}</li>
                  <li>Gender: {pet.gender}</li>
                </ul>
              </div>
              <div className="col-2">
                <button>Remove</button>
                <br />
                <button>Edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
