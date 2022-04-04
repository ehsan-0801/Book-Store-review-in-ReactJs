import React from 'react';
import { Pie, PieChart } from 'recharts';
import useData from '../../hooks/useData';

const SpecialPieChart = () => {
    const [data, setData] = useData()
    return (
        <PieChart width={ 500 } height={ 250 }>
            <Pie data={ data } dataKey="revenue" nameKey="month" cx="50%" cy="50%" outerRadius={ 50 } fill="#8884d8" />
            <Pie data={ data } dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={ 60 } outerRadius={ 80 } fill="#82ca9d" label />
        </PieChart>
    );
};

export default SpecialPieChart;