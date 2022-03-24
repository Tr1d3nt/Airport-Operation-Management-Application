import { useState, useEffect } from 'react';
import AutoCompleteText from './AutoCompleteText';

const Home = () => {
    const data = [
        'Josh',
        'Brady'];
    return (
        <div>
            <h2 style={{ textAlign: "center" }}>Book Flight</h2>
            <AutoCompleteText items={data} />
        </div>
    );
}

export default Home;