import { useState, useEffect } from "react";
import { useRef } from "react";
import styles from "./index.css";
import "react-slideshow-image/dist/styles.css";
export default function App(props) {
  let images = [
    "../simplySpell1.PNG",
    "../simplySpell2.PNG",
    "../simplySpell3.PNG",
    "../simplySpell4.PNG",
    "../simplySpell5.PNG",
    "../simplySpell6.PNG",
    "../simplySpell7.PNG",
    "../simplySpell8.PNG",
    "../simplySpell9.PNG",
  ];

  return (
    <div className="container">
      <h1>Simply Spell</h1>

      <div>
        <a href="https://github.com/David-Waite/SpellingApp">View on GitHub</a>
        <p>
          This is an app to help adults with spelling English. Simply spell is
          an app I created as I wanted to play around with mobile development.
          For the design of the app, I started by finding words lists that would
          be the most useful for adults to learn the words lists I found where
          created by the new general service list project and included the most
          used words in both everyday speak and academic speak. I wanted to
          design the app in a way that everything the user would mostly be doing
          would be assessable by the main page, including the main statistics
          the app has to offer. The colours were chosen as they are meant to
          inspire learning. For the development of the app, I used expo with
          react native to create the pages quicky and as I don’t have a mac at
          the time of writing this, I couldn’t use swift. For the “backend” I
          chose to use redux with redux persist as I wanted the app to be
          offline only (though after implementing this I realised the amount of
          data used in the app was too much for redux persist so will be trying
          more traditional backends next time).
        </p>
      </div>
    </div>
  );
}
