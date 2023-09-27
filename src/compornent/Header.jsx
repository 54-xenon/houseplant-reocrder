import React from 'react'
import './CSS_component/Header.css'
// CSSファイルをインポートする
const Header = () => {
  return (
    <div>
      <section>
        {/* ヘッダーのせセクションです */}
        <header className='header01'>
          <h1 className='header01-logo'>PlantRecode</h1>
          <nav className='header01-nav'>
            <ul className='header01-list'>
              <li className='header01-item'><a href="#">Home</a></li>
              <li className='header01-item'><a href="#">Account</a></li>
            </ul>
          </nav>
        </header>
      </section>
    </div>
  )
}

export default Header
