import React from 'react'
import { ResponsiveContainer,BarChart,Bar,XAxis, YAxis } from 'recharts'


const Array=[
  {
    month:'Jan',
    sales:4500
  },
  {
    month:'Feb',
    sales:3000
  },
  {
    month:'Mar',
    sales:11000
  },
  {
    month:'Apr',
    sales:6500
  },
  {
    month:'May',
    sales:7500
  },
  {
    month:'Jun',
    sales:4500
  },
  {
    month:'Jul',
    sales:7000
  },
  {
    month:'Aug',
    sales:11100
  },
  {
    month:'Sep',
    sales:9000
  },
  {
     month:'Oct',
    sales:3000
  },
  {
    month:'Nov',
    sales:8000
  },
  {
    month:'Dec',
    sales:10000
  },

];


const Overview = () => {
  return (

    <>
    <div className="chartbox">
    <div className="headigoverview">
      <div className="overviewtitle">
        <span className='title-1'>Overview</span>
        <span >Monthly Earning</span>
      </div>
      <div className="report">
        <select name="" id="">
          <option value="1">Quaterly</option>
          <option value="1">Monthly</option>
        </select>
      </div>
    </div>
    <div className='overviewBox mt-0'>
        <ResponsiveContainer width="100%" aspect={3} className="Charts">
          <BarChart data={Array} sty >
            <XAxis dataKey="month" className='m-5' />


            <Bar dataKey="sales" fill='blueviolet' radius={10}  />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
      </>
  )
}

export default Overview