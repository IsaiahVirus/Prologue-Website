import React from 'react'
import EditorLogin from './EditorLogin'

const Header = ({onLoginClick, onLogoutClick, loggedIn}) => {
  return (
    <div className="box">
    <header >
      <h1>
        UWRF Prologue
      </h1>
      {loggedIn ? (
        <button onClick={onLogoutClick}>Sign Out</button>
      ) : (
        <button onClick={onLoginClick}>Editor Login</button>
      )}
    </header>
  </div>
  )
}

export default Header