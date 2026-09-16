import Button from "./Button";
import HeaderText from "./HeaderText";

interface HeaderProps {
  username?: string;
}

function Header({ username = 'Guest' }: HeaderProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-red-500 capitalize">React App</h2>
      <HeaderText text={`Header Text, ${username}!`} />
      <p className="p-8">Welcome, {username}!</p>

      <Button name='submit' />
    </div>
  );
};

export default Header;
