import { useState } from "react";

function Statetest() {
    const [point, setPoint] = useState(0);

    const increasePoint = () => {
        setPoint((prev) => {
            return prev + 1;
        });
    };

    const decreasePoint = () => {
        if (point === 0) return;
        setPoint(point - 1);
    };

    return (
        <div className="flex flex-col justify-center items-center mt-10">
            <h2>Point: {point}</h2>

            <div className="flex justify-start items-center gap-2 mt-2">
                <button
                    className="rounded bg-red-500 text-white w-[60px] h-[40px] cursor-pointer"
                    onClick={decreasePoint}
                >
                    -
                </button>
                <button
                    className="rounded bg-green-500 text-white w-[60px] h-[40px] cursor-pointer"
                    onClick={increasePoint}
                >
                    +
                </button>
            </div>
        </div>
    );
}

export default Statetest;
