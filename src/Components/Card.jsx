import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Card = (props) => {
    const navigate = useNavigate();
    // this will navigate to the detail card page
    function clickHandler() {
        navigate("/detailCard");
    }
    let item = props.item;

    return (
        <div key={item.id} className=" bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between" >
            <img className="w-full h-48 object-cover" src={item.image} ></img>
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                <h2 className="text-xl font-bold mb-2">City : <span>{item.city}</span></h2>
                <p className="text-gray-700  mb-2">{`${item.description.substring(0, 100)}...`}</p>
            </div>
            <Link to={`/detailCard/${item.id}`}>
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full hover:bg-blue-600 transition-all">
                    Know More
                </button>
            </Link>
        </div>
    )
}

export default Card