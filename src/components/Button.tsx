
interface IButton {
    text: string
    type?: "button" | "submit" | "reset" | undefined
    xs?: string
    onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button: React.FC<IButton> = ({text,type, xs, onClick}) => {
    return (
        <button className={`bg-[#FEB708] rounded ${xs} hover:opacity-80`} type={type} onClick={onClick} >
            {text}
        </button>
    )
}

export default Button