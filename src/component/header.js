import header from './header.css';
import Slogo from './logo.js'
import Hamburger from 'hamburger-react'
import React, { useState } from 'react'


const Header = (props) => {

    const [isOpen, setOpen] = useState(false)

    return <div className="header">
             
                      <div className="logo" style={{'color':'white'}}>
                         <Slogo/>
                      </div>

                      <div className="center">
                        <p>Falco9</p>
                        <p>Falco Heavy</p>
                        <p>Dragon</p>
                        <p>Starship</p>
                        <p>Human SpaceFlight</p>
                        <p>RideShare</p>
                      </div>

                      <div className="right">
                        <p>Shop</p>
                         <Hamburger toggled={isOpen} toggle={setOpen} />
                      </div>

           </div>
};
export default Header;