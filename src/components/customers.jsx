import React from 'react'
import {Doughnut} from'react-chartjs-2'
import{
  Chart as ChartJS,ArcElement,Tooltip,Legend
} from 'chart.js'


ChartJS.register(
  ArcElement,Tooltip,Legend
);


const Customers = () => {

  const data={

    
    datasets:[{
      
      data:[3,6,9],
      backgroundColor:['orange','red','blueviolet'],
      borderColor:['white']
    }]
  };
  const option={

  }



  return (
    <div className='cutomerbox d-flex'>
      <div className="customertitle  ">
        <h2 className='title-1'>Customers</h2><p>Customer that buy Products</p>
      </div>
      <div className="customerchart">
      <Doughnut data={data} options={option} className='dought' >

</Doughnut>
      </div>
    </div>
  )
}

export default Customers