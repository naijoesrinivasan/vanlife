import React from 'react'
import { BarChart, ResponsiveContainer, CartesianGrid, Bar, YAxis, XAxis, Rectangle, Tooltip, Legend } from 'recharts'

export default function Income() {

  const styles = {
    textDecoration: "underline",
    fontWeight: "bold"
  }
  const transactions = [
    { month: "Jan", income: 1232, date: "01/23/24"},
    { month: "Feb", income: 1467, date: "02/14/24"},
    { month: "Mar", income: 2359, date: "03/10/24"},
    { month: "Apr", income: 1120, date: "04/09/24"},
    { month: "May", income: 2340, date: "05/13/24"},
    { month: "Jun", income: 789 , date: "06/27/24"},
    { month: "Jul", income: 1968, date: "07/19/24" },
    { month: "Aug", income: 1405, date: "08/16/24" },
    { month: "Sep", income: 1800, date: "09/27/24" },
  ];

  return (
    <div className='income-wrapper'>
      <section className="income-title">
        <h1>Income</h1>
        <p>Last <span style={styles}>3 months</span></p>
        <h1>$5,173</h1>
      </section>
      <section className="income-chart">
        <ResponsiveContainer height={350} width="100%">
          <BarChart
            data={transactions}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="income" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          </BarChart>
        </ResponsiveContainer>
      </section>
      <section className="income-transactions">
        <div className='transactions-title'>
          <p>Transactions</p>
          <p>Year <span style={{fontWeight: "bold", textDecoration: "underline"}}>2024</span></p>
        </div>
        <div className='transactions-cards-wrapper'>
        { transactions.map((item) => (
          <div className='transaction-cards'>
            <h2>${item.income}</h2>
            <p>{item.month}</p>
          </div>
        ))}
        </div>
      </section>
    </div>
  )
}
