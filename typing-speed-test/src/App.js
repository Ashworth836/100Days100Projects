import React, { useState, useEffect } from 'react';

function App() {

  const [wpm, setWpm] = useState(0);
  const [text, setText] = useState("");
  const [words, setWords] = useState([]);
  const [progress, setProgress] = useState(0);
  const [started, setStarted] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [lastLetter, setLastLetter] = useState("");
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [startTime, setStartTime] = useState(undefined);
  const [completeWords, setCompleteWords] = useState([]);

  useEffect(() => {
    const texts = [
			`You never read a book on psychology, Tippy. You didn\'t need to. You knew by some divine instinct that you can make more friends in two months by becoming genuinely interested in other people than you can in two years by trying to get other people interested in you.`,
			`I know more about the private lives of celebrities than I do about any governmental policy that will actually affect me. I'm interested in things that are none of my business, and I'm bored by things that are important to know.`,
			`A spider's body consists of two main parts: an anterior portion, the prosoma (or cephalothorax), and a posterior part, the opisthosoma (or abdomen).`,
			`As customers of all races, nationalities, and cultures visit the Dekalb Farmers Market by the thousands, I doubt that many stand in awe and contemplate the meaning of its existence. But in the capital of the Sunbelt South, the quiet revolution of immigration and food continues to upset and redefine the meanings of local, regional, and global identity.`,
			`Outside of two men on a train platform there's nothing in sight. They're waiting for spring to come, smoking down the track. The world could come to an end tonight, but that's alright. She could still be there sleeping when I get back.`,
			`I'm a broke-nose fighter. I'm a loose-lipped liar. Searching for the edge of darkness. But all I get is just tired. I went looking for attention. In all the wrong places. I was needing a redemption. And all I got was just cages.`
		];

    const randomText = texts[Math.floor(Math.random() * texts.length)];
    setText(randomText);

  }, []);

  const startGame = () => {
    setText();
    setStarted(true);
    setStartTime(Date.now());
    setCompleted(false);
    setProgress(0);
  }
  
  const handleChanges = (e) => {
    const inputValue = e.target.value;
    const newLastLetter = inputValue[inputValue.length - 1];

    const currentWord = words[0];

    if(newLastLetter === " " || newLastLetter === ".") {
      if(inputValue.trim() === currentWord) {
        const newWords = [...words.slice(1)];
        const newCompletedWords = [...completeWords, currentWord];
        const newProgress = (newCompletedWords.length / (newWords + newCompletedWords)) * 100;

        setWords(newWords);
        setCompleteWords(newCompletedWords);
        setInputValue("");
        setCompleted(newWords.length === 0);
        setProgress(newProgress);
      } 
    } else {
      setInputValue(inputValue);
      setLastLetter(newLastLetter);
    }

    calculateWPM();
  }

  const calculateWPM = () => {
    const now = Date.now();
    const diff = (now -startTime) / 1000 / 60;
    const wordsTyped = Math.ceil(completeWords.reduce((acc, word) => (acc += word.length), 0) / 5);
    const newWpm  = Math.ceil(wordsTyped / diff);

    setWpm(newWpm);
    setTimeElapsed(diff);
  }

  if(!started) {
    return (
      <div className='container'>
        <h2>Welcome To The Typing Game</h2>
        <p>
          <strong>Rules:</strong>
          Type in the input field the highlighted word. <br />
          The correct words will turn <span className='green'>green</span>.
          <br />
          Incorrect letters will turn <span className='red'>red</span>.
          <br />
          <br />
          Have fun! 😃
        </p>
        <button className='start-btn' onClick={startGame}>Start Game</button>
      </div>
    );
  };

  if(!text) {
    return <p>Loading...</p>;
  };
  
  if(completed) {
    return (
      <div className='container'>
        <h2>Your WPM is: <strong>{wpm}</strong></h2>
        <button className='start-btn' onClick={startGame}>Play Again</button>
        </div>
    )
  };

  return (
    <>
      <div className='wpm'>
        <strong>WPM: </strong> {wpm}
        <br />
        <strong>Time: </strong> {Math.floor(timeElapsed * 60)}s
      </div>
      <div className='container'>
        <h4>Type The Text Below</h4>
        <progress value={progress} max="100"></progress>
        <p className="text">
          {text.split(" ").map((word, w_idx) => {
            let highlight = false;
            let currentWords = false;

            if(currentWords.length > w_idx){
              highlight = true;
            }

            if(currentWords === w_idx){
              currentWords = true;
            }

            return (
              <span className={`word ${highlight && "green"} ${currentWords && "underline"}`} key={w_idx}>
                {word.split("").map((letter, l_idx) => {
                  const isCurrentWord = w_idx === completeWords.length;
                  const isWronglyTyped = letter !== inputValue[l_idx];
                  const shouldBeHighlight = l_idx < inputValue.length;

                  return (
                    <span className={`letter  ${isCurrentWord && shouldBeHighlight ? isWronglyTyped ? "red" : "green" : ""}`} key={l_idx}>{letter}</span>
                  );
                })}
              </span>
            );
          })}
        </p>
        <input type="text" onChange={handleChanges} value={inputValue} autoFocus={started ? "true" : "false"} />
      </div>
    </>
  )

}

export default App;
