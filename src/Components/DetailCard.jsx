import React from 'react'
import cardsData from "../../data.json"
import { useParams } from 'react-router-dom'

const DetailCard = () => {

    const id = useParams();

    const clickedCard = cardsData.find((item) => item.id === (id.id));

    return (
        <div className=" w-full bg-cover bg-center md:bg-top duration-1000 ease-in-out  mt-16">

            {
                clickedCard ? (<div className="flex flex-col md:flex-row items-start  md:items-center   bg-white  overflow-hidden">

                    {/* Left side: Image */}
                    <div className="md:w-1/2 w-full">
                        <img
                            src={clickedCard.image}
                            alt={clickedCard.name}
                            className="object-cover w-full h-full rounded-l-lg"
                        />
                    </div>

                    {/* Right side: Information */}
                    <div className="md:w-1/2 w-full p-6 space-y-2">
                        <h2 className="text-4xl font-bold">{clickedCard.name}</h2>
                        <p className="text-gray-700 "><span className='font-semibold'>City: </span>
                            {clickedCard.city}
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold">State:</span> {clickedCard.state}
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold">Description:</span> {clickedCard.description}
                        </p>
                        <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out" >
                            View Location
                        </button>
                    </div>
                </div>) : (<p className="text-center text-red-500">Card not found!</p>)
            }




        </div>
    )
}

export default DetailCard