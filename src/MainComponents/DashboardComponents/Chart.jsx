import React, { Component } from "react";
import { Pie } from 'react-chartjs-2';
import { connect } from "react-redux";


class Chart extends Component {
    render() {
        const { data } = this.props
        var categories = [];
        var expenses = [];
        var total = [];
        // var names = ['Total Income', 'Total Expense'];

        var totalIncome = 0;
        var totalExpense = 0;

        if (data.length >= 1) {
            data.map(item => categories = [...categories, (item.title.category)])


            categories = categories.filter((val, a, c) => c.indexOf(val) === a)
            // Calculated the total Income and Expense
            for(let i=0; i < data.length; i++){
                if(data[i].title.type === "Income")
                    totalIncome += Number(data[i].title.amount)
                else if(data[i].title.type === "Expense")
                    totalExpense += Number(data[i].title.amount)
            }
            total.push(totalIncome, totalExpense)
            // Data for categorywise Expense start
            for (let i = 0; i < categories.length; i++) {
                let sum = 0;
                for (let j = 0; j < data.length; j++) {
                    if(data[j].title.type === "Expense"){
                        if (categories[i] === data[j].title.category) {
                            sum += Number(data[j].title.amount)
                        }

                    }
                }
                expenses.push(sum)
            }
            var chartData = {
                labels: categories,
                datasets: [
                    {
                        label: "Expenses",
                        data: expenses,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ]

                    }
                ]
            }
            // Data for categorywise Expense end

            // Data for userwise Expense start
            var totalData = {
                labels: ['Total Income', 'Total Expense'],
                datasets: [
                    {
                        label: "Expenses",
                        data: total,
                        backgroundColor: [
                            'rgba(139, 195, 74,1.0)',
                            'rgba(239, 83, 80,1.0)',
                        ]

                    }
                ]
            }
            // Data for userwise Expense end
        }
        return (
            <>
                <div className="conatiner-fluid">
                <div className ="row pt-2 text-center">
                <div className="col"><h6> Total Income : {totalIncome}</h6> </div>
                <div className="col"> <h6> Total Expense : {totalExpense}</h6></div>
                </div>
                </div>
                <hr/>
                <div>
                    <h3 className="text-center">Expenses by Category </h3>
                    <hr />
                    <Pie data={chartData} height={108}/>
                </div>
                <hr/>
                <div>
                    <h3 className="text-center">Total Income & Expense </h3>
                    <hr />
                    <Pie data={totalData} height={108}/>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    data: state.data
})

export default connect(
    mapStateToProps,
)(Chart);