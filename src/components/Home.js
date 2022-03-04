import React from 'react'
import './home.css'
import logo from './img/logo.png'
function Home() {
    return (
        <div className='home'>
            <div className='hm__bg'>
                <div className='header d__flex  align__items__center pxy__30'>
                    <div className='logo'>
                        <img src={logo} alt='' />
                    </div>
                    <div className='navigation pxy__30'>
                        <ul className='navbar d__flex'>
                            <a href="#Home"><li className='nav__items mx__15'>Home</li></a>
                            <a href="#About"><li className='nav__items mx__15'>About</li></a>
                            <a href="#Notes"><li className='nav__items mx__15'>Notes</li></a>
                            <a href="#Projects"><li className='nav__items mx__15'>Projects</li></a>
                            <a href="#Contact"><li className='nav__items mx__15'>Contact</li></a>
                        </ul>
                    </div>
                </div>
                <div className='container'>
                    <div className='home__content'>
                        <div className='home__meta'>
                            <h1 className='home__text pz__10'>
                                Welcome To my WOrld!!!
                            </h1>
                            <h2 className='home__text pz__10'>
                                Hi, I'm Mohibul Alam
                            </h2>
                            <h3 className='home__text sweet pz__10'>
                                Devolopper
                            </h3>
                            <h4 className='home__text  pz__10'>
                                BD based
                            </h4>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home