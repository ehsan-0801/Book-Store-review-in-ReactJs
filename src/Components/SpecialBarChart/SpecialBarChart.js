import React from 'react';
import useData from '../../hooks/useData';
import { Bar, BarChart, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

const SpecialBarChart = () => {
    const [data, setData] = useData()
    return (
        <BarChart width={ 500 } height={ 250 } data={ data }>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" fill="#8884d8" />
            <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
    );
};

export default SpecialBarChart;