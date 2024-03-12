import React from 'react';
import { FaHome, FaList, FaCog } from 'react-icons/fa';
import { MdAccountBalance } from "react-icons/md";

function Footer() {
    return (
        <div className="footer-container justify-content-space d-flex p-3">
            <div className="footer-item text-center">
                <FaHome />
                <p className="m-0 ft-12">Home</p>
            </div>
            <div className="footer-item text-center">
                <MdAccountBalance />
                <p className="m-0 ft-12">Account</p>
            </div>
            <div className="footer-item text-center">
                <FaList />
                <p className="m-0 ft-12">Category</p>
            </div>
            <div className="footer-item text-center">
                <FaCog />
                <p className="m-0 ft-12">Settings</p>
            </div>
        </div>
    );
}

export default Footer;
