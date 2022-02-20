import react from 'react'
import Image from 'next/image'
import img from '../../public/manPhoto.png'
import cls from './Subscribe.module.scss'

export default function Subscribe () {

    return (
        <>

            <div className={cls.container}>
                <div className={cls.titlee}>
                    <h1 className={cls.logo}>Subscribe for our mailing list to get <br></br> latest updates and offers</h1>
                    <p className={cls.description}>Lorem Ipsum is simply dummy text of the printing and typesetting <br></br> industry. Lorem Ipsum has been the industrys </p>
                    <div className={cls.login}>
                        <input className={cls.input} placeholder="Enter your email"></input>
                        <button className={cls.button}>Subscribe</button>
                    </div>
                </div>
                <div>
                    <Image src={img} alt="aaa" ></Image>
                </div>


            </div>
        </>
    )

}