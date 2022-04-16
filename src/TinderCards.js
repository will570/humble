import React, { useEffect, useState } from "react";
import TinderCard from 'react-tinder-card';
import database from "./firebase";
import './TinderCards.css';

function TinderCards(){
    const [people, setPeople] = useState([]);

    useEffect(() => {

        database.collection('people').onSnapshot((snapshot) =>
            setPeople(snapshot.docs.map((doc) => doc.data()))
        );
        // whatever inside [] changes activates this function (empty: only exec 1x)
    }, []);

    return (
        <div>
            <div className="tinderCards__cardContainer">

            {people.map((person) => (
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={['up','down']}
                >
                    <div 
                    style={{backgroundImage: `url(${person.url})`}}
                    className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>

        </div>
    );
}

export default TinderCards;