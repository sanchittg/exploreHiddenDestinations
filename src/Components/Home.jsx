import React, { useEffect, useState } from 'react'
import girl from "../../public/girlInBoat.jpg"
import indiaGate from "../../public/indiaGate.jpg"
import riverAndBirds from "../../public/riverAndBirds.jpg"
import tajMahal from "../../public/tajMahal.jpg"
import { FaSearch } from 'react-icons/fa';
import CardContainer from './CardContainer'
import cardsData from "../../data.json"
const Home = () => {

    const bgImage = [girl, indiaGate, riverAndBirds, tajMahal];
    const [index, setIndex] = useState(0);
    const [searchItem, setSearchItem] = useState("");
    const [category, setCategory] = useState("All");
    useEffect(() => {
        const changeImage = setInterval(() => {

            setIndex((prevValue) => (prevValue + 1) % bgImage.length);
        }, 3000);
        return () => clearInterval(changeImage);

    }, []);

    function changeHandler(event) {
        setSearchItem(event.target.value);
    }
    function clickHandler(event) {
        event.preventDefault();

        setSearchItem("");
    }

    function selectCategory(event) {
        //console.log(event.target.innerHTML)
        setCategory(event.target.innerHTML);

    }
    return (
        <div>
            <div className=" w-full bg-cover bg-center md:bg-top duration-1000 ease-in-out  mt-16" style={{ backgroundImage: `url(${bgImage[index]})`, height: 'calc(100vh - 64px)' }}>
                {/* <!-- Search bar --> */}
                <div className=" inset-0 flex flex-col items-center justify-center text-center  bg-black bg-opacity-50" style={{ height: 'calc(100vh - 64px)' }}>
                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-10">
                        Discover Amazing Places
                    </h1>
                    <form onSubmit={clickHandler} className="w-full max-w-56 md:max-w-md flex items-center border border-gray-300 rounded-md overflow-hidden">
                        <input
                            required
                            type="text"
                            placeholder="Search city..."
                            value={searchItem}
                            className="w-full text-white font-bold text-xl p-1 md:p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
                            onChange={changeHandler}
                        />
                        {/* search btn */}
                        <div className="p-3 cursor-pointer flex items-center">
                            <button type='submit'>
                                <FaSearch className="text-white" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="text-center my-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
                    Explore Hidden Places
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mt-4">
                    Discover the unseen gems of nature and culture across states!
                </p>
            </div>
            <div className="flex flex-wrap justify-center my-6 space-x-2 space-y-2 md:space-x-4 md:space-y-0">
                <button className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300" onClick={selectCategory}>All</button>
                <button className="w-full sm:w-auto bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300" onClick={selectCategory}>Uttarakhand</button>
                <button className="w-full sm:w-auto bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300" onClick={selectCategory}>Delhi</button>
                <button className="w-full sm:w-auto bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300" onClick={selectCategory}>Mumbai</button>
                <button className="w-full sm:w-auto bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300" onClick={selectCategory}>UttarPradesh</button>
                <button className="w-full sm:w-auto bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300" onClick={selectCategory}>Punjab</button>
                <button className="w-full sm:w-auto bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300" onClick={selectCategory}>Himanchal</button>
            </div>
            <div>
                <CardContainer data={cardsData} category={category}></CardContainer>
            </div>
        </div>
    )
}

export default Home