import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";

const petList = [
    {
        id: 1,
        title: "Charlie",
        city: "Fremont, California",
        status: "Lost",
        dateMissing: "2/29/23",
        imgUrl:"http://placekitten.com/300/200",
    },
    {
        id: 2,
        title: "Willow",
        city: "San Jose, California",
        status: "Found",
        dateMissing: "1/04/23",
        imgUrl:"http://placekitten.com/400/200",
    },
    {
        id:3,
        title: "Luna",
        city: "Berkeley, California",
        status: "Found",
        dateMissing: "12/19/22",
        imgUrl:"http://placekitten.com/400/300",
    },
    {
        id:4,
        title: "Kilo",
        city: "San Francisco, California",
        status: "Lost",
        dateMissing: "1/4/23",
        imgUrl:"http://placekitten.com/400/200",
    }
];

function Dashboard() {
    return (
<>
        <button type="button" className="edit-filter-button"> Show Filters </button>
        <button type="button" className="edit-addPet-button"> Add Pet </button>
        <ul>
        {petList.map(function(item){
            return (
            <li key={item.id} style={{listStyleType: "none"}}> <br/> 
    
        <Card
            className="edit-dashboard-card-unit"
            style={{
                width: '18rem'
                }}
                >
                <img
                className="edit-dashboard-image"
                    alt="Sample"
                    src={item.imgUrl}
                />
                <CardBody className="edit-cardBody-info-box">
                    <div style={{display:"flex", flexDirection:"row"}}>
                        <CardTitle 
                        className="edit-petName"
                        tag="h5">
                        {item.title}
                        </CardTitle>
                        <br/>
                    <Button className="edit-status-for-pet">
                    {item.status}
                    </Button>
                    </div>
                        <CardSubtitle
                        className="edit-pet-location"
                        // className="mb-2 text-muted"
                        tag="h6"
                        >
                        {item.city}
                        </CardSubtitle>
                    <CardText
                    className="edit-missing-date">
                    Missing since: {item.dateMissing}
                    </CardText>
                </CardBody>
        </Card>
                </li>
                )})}
                </ul>
       </>

    )      
    
}

export default Dashboard;