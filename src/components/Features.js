import React from "react";
import '../css/Features.css';
import Tapes from '../assets/tapes.jpg';
import Motorbikes from '../assets/motorbikes.jpg';
import Motobike1 from '../assets/motobike1.jpg';
import Kitchen from '../assets/kitchen.jpg';
import Sportitems from '../assets/sportitems.jpg';
import Kettle from '../assets/kettle.jpg';
import Kebab from '../assets/kebab.jpg';
import Bed4 from '../assets/bed4.jpg';
import LivingRoom from '../assets/living-room.jpg';
import Bathroom2 from '../assets/bath2.jpg';
import ListingItem from "./ListingItem";

const Features = () => {
    return (
        <div className="features">
            <h1 className="features-text">Top featured listing</h1>
            <p className="features-text">Selected listings by City, State based on views.</p>
            <div className="container">
                <ListingItem img={Tapes}/>
                <ListingItem img={Motorbikes} />
                <ListingItem img={Motobike1} />
                <ListingItem img={Kitchen}  />
                <ListingItem img={Sportitems} />
                <div className="span-2 right-img-details" >
                    <button className="btn">View Listing</button>
                </div>
            </div>

            <div className="container">
                <img className="order-2" src={Kebab} atl='' />
                <img className="order-3" src={Bed4} atl='' />
                <img className="span-3 image-grid-row-2 order-1" src={Kettle} atl='' />
                <img className="order-4" src={LivingRoom} atl='' />
                <img className="order-5" src={Bathroom2} atl='' />
                <div className="span-2 right-img-details order-7" >
                    <button className="btn">View Listing</button>
                </div> 
            </div>
        </div>
    )
}

export default Features;