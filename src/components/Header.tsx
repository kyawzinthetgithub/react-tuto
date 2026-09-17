interface HeaderProps {
  username?: string;
  point: number;
}

function Header({ username, point }: HeaderProps) {
  return (
    <div>
      {/* {username ? <h2 className="text-2xl font-bold text-red-500 capitalize">Hello {username}!</h2> : <p>No Username found!</p>} */}
      {username && <h2 className="text-2xl font-bold text-red-500 capitalize">Hello {username}!</h2>}
      <p className="text-lg text-gray-600">You have {point} points.</p>
    </div>
  );
};

export default Header;
