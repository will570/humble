import React from "react";
import { useState, useEffect } from "react";
import "./Info.css";

// let runAudio = true;

function Info() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false); //this helps
  
  useEffect(() => {
      setIsLoaded(true);
  }, []);
  
  useEffect(() => {
      if (isLoaded) {
        setIsPageLoaded(true)
      }
  }, [isLoaded]);

    if (isPageLoaded)
    new Audio ('https://firebasestorage.googleapis.com/v0/b/humble-2b891.appspot.com/o/My_movie.mp3?alt=media&token=405eda5b-eb72-4e03-b6d4-b06541b49e9a').play()


  return (
    <div className="main">
      <h1>Welcome to Humble!</h1>
      <p>
        Disappointed by the people in mainstream dating apps with names that are
        reminicient of bees, we realized that there is not enough queen bee
        energy. We bring you HUMBLE, the posh alternative to online dating apps
        that remind you that your level is always above all these guys and gals.
      </p>
    </div>
  );
}

export default Info;
