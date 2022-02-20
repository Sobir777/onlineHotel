import react from 'react'
import Image from 'next/image'
import cls from './Best.module.scss'
import img from '../../public/Imagea.png'
import imga from '../../public/Imageab.png'
import imgb from '../../public/Imageabv.png'
export default function Best() {

    return (
        <>

            <div className={cls.titleLogo}>
                <h4 className={cls.titleee}>Best Quality Hotels</h4>
                <p className={cls.description}>Lorem Ipsum is simply dummy text of the printing and <br></br> typesetting industry.</p>
                <div className={cls.buttonswithlogo}>
                    <div className={cls.buttons}>
                        <button>1 Star</button>
                        <button>2 Star</button>
                        <button>3 Star</button>
                        <button>4 Star</button>
                        <button>5 Star</button>
                    </div>
                    <div className={cls.view}>
                        <p className={cls.text}>View All</p>
                        <p className={cls.line}></p>
                    </div>
                </div>
            </div>

            <div className={cls.container}>
                <div className={cls.cards}>
                    <div><Image src={imgb} alt="aaa" ></Image></div>
                    <div className={cls.descriptions}>
                        <p className={cls.titleLogoo}>Swimming pool and beach of luxury...</p>
                        <p className={cls.descriptionLogo}>Lorem Ipsum is simply dummy text of the printing <br></br> and typesetting industry.</p>
                        <div className={cls.buttonCost}>
                            <div className={cls.cost}>
                                <span className={cls.forColor}>$250</span><span > /NIGHT</span>
                            </div>
                            <button className={cls.button}>Details</button>
                        </div>
                    </div>
                </div>





                
                <div className={cls.cards}>
                    <div><Image src={imga } alt="aaa" ></Image></div>
                    <div className={cls.descriptions}>
                        <p className={cls.titleLogoo}>Swimming pool and beach of luxury...</p>
                        <p className={cls.descriptionLogo}>Lorem Ipsum is simply dummy text of the printing <br></br> and typesetting industry.</p>
                        <div className={cls.buttonCost}>
                            <div className={cls.cost}>
                                <span className={cls.forColor}>$250</span><span > /NIGHT</span>
                            </div>
                            <button className={cls.button}>Details</button>
                        </div>
                    </div>
                </div>
                <div className={cls.cards}>
                    <div><Image src={img} alt="aaa" ></Image></div>
                    <div className={cls.descriptions}>
                        <p className={cls.titleLogoo}>Swimming pool and beach of luxury...</p>
                        <p className={cls.descriptionLogo}>Lorem Ipsum is simply dummy text of the printing <br></br> and typesetting industry.</p>
                        <div className={cls.buttonCost}>
                            <div className={cls.cost}>
                                <span className={cls.forColor}>$250</span><span > /NIGHT</span>
                            </div>
                            <button className={cls.button}>Details</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}