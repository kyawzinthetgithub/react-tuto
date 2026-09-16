import Button from "./Button";

interface HeaderTextProps {
    text: string;
}

function HeaderText({ text }: HeaderTextProps) {
  return (
    <div>
      <p className="text-2xl font-bold text-green-500">{text}</p>
      <Button name='update' />
    </div>
  )
}

export default HeaderText
