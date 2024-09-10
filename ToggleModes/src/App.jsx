import React from 'react'
import Navbar from './Navbar'
import Body from './Body'

function App() {
 
    const [darkMode,setDarkMode]= React.useState(true)

    function toggleDarkMode(){
      setDarkMode(prevMode=>!prevMode)
    }
  return (
    <>
      <Navbar darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
      />
      <Body
              darkMode={darkMode}
      />
    </>
  )
}

export default App
