import React, { useState } from "react";
import Card from "./Card";
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

const Testimonials = (props) => {
    let reviews = props.reviews

    const [index, setIndex] = useState(0);

    function leftShiftHandler(){
        if(index-1 < 0){
            setIndex(reviews.length - 1);
        }
        else{
            setIndex(index - 1);
        }
    }

    function rightShiftHandler(){
        if(index+1 >= reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index + 1);
        }
    }

    function surpriseHandler(){
        let randomIdx = Math.floor(Math.random() * (reviews.length));
        setIndex(randomIdx);
    }

    return (
        <div className="bg-white w-[85vw] md:w-[700px] flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 shadow-md hover:shadow-xl rounded-md">
            <Card review = {reviews[index]}></Card>

            <div className="flex text-3xl mt-10 gap-3 text-violet-400 font-bold justify-center items-center">
                <button className="cursor-pointer hover:text-violet-500" onClick={leftShiftHandler}>
                    <FiChevronLeft />
                </button>
                <button className="cursor-pointer hover:text-violet-500" onClick={rightShiftHandler}>
                    <FiChevronRight />
                </button>
            </div>

            <div className="mt-5">
                <button className="bg-violet-400 text-white font-bold hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md text-lg" onClick={surpriseHandler}>
                    Surprise Me
                </button>
            </div>
        </div>
    );

}

export default Testimonials;