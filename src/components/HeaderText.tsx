interface HeaderTextProps {
    text: string;
}

function HeaderText({ text }: HeaderTextProps) {
  return (
    <div>
      <p className="text-2xl font-bold text-green-500">{text}</p>
    </div>
  )
}

export default HeaderText
