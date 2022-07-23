
import { FooterLogo } from "./Logo"

function Footer() {
    return (
        <footer className="w-full pt-[35px] pb-[50px] text-white bg-[#23AAAA]">
            <div className="container flex">
                <FooterLogo width="153px" height="131px" />

                <div className="md:hidden lg:flex ml-20">
                    <div className="w-40">
                        <span className="uppercase font-medium text-sm mb-2 inline-block">for parents</span>
                        <ul>
                            <li className="text-sm hover:underline"><a href="#">Parent Resources</a></li>
                            <li className="text-sm hover:underline"><a href="#">How it Works</a></li>
                            <li className="text-sm hover:underline"><a href="#">Testimonials</a></li>
                            <li className="text-sm hover:underline"><a href="#">Terms of Use</a></li>
                            <li className="text-sm hover:underline"><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div  className="w-40">
                        <span className="uppercase font-medium text-sm mb-2 inline-block">for providers</span>
                        <ul>
                            <li className="text-sm hover:underline"><a href="#">Provider Resources</a></li>
                            <li className="text-sm hover:underline"><a href="#">How it Works</a></li>
                            <li className="text-sm hover:underline"><a href="#">Testimonials</a></li>
                            <li className="text-sm hover:underline"><a href="#">Terms of Use</a></li>
                            <li className="text-sm hover:underline"><a href="#">List Your Program</a></li>
                        </ul>
                    </div>

                    <div  className="w-40">
                        <span className="uppercase font-medium text-sm mb-2 inline-block">more</span>
                        <ul>
                            <li className="text-sm hover:underline"><a href="#">About Us</a></li>
                            <li className="text-sm hover:underline"><a href="#">Press</a></li>
                            <li className="text-sm hover:underline"><a href="#">Jobs</a></li>
                            <li className="text-sm hover:underline"><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="flex mb-4">
                        <a className=" mr-2 social-icon fb" href=""></a>
                        <a className="mr-2 social-icon twitter" href=""></a>
                        <a className="social-icon ig" href=""></a>
                    </div>

                    <a href="#" className="w-36 inline-block text-[#23AAAA] bg-white rounded text-center py-[6px] hover:bg-teal-50">Help Center</a>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer