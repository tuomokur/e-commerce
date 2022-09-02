// import { TagLeftIcon } from "@chakra-ui/react";
// import image from "../assests/image2.jpg";
import "./css/landingImage.css";

// const divStyle = {
//     width: "50%",
//     height: "55vh",
//     color: "red",
//     backgroundImage: `url(${image})`,
//     marginLeft: "1em",
//     marginRight: "1em"
// };

const LandingImage = () => {
    return (
        <div className="image-container">
            <div className="text-container">
                <h2>Welcome to <span>EasyBuy</span></h2>
                <h4>What can you do here?</h4>
                <div style={{ marginLeft: "2em"}}>
                    <ul>
                        <li>Buy other's stuff</li>
                        <li>Sell your stuff</li>
                    </ul>
                </div>
                <p>Thank you for choosing us.</p>
            </div>
        </div>
    );
}

export default LandingImage;