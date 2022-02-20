import react from 'react'
import Image from 'next/image'
import cls from './FinestLuxury.module.scss'
import imgg from '../../public/Imageee.png'
import { Hayyat, Cushman, Cuushman, Hilton,Hotels } from '../svg.js'

export default function FinestLuxury() {

    return (
        <>

            <div className={cls.container}>
                <div>
                    <Image src={imgg}  ></Image>
                </div>

                <div className={cls.logo}>
                    <h3 className={cls.logoTitle}>Finest Luxury Hotels <br></br> &#x26; Resort</h3>
                    <p className={cls.logoDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div>
                        <div>
                            <p className={cls.titleDescription}>120K+</p>
                            <p className={cls.descriptionlogo}>Website User</p>
                        </div>
                        <div>
                            <p className={cls.titleDescription}>110K+</p>
                            <p className={cls.descriptionlogo}>Happy Clients</p>
                        </div>
                        <div>
                            <p className={cls.titleDescription}>20K+</p>
                            <p className={cls.descriptionlogo}>Active Hotels</p>
                        </div>
                        <div>
                            <p className={cls.titleDescription}>8Y+</p>
                            <p className={cls.descriptionlogo}>company Year</p>
                        </div>

                    </div>
                    <button className={cls.button}>Explore More</button>
                </div>
            </div>

        </>
    )

}