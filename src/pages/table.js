import React from 'react'


const calc_precent = (per, num) => {
  return (num/100)*per;
}



function PrecentTable() {

  const PrecentRow = (props) => {
    const {num, series, idx} = props
    
    
    return (
      <tr key={`${num}-tr`} className={idx % 2 === 0 ? "tr_odd" : "tr_even"}> 
          <td>{num}</td>
          {  series.map((p, i)=> (
          <td key={`${i}-td`} className={i % 2 === 0 ? "odd" : "even"}> 
            {/* {p}% {num} = 0 */}
           {calc_precent(p, num)} 
          </td>))   }

      </tr>
    )


  } 


  

  const precentSeries = [5,10,15,20,30,40,50,60,70,80,90,100];
  const series = [10,20,25,50,75,100,200, 250, 300, 350,400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950,   1000]



  return (
    <div className='td-container'>
    <table width="100%" border={0} style={{fontSize:10}}>
      <thead>
        <tr>
          <th>num</th>
        { precentSeries.map( (n, i) => (
            <th> {n} % </th>
        )  )   }
        </tr>
      </thead>
      <tbody>      
      { series.map( (n, i) => <PrecentRow key={`row-${i}`} idx={i} num={n} series={precentSeries}  />   )   }
      </tbody>
      </table>
      </div>
  )
}

export default PrecentTable