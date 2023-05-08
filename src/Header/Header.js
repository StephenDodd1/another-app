import {useState} from 'react'

const Header = () => {
    const [darkTheme, setTheme] = useState(false)
    return(
        <header className={!darkTheme ? 'bg-gray': 'bg-white'}>
        <div className='bold h1 p1 white hidden'>===</div>
        <div>
        </div>
        <div id='header-container'>
          <div id='top' className='bold h1 skyblue p1'>Your favorite exercise app!</div>
        </div>
        <div id = 'settings-container'>
          <div id='login-btn'></div>
          <div id='slider-box' onClick={() => setTheme(!darkTheme)}>
            <div id='slider-light' className={!darkTheme ? 'hidden': 'bg-white'}></div>
            <div id='slider-dark' className={darkTheme ? 'hidden': 'bg-gray'}></div>
          </div>
        </div>
      </header>
    )
}

export default Header;