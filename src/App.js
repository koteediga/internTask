import { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ThemeContext from './Context/ThemeContext' // Import ThemeContext
import Home from './Home'
import UserDetails from './UserDetails'
import NotFound from './NotFound'
import './App.css'

class App extends Component {
  state = {
    darkMode: false, // Default theme is light
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      darkMode: !prevState.darkMode,
    }))
  }

  render() {
    const { darkMode } = this.state
    return (
      <ThemeContext.Provider
        value={{
          darkMode,          // Provide current theme
          toggleTheme: this.toggleTheme,  // Provide toggle function
        }}
      >
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/user/:id" component={UserDetails} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </ThemeContext.Provider>
    )
  }
}

export default App
