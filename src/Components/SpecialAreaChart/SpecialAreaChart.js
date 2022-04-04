
import React from 'react';
import { Tooltip } from 'react-bootstrap';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import useData from '../../hooks/useData';

const SpecialAreaChart = () => {
    const [data, setData] = useData()
    return (
        <AreaChart width={ 500 } height={ 250 } data={ data }
            margin={ { top: 10, right: 30, left: 0, bottom: 0 } }>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={ 0.8 } />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={ 0 } />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={ 0.8 } />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={ 0 } />
                </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={ 1 } fill="url(#colorUv)" />
            <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={ 1 } fill="url(#colorPv)" />
        </AreaChart>
    );
};

export default SpecialAreaChart;