

const Cart = ({selectedCourse, remaining, creditHour, totalPrice}) => {
    
    return (
        <div>
            <div className="bg-base-100 shadow-xl p-6">
                <div>
                    <h2 className="text-lg text-[#2F80ED] text-center">Credit Hour Remaining {remaining} hr</h2>
                    <hr className="my-4" />
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-5">Course Name </h2>
                    {
                        selectedCourse.map(name => (
                            <li className="text-base text-[#1C1B1B99]" key={name.title}>{name.title}</li>
                        ))
                    }
                    <hr className="mt-6 mb-4" />
                    <h2 className="font-medium text-[#1C1B1BCC]">Total Credit Hour : {creditHour}</h2>
                    <hr className="mt-6 mb-4" />
                    <h2 className="font-bold text-[#1C1B1BCC]">Total Price: {totalPrice} USD</h2>
                </div>
            </div>
        </div>
    );
};

export default Cart;