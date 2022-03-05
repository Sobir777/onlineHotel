import React, { useState } from "react"
import Link from 'next/link'
import { Logotive, Menu } from '../../svg.js'
import cls from "./Burger.module.scss"

const data = [
    { name: "Home ", Link: "/" },
    { name: "Nazmul Nabeel", Link: "/NazmulNabeel" },
    { name: "Facilities " },
    { name: "Location " },
    { name: "Contact " },
];

{/* <Link href="/about"><a className={cls.btn}>о компании</a></Link> */}
export default function MobileNavigation() {
    const [active, setActive] = useState(false);
    return (
        <div className={cls.main}>
            <div className={cls.container}>
                <div className={cls.wrapper}>
                    <Logotive></Logotive>


                    <div>
                        <div className={cls.text}>
                            <a>Booking</a>
                            <a>Facilities</a>
                            <a>About Us</a>
                            <a>Location</a>
                            <a>Contact</a>
                        </div>
                        <div className={cls.burger} onClick={() => setActive(!active)}>
                            <div className={cls.burber} >
                                <div className={active ? cls.activeHamburger : cls.hamburger}>

                                </div>
                            </div>
                        </div>
                        <button>Sign In</button>
                    </div>

                </div>
            </div>


            <div className={active ? cls.activeSidenav : cls.sidenav}>
                {/* <ul className={cls.ul}>
                    {data.map((item, i) =>
                        <li className={cls.li} key={i}>
                            <a href="#" > {item.name} </a>

                        </li>)}
                </ul> */}
                <ul className={cls.ul}>
                    <li className={cls.li}> 
                    <div ><Link href="/"><a className={cls.home} >Home</a></Link></div>
                    <div><Link href="/FinestLuxury"><a >FinestLuxury</a></Link></div>
                    <div><Link href="/Subscribe"><a > Subscribe</a></Link></div>
                    <div><Link href="/Nazamul"><a >Nazamul</a></Link></div>
                    <div><Link href="/Cards"><a >Cards</a></Link></div>
                    <div><Link href="/Best"><a >Best</a></Link></div>
                    <div><Link href="/First"><a >First</a></Link></div>

                    </li>
                </ul>
            </div>




        </div>
    )
}







{/* <div className={cls.logotive}>
<Logotive></Logotive>
<p>Hotelo</p>
</div>
<div className={cls.navigation}>
<div className={cls.text}>
    <a>Booking</a>
    <a>Facilities</a>
    <a>About Us</a>
    <a>Location</a>
    <a>Contact</a>
</div>
<Menu className={cls.loggo}></Menu> 
<div className={cls.burgerbottom}>
    <div className={cls.container}>

        <div className={cls.wrapper}>

        </div>
        <div onClick={() => setActive(!active)} className={cls.burber} >
            <div className={active ? cls.activeHamburger : cls.hamburger}>

            </div>
        </div>

    </div>
    <div className={active ? cls.activeSidenav : cls.sidenav}>
        <ul className={cls.ul}>
            {data.map((item, i) =>
                <li className={cls.li} key={i}>
                    <a href="#" > {item.name} </a>
                </li>)}
        </ul>
    </div>
</div >
<button>Sign In</button>
</div>

 */}








//  <div className={cls.logotive}>
//  <Logotive></Logotive>
//  <p>Hotelo</p>
// </div>
// <div className={cls.navigation}>
//  <div className={cls.text}>
//      <a>Booking</a>
//      <a>Facilities</a>
//      <a>About Us</a>
//      <a>Location</a>
//      <a>Contact</a>
//  </div>
//  {/* <Menu className={cls.loggo}></Menu> */}
//  <div className={cls.burgerbottom}>
//      <div className={cls.container}>

//          <div className={cls.wrapper}>

//          </div>
//          <div onClick={() => setActive(!active)} className={cls.burber} >
//              <div className={active ? cls.activeHamburger : cls.hamburger}>

//              </div>
//          </div>

//      </div>
//      <div className={active ? cls.activeSidenav : cls.sidenav}>
//          <ul className={cls.ul}>
//              {data.map((item, i) =>
//                  <li className={cls.li} key={i}>
//                      <a href="#" > {item.name} </a>
//                  </li>)}
//          </ul>
//      </div>
//  </div >
//  <button>Sign In</button>
// </div>