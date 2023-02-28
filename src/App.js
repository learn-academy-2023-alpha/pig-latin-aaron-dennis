import React, { useState } from "react";
import "./App.css";
import butcherPigImage from "./assets/butcherPig.jpeg";

const App = () => {
  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState(
    "apple through queen squeal fry fluent"
  );
  const [inputTranslated, setInputTranslated] = useState("");

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {
    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ");
    console.log("arrayOfUserInput:", arrayOfUserInput);

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map((eachWord) => {
      console.log("eachWord:", eachWord);

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter((vowel) => {
        return (
          vowel === "a" ||
          vowel === "e" ||
          vowel === "i" ||
          vowel === "o" ||
          vowel === "u"
        );
      });
      console.log("vowelsArray:", vowelsArray);

      // ACTION ITEM: your Pig Latin logic goes here!

      // eachWord is an array of strings, we need to access each string by it's index and perform the pig latin logic
      // need a conditional to determine what type of word it is (start with vowel, start with consonants, etc)
      // then in each conditional we need to perform the correct logic
      // turn string into an array, split the string at the right spot, then push the chunk to the end

      // Function to determine the type of word it is

      // starts with vowel take the string, concat "way" to the end
      if (vowelsArray.includes(eachWord[0])) {
        return eachWord.concat("way");
        // if the first vowel is a u, and it does have a q in front of it
        // pull the index of the "u" in each word, and check if the index right before it is a 'q'
      } else if (
        vowelsArray[0] === "u" &&
        eachWord[eachWord.indexOf("u") - 1] === "q"
      ) {
        // take the word, split it  into an array. then we want to slice from the beginning to the first instance of 'u' this will return an array, which we can turn back into a string. and concat it onto the end of the SUBSTRING +ay
        // SQU EAL
        // (substring of eachword starting at right past u) concat slice.join. of the beginning of the word, up to U
        return eachWord.substring(eachWord.indexOf("u") + 1).concat(
          eachWord
            .split("")
            .slice(0, eachWord.indexOf("u") + 1)
            .join("")
            .concat("ay")
        );
        // squeal s  ay
        // 0S 1Q 2U 3E 4A 5L
      } else if ((eachWord.includes("y"), vowelsArray.includes(eachWord[0]))) {
        return eachWord.replace("y", "").concat("yay");
      } else if (eachWord.includes("y") !== vowelsArray)
        //  return eachWord.push("y").concat("ay");

        // else if (eachword.includes("y"))
        // return eachWord
        // first vowel is qu
        // go to the next vowel
        // only vowel is y
        // treat y as a vowel
        // starts with consonant
        // to take a word
        // get the first half of the word before the vowel
        // get the second half of the word INCLUDING the vowel
        // put those things together
        // add "way" to the end

        // VOWEL
        // take the string, concat "ay" to the end
        // concat "way"

        // QU
        // if the first vowel is a u, check it there is a q in front of it, if so, than treat as a consonant, if not, treat as normal

        // Y
        // Y is only a vowel if it's the only vowel in the word.
        // first check if there are any vowels in the word. If there are none, treat y as a vowel. Do vowel things with it

        // Consonants
        // take the word, split it into an array, slice() the array at the first vowel. concat the first half of the word to the end, then add ay

        // ACTION ITEM: this return will be the output of your Pig Latin'd code

        // ACTION ITEM: this return will be the output of your Pig Latin'd code
        return eachWord;
    });

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ");
    console.log("translatedWords:", translatedWords);

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords);
  };

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("apple through queen squeal fry fluent");
    setInputTranslated("");
  };

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault();
    myPigLatinCodeHere();
  };

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2022 | Coded by: Your Names Here!</footer>
    </div>
  );
};

export default App;
