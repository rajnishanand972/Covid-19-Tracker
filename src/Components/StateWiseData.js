import React,{useEffect,useState} from 'react'
import "./StatewiseStyle.css";
const StateWiseData = () => {
    const [data,setData] = useState([]);
    const getCovidData = async () =>{
       const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData);
        setData(actualData.statewise);
    }

    useEffect(() => {
        getCovidData();
    }, [])


    return (
        <>
            <div className="container-fluid mt 5">
            <div className="main-heading">
            <h1 className = "mb-5 text-center"><span className="font-weight-bold">INDIA</span> COVID-19 DASHBOARD</h1>
            </div> 
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                            <th>Active</th>
                            <th>Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((currElem,ind)=>{
                            return(
                            <tr key={ind}>
                            <th>{currElem.state}</th>
                            <td>{currElem.confirmed}</td>
                            <td>{currElem.recovered}</td>
                            <td>{currElem.deaths}</td>
                            <td>{currElem.active}</td>
                            <td>{currElem.lastupdatedtime}</td>
                        </tr>            
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
            </div>
        </>
    )
}

export default StateWiseData
