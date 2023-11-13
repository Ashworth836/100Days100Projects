import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [cars, setCars] = useState([]);
    const [idx1, setIdx1] = useState(undefined);
    const [idx2, setIdx2] = useState(undefined);

    useEffect(() => {
        const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
        const endpoint = 'https://api.unsplash.com/photos/random';

        const config = {
            params: {
                query: 'sport cars',
                client_id: accessKey,
            },
        };

        axios
            .get(endpoint, config)
            .then((response) => {
                const image = response.data;
                const imageUrl = image.urls.regular;
                const carName = image.description || 'Unnamed Car';

                setCars([{ id: image.id, imageUrl, carName, likes: 0 }]);
            })
            .catch((error) => {
                console.error('Failed to fetch image:', error.message);
            });

        setTimeout(() => {
            getRandomCars();
        }, 2000);
    }, []);

    const favoriteCar = (id) => {
        const car = cars.find(d => d.id === id);

        if (car) {
            const updatedCars = cars.map(c => (c.id === id ? { ...c, likes: c.likes + 1 } : c));
            setCars(updatedCars);
        }

        getRandomCars();
    };

    const getRandomCars = () => {
        if (cars.length === 0) {
            return;
        }

        let randomIdx1 = Math.floor(Math.random() * cars.length);
        let randomIdx2 = Math.floor(Math.random() * cars.length);

        while (randomIdx1 === randomIdx2) {
            randomIdx2 = Math.floor(Math.random() * cars.length);
        }

        setIdx1(randomIdx1);
        setIdx2(randomIdx2);
    };

    const getMedal = (idx) => {
        switch(idx) {
            case 0:
                return <p className="place place-1"><i className='fas fa-medal'></i></p>;
            case 1:
                return <p className="place place-2"><i className='fas fa-medal'></i></p>;
            case 2:
                return <p className="place place-3"><i className='fas fa-medal'></i></p>;
            default:
                return <p className="place">{idx + 1}</p>;
        }
    };

    if (cars.length === 0 || !idx1 || !idx2) return <h1>Loading data...</h1>;

    const car1 = cars[idx1];
    const car2 = cars[idx2];

    return (
        <div className="main">
            <h1 className="text-center">Which one is your favorite?</h1>
            <div className="container text-center">
                <div className="img_container">
                    <img src={car1.image} alt="" />
                    <h3 className="name">{car1.name}</h3>
                    <button className="choose-btn" onClick={() => favoriteCar(car1.id)}>
                        This!
                    </button>
                </div>
                <h3 className="or">Or</h3>
                <div className="img_container">
                    <img src={car2.image} alt="" />
                    <h3 className="name">{car2.name}</h3>
                    <button className="choose-btn" onClick={() => favoriteCar(car2.id)}>
                        That!
                    </button>
                </div>
            </div>

            <h2>Leaderboard - Top 10</h2>
            <table className="leaderboard">
                <tbody>
                    {cars.sort((a, b) => b.likes - a.likes).slice(0, 10)
                    .map((car, idx) => (
                        <tr key={car.id}>
                            <td>{getMedal(idx)}</td>
                            <td><img src={car.image} alt={car.id} /></td>
                            <td className="name">{car.name}</td>
                            <td>{car.likes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
