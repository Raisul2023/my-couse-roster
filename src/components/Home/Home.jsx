import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";

const Home = () => {

    const [allCourses, setAllCourses] = useState([]);
    const [selectedCourse,setSelectedCourse] = useState([]);
    const [creditHour, setCreditHour] =useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [remaining, setRemaining] = useState(0);
    
    useEffect(() => {
        fetch('fake.json')
        .then(res => res.json())
        .then(data => setAllCourses(data))
    },[])

    

    const handleSelectCourse = (course) => {
        const isExist = selectedCourse.find(item => item.id == course.id);
        let credit = course.credit_per_hour;
        let price = course.price;
        if(isExist){
            toast( "This course is already selected")
           
        }
        else{
            selectedCourse.forEach(item => {
                credit = credit + item.credit_per_hour;
                
            })
            selectedCourse.forEach(item => {
                price = price + item.price;
            })
            setCreditHour(credit);
            setTotalPrice(price);
            const totalRemaining = 20 - credit;
            if(credit > 20 || totalRemaining < 0){
                toast( "You don't have enough credit hour")
            }
            else{
                setRemaining(totalRemaining)
                setSelectedCourse([...selectedCourse,course]);
            }
        }
        
    }
    return (
        <div>
            {/* heading */}
            <h1 className='text-3xl md:text-4xl font-bold text-center py-5 md:py-8 lg:py-10 xl:pt-12 '>Course Registration</h1>
            {/* heading end */}
            <div className='lg:flex  gap-6 px-5 md:px-9 lg:px-11 xl:px-16'>
                <div className='card-container grid items-center md:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-3/4'>
                    {
                        allCourses.map(course => <Card key={course.id} course={course} handleSelectCourse={handleSelectCourse} ></Card>)
                    }
                </div>
                <div className='cart-container lg:w-1/4'>
                    <Cart selectedCourse={selectedCourse}
                    remaining={remaining}
                    creditHour={creditHour}
                    totalPrice={totalPrice}>
                    </Cart>
                </div>

            </div>
        </div>
    );
};

export default Home;