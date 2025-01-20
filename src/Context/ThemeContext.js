import React from 'react'

const ThemeContext = React.createContext({
  darkMode: false,
  toggleTheme: () => {},
})

export default ThemeContext
