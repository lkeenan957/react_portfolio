import React, { Component } from 'react';
import './Services.css'

class Services extends Component {
  render(){
    return (
      <div className="services">
        <h3>Services</h3>
        <h2>What we offer</h2>
        
        <div className="row">
          <Icons myIcons={iconObj[0].icon} myTitle= {iconObj[0].title} myDescription= {iconObj[0].description}/>
          
          <Icons myIcons={iconObj[1].icon} myTitle= {iconObj[1].title} myDescription= {iconObj[1].description}/>
      
          <Icons myIcons={iconObj[2].icon} myTitle= {iconObj[2].title} myDescription= {iconObj[2].description}/>
        </div>
      </div>
    );
  }
}

const iconObj = [
  {
    icon: <ion-icon name="mail"></ion-icon>,
    title: 'Email',
    description: 'lkeenan@skeenan.net'
  },
  {
    icon: <ion-icon name="call"></ion-icon>,
    title: 'Phone',
    description: '925 822-5460'
  },
  {
    icon: <ion-icon name="logo-linkedin"></ion-icon>,
    title: 'LinkedIn',
    description: 'https://www.linkedin.com/in/lkeenan957/'
  },
  {
    icon: '<ion-icon name="logo-github"></ion-icon>',
    title: 'Github',
    description: '/lkeenan957'
  }
];

class Icons extends Component {
  render(){
    return (
      <div>
        <span>
          {this.props.myIcons}
        </span>
        <h4>{this.props.myTitle}</h4>
        <p>{this.props.myDescription}</p>
      </div>
    )
  }
}


export default Services;
























