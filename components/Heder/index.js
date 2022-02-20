import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'  
// import img from "../../public/qq.png";
import cls from './Heder.module.scss'
import { Logotive, Menu } from '../svg'


export default function Header() {

    return (
        <>
            <div className={cls.container}>
                <div className={cls.logotive}>
                    <Logotive></Logotive>
                    <p>Hotelo</p>
                </div>
                <div className={cls.navigation}>
                    <div>
                        <a>Booking</a>
                        <a>Facilities</a>
                        <a>About Us</a>
                        <a>Location</a>
                        <a>Contact</a>
                    </div>
                    <Menu ></Menu>
                    <button>Sign In</button>
                </div>
            </div>

        </>
    )

}
