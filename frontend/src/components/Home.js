import { useState, useEffect } from 'react';
import AutoCompleteText from './AutoCompleteText';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Home = () => {
    const data = [
        'Josh',
        'Brady'];

    const [cities, setCities] = useState('');
    const [departDate, setDepartDate] = useState(new Date());
    const [arrivalDate, setArrivalDate] = useState(new Date());

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
            <div className="AutoComplete-Component">
                <div>
                    <AutoCompleteText items={cities} />
                </div>
                <div>
                    <DatePicker selected={departDate} onChange={(date) => setDepartDate(date)} />
                </div>
                <div>
                    <DatePicker selected={arrivalDate} onChange={(date) => setArrivalDate(date)} />
                </div>
            </div>

        </div>
    );
}

export default Home;