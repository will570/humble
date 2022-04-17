import React, { useEffect, useState } from "react";
import TinderCard from 'react-tinder-card';
import database from "./firebase";
import PopUp from "./PopUp";
import 'animate.css';
import './TinderCards.css';

const swipeL ={
    0: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/yooooooooooo.mp3?alt=media&token=e310cb9b-1eb3-4000-bb5c-4029cc72823b',
    1: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/Cash%20Register%20(Kaching)%20-%20Sound%20Effect%20(HD).mp3?alt=media&token=88f6c3f4-8cfb-4811-8ace-011e51d86b09',
    2: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/Anime_wow_sound_effect.mp3?alt=media&token=3ce086b3-c45c-47b5-a169-833a6ed67119',
    3: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/1letsgo.mp3?alt=media&token=f0302990-4348-4d75-af67-77b65e75443c',
    4: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/1Lyoudefoking.mp3?alt=media&token=313f4c01-6baa-4a03-a5d4-c9b74372dd54',
    5: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/1Lwelldone.mp3?alt=media&token=95c4cd0b-d867-433b-be8e-9aba4f3a9aaf',
    6: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/1Lwayabove.mp3?alt=media&token=9c5eab18-c63a-44f0-a333-148cc6792861',
    7: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/1Lurewelcom.mp3?alt=media&token=29359055-9021-4396-bbca-bbb7006ca27e',
    8: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/1Lsteponme.mp3?alt=media&token=f41b3077-69eb-4a88-b31d-c858cd95d7f9',
    9: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/1Lslayqueenenglish.mp3?alt=media&token=bf07cab3-9640-470f-abff-36154770dde7',
    10: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/1Lslayqueen.mp3?alt=media&token=1fcb17f3-b957-4bf0-8651-4a78444f5a4c',
    11: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/1Lnotme.mp3?alt=media&token=d9518895-646e-4ed8-8994-be8d5e89cc10',
    12: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/1Lgosis.mp3?alt=media&token=f33c6bb7-2fac-4d31-a7a1-8bc969e09387',
    13: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/1Lgoodjob.mp3?alt=media&token=66533300-7ea2-4ad3-b789-f608e9e94661',
    14: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/1Lgirboss.mp3?alt=media&token=5179bd81-4e75-4cea-8e0c-5bcb56fe7fc3',
    15: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/1Ldailydose.mp3?alt=media&token=a59525ab-7dca-4654-a64a-23ab058ebdfc',
    16: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/1Lconfidence.mp3?alt=media&token=6f4a5981-5a0f-49a6-b491-4b042fed903c',
    17: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/1LThat_right_french.mp3?alt=media&token=ceda98bd-c98d-4f19-bcfe-75c0e9d7778e',
    18: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/Lyessir%20Sound%20Effect.mp3?alt=media&token=892a274a-9b4c-4d88-9539-d08fffe4b3f0',
    19: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/L-sheesh.mp3?alt=media&token=d1210361-83d9-4c0a-9c7d-8250f99791e6'
}

const swipeR = {
    0: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/you_failure.mp3?alt=media&token=19ddbed5-0033-455b-b207-aa2efc3f0e05',
    1: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/What%20the%20hell%20is%20even%20that.mp3?alt=media&token=43cfe5bb-8477-4748-946c-a0b83a0341ed',
    2: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/They_Ask_You_If_youre_Fine_-_Your_(getmp3.pro).mp3?alt=media&token=56eb546d-dbc4-410e-9b5d-c827a87a72fb',
    3: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/Omaewa%20mou%20shindeiru%20(Sound%20effect%20).mp3?alt=media&token=374a24ce-2303-4d92-b549-22e3a821ff6f',
    4: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/Emotional%20damage%20original%20meme%20(emotional%20damage%20meme).mp3?alt=media&token=d3a3221b-c40b-4f51-ba68-78ae3af518ac',
    5: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/Crickets%20(Awkward%20Silence)%20-%20Gaming%20Sound%20Effect%20(HD).mp3?alt=media&token=32a81cb7-a4a1-402c-b829-023badbc9546',
    6: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/Bruh%20-%20Sound%20Effect%20(HD).mp3?alt=media&token=7a1428fc-6de3-4df1-8926-a01747f55a5d',
    7: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/1Ryourenotfine.mp3?alt=media&token=605ffcc4-d864-47a1-abfd-6ed48a6da47c',
    8: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/1Ryooooooooo.mp3?alt=media&token=9b149b8b-4cfb-4eb1-aa4b-854fbc21c81a',
    9: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/1Rthatsgross.mp3?alt=media&token=e19bf23c-ddd7-45be-a362-b83dd40d6475',
    10: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/1Remotionaldamage.mp3?alt=media&token=57410ea9-84a7-48b5-9aa6-fd5713434ac6',
    11: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/1Lomaiwashindeiru.mp3?alt=media&token=5b414486-a430-42ea-877c-9de4b39e4ef7',
    12: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/Failure_-_Steven_He_(getmp3.pro).mp3?alt=media&token=9ea331b2-a466-4376-9482-a89c0c6838e0',
    13: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/R-still%20a%20piece%20of%20garbage.mp3?alt=media&token=9a51751f-f2fa-4a85-8dcb-d22cba24f2c2'
}

var textNum = -1;
const text = {
    0: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/emotional%20damage.png?alt=media&token=55b9d9ad-dcc1-4495-94e0-ade5baf72912',
    1: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/gaslight%20gatekeep%20girlboss.png?alt=media&token=60fd0615-9040-4c0b-b38f-5fdf0a49368a',
    2: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/good%20job%20kings%20and%20queens.png?alt=media&token=5004203c-d9f3-47db-bc83-9ab60725ff4b',
    3: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/sheesh.png?alt=media&token=50f80107-edd5-40b8-99d2-0306173e9509',
    4: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/slay%20queen.png?alt=media&token=fa709fd6-a1b5-445b-8711-cfe9434fba23',
    5: 'https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/you%20failure.png?alt=media&token=3fd3d654-6c20-41ac-b67b-49de3b46fd66',
    6: "https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/you're%20still%20a%20piece%20of%20garbage.png?alt=media&token=87ac95db-6c03-4cc3-ae03-67b6b47043b3" 
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function TinderCards(){
    const [swipeCountL, setCountL] = useState(0);
    const [swipeCountR, setCountR] = useState(0);
    const [people, setPeople] = useState([]);
    const [messagePopUp, setmessagePopUp] = useState(false);
    const [swipeDirection, setdirection] = useState('');
    let timer = null;

    const onSwipe = (direction) => {
        if (direction == 'left' || direction == 'right' )
        {
            clearInterval(timer)
            setmessagePopUp(true)
            setdirection(direction)
            timer = setInterval(()=> {setmessagePopUp(false)}, 3000)
        }
        if (direction == 'right'){
            var numR = getRandomInt(14);
            switch (numR){
                case 4:
                case 10:
                    textNum = 0;
                    break;
                case 0:
                case 12:
                    textNum = 5;
                    break;
                case 13:
                    textNum = 6;
                    break;
            }
            var audioR = new Audio(swipeR[numR]);
            audioR.play();
            setCountR((prevR) => prevR + 1);
        }
        else if (direction == 'left'){
            var numL = getRandomInt(20);
            switch (numL){
                case 14:
                    textNum = 1;
                    break;
                case 19:
                    textNum = 3;
                    break;
                case 13:
                    textNum = 2;
                    break;
                case 9:
                case 10:
                    textNum = 4;
                    break;
            }
            var audioL = new Audio(swipeL[numL]);
            audioL.play();
            setCountL((prevL) => prevL + 1);
        }
    }

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
                preventSwipe={['up','down','right']}
                onSwipe={onSwipe}
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

            <div className = 'popUpsContainer'>
            {swipeDirection == 'left' &&
                <PopUp trigger = {messagePopUp} setTrigger  = {setmessagePopUp} id = "popUp">

                <p>swipe left, good</p>
                </PopUp>
            }
            {swipeDirection == 'right' &&
                <PopUp trigger = {messagePopUp} setTrigger  = {setmessagePopUp} id = "popUp">
                    {textNum != -1 &&
                    <img src={text[textNum]} />
                    }
                <p>how dare u swipe right??</p>
                </PopUp>
            }
            </div>

            <div className="main_column" key="countText">
                <h3>{swipeCountL} swipes left</h3>
                <h3>{swipeCountR} swipes right</h3>
            </div>

        </div>
    );
}

export default TinderCards;