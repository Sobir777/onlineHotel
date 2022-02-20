import React from 'react'
import cls from './Footer.module.scss';
import { Instagram, Google, Logotip, FaceBook } from '../svg';


export default function Footer() {

    return (

        <>
            <div className={cls.container}>
                <div className={cls.first}>
                    <Logotip></Logotip>
                    <p>Lorem Ipsum is simply dummy text <br></br> of the printing and typesetting <br></br> industry.</p>
                    <div className={cls.logoSvg}>
                        <Google></Google>
                        <Instagram></Instagram>
                        <FaceBook></FaceBook>
                    </div>
                </div>
                <div className={cls.second}>
                    <h5>Home</h5>
                    <p>Booking</p>
                    <p>Facilities</p>
                    <p>Location</p>
                    <p>Contact</p>
                </div>
                <div className={cls.second}>
                    <h5>Help</h5>
                    <p>About Us</p>
                    <p>Help center</p>
                    <p>Privacy policy</p>
                    <p>FAQs</p>
                </div>
                <div className={cls.threeth}>
                    <h5>Get the app</h5>
                    <p>iOS app</p>
                    <p>Android app</p>
                </div>

            </div>

        </>
    )

}

