import React from "react";
import "./css/EditProfile.css";

function EditProfile() {
  return (
    <>
      <img src="..." className="rounded float-left" alt="..."></img>
      <div className="editProfilePage">
        <h3>Pet Information</h3>
        <form>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="petName" className="form-label">
                Pet Name
              </label>
              <input type="text" className="form-control" id="petName" />
            </div>
            <div className="col-md-6">
              <label htmlFor="status" className="form-label">
                Lost or found?
              </label>
              <input type="text" className="form-control" id="status" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="animalType" className="form-label">
                Animal type
              </label>
              <input type="" className="form-control" id="animalType" />
            </div>
            <div className="col-md-6">
              <label htmlFor="breed" className="form-label">
                Breed
              </label>
              <input type="text" className="form-control" id="breed" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="color" className="form-label">
                Color
              </label>
              <input type="text" className="form-control" id="color" />
            </div>
            <div className="col-md-6">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <input type="text" className="form-control" id="gender" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="location" className="form-label">
                Location (Zip Code)
              </label>
              <input type="number" className="form-control" id="location" />
            </div>
            <div className="col-md-6">
              <label htmlFor="dateFound" className="form-label">
                Date found
              </label>
              <input type="date" className="form-control" id="dateFound" />
            </div>
          </div>
          <h3>Contact Information</h3>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="userEmail"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="userPhoneNumber" className="form-label">
                Phone Number
              </label>
              <input type="tel" className="form-control" id="userPhoneNumber" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </>
  );
}

export default EditProfile;
