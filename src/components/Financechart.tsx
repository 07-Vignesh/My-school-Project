"use client"

import React from 'react';
import Image from 'next/image';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    Finance: 4000,
    Income: 2400,
  },
  {
    name: 'Feb',
    Finance: 3000,
    Income: 2210,
  },
  {
    name: 'Mar',
    Finance: 2000,
    Income: 2290,
  },
  {
    name: 'Apr',
    Finance: 2780,
    Income: 2000,
  },
  {
    name: 'May',
    Finance: 1890,
    Income: 2181,
  },
  {
    name: 'Jun',
    Finance: 2390,
    Income: 2500,
  },
  {
    name: 'Jul',
    Finance: 3490,
    Income: 2100,
  },
];

const Financechart = () => {
  return (
    <div className='w-full h-full bg-gray-50 my-16' >

         <div className='flex justify-between items-center my-5 '>
              <h1 className='text-lg font-semibold p-5 '>Finance</h1>
              <Image src="/moreDark.png" alt="" width={20} height={20}/>
            </div>

            <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Income" stroke="#8884d8" strokeWidth={5} />
          <Line type="monotone" dataKey="Finance" stroke="#82ca9d" strokeWidth={5}  />
        </LineChart>
      </ResponsiveContainer>
      </div>
  )
}

export default Financechart