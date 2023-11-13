import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/database";

const App = () => {
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [sign, setSign] = useState();
    const [user, setUser] = useState();
    const [score, setScore] = useState(0);
    const [answer, setAnswer] = useState();
    const [users, setUsers] = useState([]);
    const [database, setDatabase] = useState();
    const [isWrong, setIsWrong] =useState(false);
    const [correctAnswer, setCorrectAnswer] = useState();

    const getRandomNumber = (size = 1) => {
        const minNum = 1;
        const maxNum = parseInt("9".repeat(size), 10);
        return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
    };

    const getRandomSign = () => {
        const signs = ["+", "-", "/", "*"];
        const idx = Math.floor(Math.random() * signs.length);
        return signs[idx];
    };

    const createCalculation = (size = 1) => {
        let num1, num2, sign, calculatedAnswer;

        do {
            num1 = getRandomNumber();
            num2 = getRandomNumber();
            sign = getRandomSign();
            calculatedAnswer = eval(`${num1} ${sign} ${num2}`);
        } while (!Number.isInteger(calculatedAnswer) || calculatedAnswer === Infinity);
    }

    const handleChange = e => {
        setAnswer(+e.target.value);
    };
    
    const handleSubmit = e => {
        e.preventDefault();

        const scoreIncrement = Math.floor(Math.abs(score) / 20) + 1;
        let newScore;

        if(correctAnswer === answer){
            newScore = score + scoreIncrement;
            e.target.reset();
            createCalculation(newScore);
            setScore(newScore);
            setIsWrong(false);
        }else{
            newScore = Math.max(score - 1, 0);
            setIsWrong(true);
            setScore(newScore);
        }

        updateScoreInDB(newScore);
    };

    const updateScoreInDB = newScore => {
        if(database && user && user.id){
            database.child(user.id).update({
                score: newScore
            });
        }
    };

    const handleNameChange = e => {
        setUser(preUser => ({
            ...preUser,
            name: e.target.value
        }));
    };

    const handleNameSubmit = e => {
        e.preventDefault();

        if (!user?.name) return;

        const newUser = {
            score: 0,
            name: user.name,
            lastedUpdate: Date.now(),
            id: Math.random()
                .toString()
                .substring(2)
        };

        database.child(newUser.id).set(newUser);

        setUser(newUser);
    };

    useEffect(() => {
        const db = firebase.database().ref("/users");
        setDatabase(db);

        const usersRef = db.on("value", snapshot => {
            const usersData = Object.values(snapshot.val() || {});
            setUsers(usersData);
        });

        return () => {
            db.off("value", usersRef);
        };
    }, []);

    useEffect(() => {
        createCalculation();
    }, []);
    
    
    return (
		<>
			<h1>Math Wizz</h1>
			{user && <small className='name'>Hello, {user.name}</small>}
			{user ? (
				<div className='row'>
					<div className='col-1'>
						<form className='form' onSubmit={handleSubmit}>
							<h3>Calculate:</h3>
							<div className='calculation'>
								<p className='op'>{num1}</p>
								<p className='op'>{sign}</p>
								<p className='op'>{num2}</p>
								<p className='op'>=</p>
								<input
									type='number'
									className={`answer ${isWrong && 'wrong'}`}
									onChange={handleChange}
								/>
							</div>
							<div className='score'>Score: {score}</div>
						</form>
					</div>
					<div className='col-2'>
						<div className='leaderboard'>
							<h3>Leaderboard</h3>
							<ul>
								{users
									.sort((a, b) => b.score - a.score)
									.slice(0, 10)
									.map((user, idx) => (
										<li key={idx}>
											<span>{user.name}</span> {user.score}
										</li>
									))}
							</ul>
						</div>
					</div>
				</div>
			) : (
				<div className='text-center'>
					<p>
						Welcome to the Math Wizz game. <br />
						Let's test your math skills! 😃 <br />
						<br />
						You'll be given random math questions that you'll have to answer.
						<br />
						Level changes when you reach the score of: 25, 50, 75...
					</p>
					<p>Please enter your username to start:</p>
					<input type='text' onChange={handleNameChange} />
					<button className='btn' onClick={handleNameSubmit}>
						Submit
					</button>
				</div>
			)}
		</>
	);
    
}