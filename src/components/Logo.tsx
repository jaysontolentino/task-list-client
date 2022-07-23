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

export const FooterLogo: FC<IProps> = ({width, height}) => {
    return (
        <img src="images/carelulu_logo_square_white.png" width={width} height={height} alt="" />
    )
}