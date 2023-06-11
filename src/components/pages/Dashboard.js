import React from "react";

const petList = [
    {
        id: 1,
        title: "Charlie"
    },
    {
        id: 2,
        title: "Willow"
    },
    {
        id:3,
        title: "Luna"
    },
    {
        id:4,
        title: "Kilo"
    }
];

function Dashboard() {
    return (
       <div>
        <button type="button"> Show Filters </button>
        <button type="button"> Add Pet </button>
        <h1>Here is a List</h1>
        <ul>
        {petList.map(function(item){
            return (
            <li key={item.id}> {item.title} </li>
            )})}
        </ul>
       </div>
    )      
    
}

export default Dashboard;