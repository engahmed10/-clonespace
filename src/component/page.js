import React from 'react';
import header from './header.css';
import xspace from '../images/xspace.jpg'
import page from './page.css'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(3),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
    
  },
  outlined:{
  },
}));


const Page = ({backgroundpic,text1,text2,text3,text4,btn, lastpage}) => {
   const classes = useStyles();
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

                  <div className="text2">
                      {text2}
                  </div>
                    <div className="text2">
                      {text3}
                  </div>
                    <div className="text2">
                      {text4}
                  </div>

                  {!lastpage && <div className="button">
                    {btn}
                  </div>}

                  { lastpage &&
                  <div> 
                        <div> DRAGON DOCKING SIMULATOR </div>
                        <div>Dragon is designed to autonomously dock and 
                              undock with the International Space Station. However
                            ,the crew can take manual control of the spacecraft if necessary
                        </div>
                        <div>Try Now</div>
                  </div>
                  }
                  
              </div>
          </div>  
              
        </div>
    );
};

export default Page;