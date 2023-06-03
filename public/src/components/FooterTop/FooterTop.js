import React from 'react'
import './FooterTop.scss'

function Footer() {

    const contactUs = {
        Header: "Contact",
        links: [

            "+977-9851027016",
            "+977-9851332735",
            "+977-01-5917016",
            "nepaleseclothing@outlook.com",
            "nepaleseclothing98@gmail.com",
        ]
    }

    return (
        <footer >
            <ul>
                <li className="left-footer">
                    <h1 className="logo"><a href="#">Nepalese Clothing</a></h1>
                    <h1 className="location">Thamel, Kathmandu, Nepal</h1>
                </li>
                <li>
                    <h1>Company</h1>
                    <ul>
                        <li><a href="#" className="footer-link">About Us</a></li>
                    </ul>
                </li>
                <li>
                    <h1>Customer Service</h1>
                    <ul>
                        <li><a href="#" className="footer-link">Contact Us</a></li>
                    </ul>
                </li>
                <li>
                    <h1>{contactUs.Header}</h1>
                    <ul>
                        {contactUs.links.map((link, index) => (
                            <li key={index} className="footer-link">{link}</li>
                        ))}
                    </ul>
                </li>
            </ul>
        </footer>


    )
}

export default Footer