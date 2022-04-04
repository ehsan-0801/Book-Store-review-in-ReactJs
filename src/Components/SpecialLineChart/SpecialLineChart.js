
import React from 'react';
import { Tooltip } from 'react-bootstrap';
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';
import useData from '../../hooks/useData';

const SpecialLineChart = () => {
    const [data, setData] = useData();
    return (
        <LineChart width={ 500 } height={ 250 } data={ data }
            margin={ { top: 5, right: 30, left: 20, bottom: 5 } }>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="investment" stroke="#8884d8" />
            <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
        </LineChart>
    );
};

export default SpecialLineChart;