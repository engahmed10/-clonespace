import header from './header.css';
import Slogo from './logo.js'
import Hamburger from 'hamburger-react'
import React, { useState } from 'react'
import { BrowserRouter as Link}  from 'react-router-dom' 

const Header = (props) => {

    const [isOpen, setOpen] = useState(false)

    return <div className="header">
             
                      <div className="logo">
                         <Slogo/>
                      </div>
                      <div className="center">
                        <Link to="/" > <p>Falcon9</p></Link>
                        <Link to="/" > <p>Falco Heavy</p></Link>
                        <Link to="/" > <p>Dragon</p></Link>
                        <Link to="/" > <p>Starship</p></Link>
                        <Link to="/" > <p>Human SpaceFlight</p></Link>
                        <Link to="/" > <p>RideShare</p></Link>
                      </div>

                      <div className="right">
                        <p>Shop</p>
                       
                        <div className="menue">
                            <Hamburger style={{width:'5px',heigh:'5px'}} toggled={isOpen} toggle={setOpen} />
                        </div>
                      </div>

           </div>
};
export default Header;