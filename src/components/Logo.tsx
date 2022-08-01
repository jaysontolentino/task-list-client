import { FC } from "react"

interface IProps {
    width?: string
    height?: string
}

export const Logo: FC<IProps> = ({width, height}) => {
    return (
        <img src="images/carelulu-logo.png" width={width} height={height} alt="" />
    )
}

export const FooterLogo = () => {
    return (
        <img src="images/carelulu_logo_square_white.png" className="w-[153px] h-[131px] sm:w-[122px] sm:h-[105px]" alt="footer_logo" />
    )
}