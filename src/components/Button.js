import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';

class Button extends Component {
  static contextType = LanguageContext;

  render() { 
    console.log(this.context);
    return <button className='ui button primary'>Submit</button>
  }
}
 
export default Button;