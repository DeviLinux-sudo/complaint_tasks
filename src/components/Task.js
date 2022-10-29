
import React,{useState,useEffect} from 'react';
import Chart from "react-apexcharts";




function Task () {

  const [option,setOption]=useState(
    {}
  );

useEffect (()=>{
  const getvaluedata = async()=>{
    const newvalue=[];
const reqData = await fetch('.data/data.json');
const resData  = await reqData.json();
for(let i=0; i< resData.length;i++){
newvalue.push({categories:resData[i].categories_xaxis});
}
setOption(newvalue);
  }
  getvaluedata();
},[]);




  return (
    <div className='container-fluid mt-3 mb-3'>
      <h2 style={{"font-size":"30px",display:"flex","justify-content":"center","text-align":"center"}}>Complaint Tracker</h2>

      <Chart type='line'
      width="1349"
      height="500"
      

      series={[{
        name:"New Complaints",
        data:[0,20,40,60,80,100]
    },
    {
      name:"Closed Complaints",
      data:[30,60,90,120,150,180]
    },
    {
    name:"Assign Complaints",
    data:[0,40,80,120,160,200]
    },
    {
    name:"Hold Complaints",
    data:[10,35,50,100,150,200]
    }]}

      
        options={option}>
      </Chart>
    
    </div>
   );
  
}

export default Task

