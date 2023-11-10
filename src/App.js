import React, {Component} from 'react';
import FileCards from './components/FileCards'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import Result from './components/Result'
import logo from './StarkNet_Icon.png';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
})

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {data: 0}
    console.log(this.state)
  }

  handleInputChange(data) {
    this.setState({data})
    console.log(this.state.data)
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">MNIST Digit Recognition</h1>
          </header>
          <FileCards data={this.state.data} onCHange={this.handleInputChange}/>
          <Result data={this.state.data}/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
