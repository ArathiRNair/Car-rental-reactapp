import axios from 'axios'
import { useEffect, useState } from 'react'
import NavigatinBar from './NavigatinBar';



const Viewcar = () => {

    const [data, changeData] = useState([])
    const[loading,setLoading]=useState(true);

    const fetchData = () => {
        axios.get("https://host-demo-app.onrender.com/api/cars").then(
            (response) => {
                changeData(response.data)
                setLoading(false);
            }
        ).catch(

            (error) => {
                console.log(error)
                setLoading(false)

            }

        )
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )
    if(loading){
        return <h3>Loading</h3>
    }


    return (
        <div>
            <NavigatinBar/>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Registration_Number</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Model</th>
                        <th scope="col">Vehicle_Type</th>
                        <th scope="col">Fuel_Type</th>
                        <th scope="col">Transmission</th>
                        <th scope="col">Seating_Capacity</th>
                        <th scope="col">Rent_Per_Day</th>
                        <th scope="col">City</th>
                        <th scope="col">Availability_Status</th>


                    </tr>
                </thead>
                <tbody>

                    {data.map(

                        (data, index) => {
                            return (
                                <tr>
                                    <td>{data.registration_number}</td>
                                    <td>{data.brand}</td>
                                    <td>{data.model}</td>
                                    <td>{data.vehicle_type}</td>
                                    <td>{data.fuel_type}</td>
                                    <td>{data.transmission}</td>
                                    <td>{data.seating_capacity}</td>
                                    <td>{data.rent_per_day}</td>
                                    <td>{data.city}</td>
                                    <td>{data.availability_status}</td>

                                </tr>
                            )
                        }

                    )}

                </tbody>
            </table>


        </div>
    )
}

export default Viewcar