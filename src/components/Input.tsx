function Input() {

    const logg = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Input changed logger: changed to - ", event.target.value);
    }

  return (
    <div className="m-4">
      <input type="text" placeholder="Enter text..." className="border border-gray-300 rounded-md ps-4 py-2" onChange={logg} />
    </div>
  )
}

export default Input
