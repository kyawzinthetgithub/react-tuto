import { useRef } from 'react';

function RefHook() {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleButton = () => {
        inputRef.current?.focus();
        inputRef.current?.select();
    };

    return (
        <>
            <div className="p-5">
                <h2>Ref Hook</h2>
                <input ref={inputRef} type="text" name="name" id="name" className="p-2 border border-gray-300 rounded focus:outline-none focus:border-1 focus:border-gray-500" placeholder="Enter your name" />
                <button onClick={handleButton} className="ml-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Focus Input</button>
            </div>
        </>
    );
}

export default RefHook;
