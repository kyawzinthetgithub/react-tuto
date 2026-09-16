interface ButtonProps {
    name?: string;
}

function Button({ name = 'Click Me' }: ButtonProps) {
    const showAlert = (text: string) => {
        alert(`Button ${name} clicked! ${text}`);
    }
    return (
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold capitalize py-2 px-4 rounded cursor-pointer" onClick={() => {showAlert('abo')}}>
                {name}
            </button>
        </div>
    )
}

export default Button
