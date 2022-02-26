import React from 'react'
// import Link from 'next/link'
import Image from 'next/image'
import img from "../../public/Imageeaa.png";
import imgTwo from "../../public/Imageeaaa.png";
import imgThreee from "../../public/Image.png";
import cls from './First.module.scss'
import { Search } from '../svg'
    

export default function Header() {

    return (
        <>
            <div className={cls.container}>
                <div className={cls.firstHeder}>
                    <div className={cls.left}>
                        <h1>Find Your Best Hotel <br></br> for Deals</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing <br></br> and typesetting industry.</p>
                    </div>
                    <div className={cls.right}>
                        <div className={cls.input}>
                            <input type={'date'}></input>
                            <input placeholder='2 Guests' ></input>

                        </div>
                        <div className={cls.inputTwo}>
                            <input placeholder=' United States'></input>
                            <div>
                                <Search></Search>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cls.imgs}>
                    <div className={cls.imgg}>
                        <Image src={imgThreee} alt="aaa" ></Image>
                        <p>Wagstaffe NSW, Australia</p>
                    </div>
                    <div className={cls.imggSecond}>
                        <div><Image src={img} alt="aaaashu"  ></Image></div>
                        <div><Image src={imgTwo} alt="aaaashu" ></Image></div>
                        
                    </div>
                </div>
            </div>

        </>
    )

}
