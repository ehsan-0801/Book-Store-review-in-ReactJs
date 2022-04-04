import React from 'react';
import SpecialAreaChart from '../SpecialAreaChart/SpecialAreaChart';
import SpecialBarChart from '../SpecialBarChart/SpecialBarChart';
import SpecialLineChart from '../SpecialLineChart/SpecialLineChart';
import SpecialPieChart from '../SpecialPieChart/SpecialPieChart';

const Dashboard = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <h4 className="text-primary text-center fw-bold">Investment vs Revenue</h4>
                        <SpecialBarChart></SpecialBarChart>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h4 className="text-primary text-center fw-bold">Investment vs Revenue</h4>
                        <SpecialPieChart></SpecialPieChart>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h4 className="text-primary text-center fw-bold">Investment vs Revenue</h4>
                        <SpecialAreaChart></SpecialAreaChart>
                    </div>
                    <div className="me-auto col-md-6 col-sm-12">
                        <h4 className="text-primary text-center fw-bold">MonthWise Sell</h4>
                        <SpecialLineChart></SpecialLineChart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;