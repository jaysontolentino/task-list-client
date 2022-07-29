
interface IButton {
    text: string
    xs?: string
    onClick?: () => void
}

const Button: React.FC<IButton> = ({text, xs, onClick}) => {
    return (
        <button className={`bg-[#FEB708] rounded ${xs} hover:opacity-80`} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button