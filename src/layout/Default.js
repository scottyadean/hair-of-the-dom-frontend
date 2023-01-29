import React, { Fragment } from 'react'

import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';


const Default = (props) => {
    
    const {children} = props;
  
return (
    <Fragment>
    <div className="wrapper">
        <Header />
            {children}
        <div className="push"></div>
    </div>
    <Footer />
    </Fragment>

  )
}

export default Default