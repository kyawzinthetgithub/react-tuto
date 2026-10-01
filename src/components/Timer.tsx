import { useRef, useState } from "react";

function Timer() {

    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef<number | null>(null);

    const start = () => {
        console.log(intervalRef.current);
        if(intervalRef.current) return;
        intervalRef.current = window.setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);
    }

    const stop = () => {
        if(intervalRef.current) {
            window.clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }

    const reset = () => {
        if(intervalRef.current) {
            window.clearInterval(intervalRef.current);
            intervalRef.current = null;
            setSeconds(0);
        }
    }

    return (
        <>
            <h2>Timer</h2>

            <div className="p-5">
                <p>Seconds: {seconds} s</p>
                <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={start}>Start</button>
                <button className="p-2 bg-red-500 text-white rounded hover:bg-red-600 ml-2" onClick={stop}>Stop</button>
                <button className="p-2 bg-green-500 text-white rounded hover:bg-green-600 ml-2" onClick={reset}>Reset</button>
            </div>
        </>
    );
}

export default Timer;
