import HeaderText from "./HeaderText";

interface HeaderProps {
  username?: string;
}

function Header({ username = 'Guest' }: HeaderProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-red-500">React App</h2>
      <p>Welcome, {username}!</p>
      <HeaderText text={`Header Text, ${username}!`} />
    </div>
  );
};

export default Header;
