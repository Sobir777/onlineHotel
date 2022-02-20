import react from 'react'
import cls from './Carsd.module.scss'
import { One, Onee, Oneee, Oneeee } from '../svg.js'

export default function Cards(props) {
    
    return (    
        <>

            <div className={cls.container}>
                <div className={cls.logoName}>
                    <p className={cls.logoo}>Facilities &#x26; Service</p>
                </div>
                <div className={cls.logoDescription}>

                    <p className={cls.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                    <div>
                        <p className={cls.logo}>View All</p>
                        <p className={cls.slide}></p>
                    </div>
                </div>
            </div>
            <div className={cls.cardsContainer}>

                <div className={cls.cardsOne}>
                    <div className={cls.card}>
                        <div className={cls.logo}>
                            <One></One>
                        </div>
                        <div className={cls.description}>
                            <p className={cls.descriptionLogo}>Private Workspace</p>
                            <p className={cls.descriptionLogoo} >Lorem Ipsum is simply dummy text <br></br> of the printing and typesetting <br></br> industry. Lorem Ipsum has</p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <div className={cls.logo}>
                            <Onee></Onee>
                        </div>
                        <div className={cls.description}>
                            <p className={cls.descriptionLogo}>Parking Area</p>
                            <p className={cls.descriptionLogoo} >Lorem Ipsum is simply dummy text <br></br> of the printing and typesetting <br></br> industry. Lorem Ipsum has</p>
                        </div>
                    </div>
                </div>
                
                <div className={cls.cardsTwo}>
                    <div className={cls.card}>
                        <div className={cls.logo}>
                            <Oneee></Oneee>
                        </div>
                        <div className={cls.description}>
                            <p className={cls.descriptionLogo}>Free Wifi</p>
                            <p className={cls.descriptionLogoo} >Lorem Ipsum is simply dummy text <br></br> of the printing and typesetting <br></br> industry. Lorem Ipsum has</p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <div className={cls.logo}>
                            <Oneeee></Oneeee>
                        </div>
                        <div className={cls.description}>
                            <p className={cls.descriptionLogo}>Breakfast</p>
                            <p className={cls.descriptionLogoo} >Lorem Ipsum is simply dummy text <br></br> of the printing and typesetting <br></br> industry. Lorem Ipsum has</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

{/* <Onee></Onee> */ }
{/* <Oneee></Oneee> */ }
{/* <Oneeee></Oneeee> */ }