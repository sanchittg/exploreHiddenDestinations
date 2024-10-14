import React, { useEffect } from 'react'
import Card from './Card';
import { Link } from 'react-router-dom';
const CardContainer = (props) => {
    const data = props.data
    const category = props.category;
    // useEffect(() => {
    //     console.log(category);
    // }, [category])
    let filteredData = category == "All" ? data : data.filter((item) => item.state === category);
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto px-4 md:px-16">
                {filteredData.length === 0 ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="bg-white rounded-lg shadow-xl p-6 w-full sm:w-3/4 md:w-2/4 lg:w-1/4 text-center">
                            <h2 className="text-2xl font-semibold text-gray-800">Nothing here</h2>
                            <p className="text-gray-600 mt-2">
                                No places found for the selected category.
                            </p>
                            <Link to="/addCards" >
                                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
                                    Add places
                                </button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredData.map((item) => (
                            <Card key={item.id} item={item} />
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default CardContainer