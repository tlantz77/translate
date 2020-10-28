import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

const LANG_COLOR_CONFIG = {
    'english': 'blue',
    'dutch': 'red'
}

export class App extends Component {
  state = { language: 'english', color: 'red' };

  onLanguageChange = (language) => {
    this.setState({ 
      language: language,
      color: LANG_COLOR_CONFIG[language]
    });
  }

  render() { 
    return (
      <div className='ui container'>
        <div>
          Select a language: 
          <i className='flag us' onClick={() => this.onLanguageChange('english')}/>
          <i className='flag nl' onClick={() => this.onLanguageChange('dutch')}/>
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value={this.state.color}>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div> 
    );
  }
}
 
export default App;