import React from "react";

const petList = [
    {
        id: 1,
        title: "Charlie",
        city: "Fremont, California",
        dateMissing: "2/29/23",
        imgUrl:"http://placekitten.com/300/200",
    },
    {
        id: 2,
        title: "Willow",
        city: "San Jose, California",
        dateMissing: "1/04/23",
        imgUrl:"http://placekitten.com/400/200",
    },
    {
        id:3,
        title: "Luna",
        city: "Berkeley, California",
        dateMissing: "12/19/22",
        imgUrl:"http://placekitten.com/400/300",
    },
    {
        id:4,
        title: "Kilo",
        city: "San Francisco, California",
        dateMissing: "1/4/23",
        imgUrl:"http://placekitten.com/400/200",
    }
];

function Dashboard() {
    return (
       <div>
        <button type="button"> Show Filters </button>
        <button type="button"> Add Pet </button>
        <ul>
        {petList.map(function(item){
            return (
            <li key={item.id}> <br/> {item.imgUrl} <br/> {item.title} <br/> {item.city} <br/> Missing since: {item.dateMissing}  </li>
          
            )})}
        </ul>
        
       </div>
    )      
    
}

export default Dashboard;