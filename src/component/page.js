import React from 'react';
import header from './header.css';
import xspace from '../images/xspace.jpg'
import page from './page.css'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';




const Page = ({backgroundpic,text1,text2,text3,text4,btn, lastpage,second}) => {

    return (
         <div  className="image" style={{width:'100vw',height:'100vh', 
               backgroundImage:`url(${backgroundpic})`,  
                      backgroundPosition: 'center',
                       backgroundSize: 'cover',
                       backgroundRepeat: 'no-repeat',
                      
                  }}>
            
          <div className="body-container">
              <div className="text">
                  <div className="text1">
                      {text1}
                  </div>

                  <div  style={ second? {'text-align': 'justify'}:{}} className="text2">
                      {text2}
                  </div>
                    <div className="text3">
                      {text3}
                  </div>
                    <div className="text4">
                      {text4}
                  </div>

                  {!lastpage &&  <div style={second? {  width:'100px',height:'30px','padding-top': '13px','font-size':'15px'} : {}}  className="button">
                    {btn}
                  </div>}

                  { lastpage &&
                  <div className="last"> 
                        <div  className="one"> DRAGON DOCKING SIMULATOR </div>
                        <div className="two" >
                             <p> Dragon is designed to autonomously dock and 
                              undock with the International Space Station. However
                            ,the crew can take manual control of the spacecraft if necessary</p>
                        </div>
                        <div className="last-btn">Try Now</div>
                  </div>
                  }
                  
              </div>
          </div>  
              
        </div>
    );
};

export default Page;