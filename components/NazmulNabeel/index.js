import react from 'react'
import Image from 'next/image'
import imgLogo from '../../public/Rectangleqqqa.png'
import img from '../../public/Imageqq.png'
import cls from './Nazmul.module.scss'
import { Hayyat, Cushman, Park, Hilton, Hotels } from '../svg.js'

export default function FinestLuxury() {

    return (
        <>

              <div className={cls.title}>
                <Hotels></Hotels>
                <Hayyat></Hayyat>
                <Park></Park>
                <Cushman></Cushman>
                <Hilton></Hilton>
            </div>

            <div className={cls.container}>
                <div className={cls.img}>
                    <Image className={cls.imgimg} src={img} alt="aaa"  ></Image>
                </div>
                <div className={cls.description}>
                    <div className={cls.titlee}>
                        <div>
                            <Image src={imgLogo} alt="aaa" ></Image>
                        </div>
                        <div>
                            <p className={cls.titleLogo}>Nazmul Nabeel</p>
                        </div>
                    </div>
                    <p className={cls.descriptionn}>“Lorem Ipsum is simply dummy text of <br></br> the printing and typesetting industry.  <br></br> Lorem Ipsum has been the industrys   <br></br> standard dummy text ever since the ”</p>
                </div>


            </div>

        </>
    )

}