function testForm() {

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Form submitted");
    }

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Input changed to: ", event.target.value);
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log("Button clicked");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleInput}
                    placeholder="Type something..."
                />
                <button onClick={handleClick}>Click Me</button>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default testForm
