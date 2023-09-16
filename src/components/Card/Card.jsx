import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import { BiDollar } from "react-icons/bi";
import { BiBookOpen } from "react-icons/bi";

const Card = ({course, handleSelectCourse}) => {
    const {cover_photo,title,description,price,credit_per_hour} = course;
    return (
        <div>
            <div className="bg-base-100 shadow-xl p-4">
                <img src={cover_photo} alt="Shoes" className="rounded-xl w-full mb-4" />
                <div>
                    <h2 className="text-lg text-[#1C1B1B]">{title}</h2>
                    <p className="text-sm text-[#1C1B1B99]">{description}</p>
                    <div className="flex justify-between my-4">
                        <div className="flex justify-between items-center">
                            <div className="text-2xl">
                                <BiDollar></BiDollar>
                            </div>
                            <div className="text-[#1C1B1B99]">
                                Price: {price}
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="text-2xl">
                                <BiBookOpen></BiBookOpen>
                            </div>
                            <div className="text-[#1C1B1B99]">
                                Credit:{credit_per_hour}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                <button onClick={() =>handleSelectCourse(course)} className="text-lg text-white py-2 rounded-lg bg-[#2F80ED] w-full">Select</button>
                <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Card;