import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <div className="fLists">
                <ul className="fList">
                    <li className="fListItem">Countries</li>
                    <li className="fListItem">Regions</li>
                    <li className="fListItem">Cities</li>
                    <li className="fListItem">Districts</li>
                    <li className="fListItem">Airports</li>
                    <li className="fListItem">Hotels</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">Homes</li>
                    <li className="fListItem">Apartments</li>
                    <li className="fListItem">Resorts</li>
                    <li className="fListItem">Villas</li>
                    <li className="fListItem">Hostels</li>
                    <li className="fListItem">Guest House</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">Unique place to stay</li>
                    <li className="fListItem">All Destinations</li>
                    <li className="fListItem">All Flight Destinations</li>
                    <li className="fListItem">Discover</li>
                    <li className="fListItem">Reviews</li>
                    <li className="fListItem">Travel Communities</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">Car Rental</li>
                    <li className="fListItem">Flight Finder</li>
                    <li className="fListItem">Restaurant reservation</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">Coronavirus (COVID-19) FAQs</li>
                    <li className="fListItem">About VikiBooking.com</li>
                    <li className="fListItem">Customer Service Help</li>
                    <li className="fListItem">Careers</li>
                    <li className="fListItem">Terms & Conditions</li>
                    <li className="fListItem">Privacy & cookie statement</li>
                </ul>
            </div>
            <div className="fText">Copyright @ 2023 VikiBooking.</div>
        </div>
    )
}

export default Footer