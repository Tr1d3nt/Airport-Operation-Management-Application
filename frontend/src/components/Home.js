import { useState, useEffect } from 'react';
import AutoCompleteText from './AutoCompleteText';

const Home = () => {
    const data = [
        'Josh',
        'Brady'];

    const [cities, setCities] = useState('');

    const getCities = () => {

        fetch('cities.json', {
            headers: {


                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        }).then(function (response) {
            console.log(response);
            return response.json();
        }).then(function (myJson) {

            var data = [];
            for (var i in myJson)
                data.push([myJson[i].name]);

            console.log(data);
            setCities(data);
        });




    }

    useEffect(() => {
        getCities()
    }, [])

    return (
        <div>
            <h2 style={{ textAlign: "center" }}>Book Flight</h2>
            <AutoCompleteText items={cities} />

        </div>
    );
}

export default Home;