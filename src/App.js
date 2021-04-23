import './App.css';
import Header from './component/header'
import Page from './component/page'
import xspace from './images/xspace.jpg'
import xspace2 from './images/xspace2.jpg'
import xspace3 from './images/xspace3.jpg'
import xspace4 from './images/xspace4.jpg'

function App() {
  return (
    <div className="App">
         <Header/>
         <Page
            backgroundpic={xspace}
            text1={" Upcoming Launch "}
            text2={" Crew-2 Mission "}
            btn={<button type="">Learn More</button>}
         />
          <Page
             backgroundpic={xspace2}
            text1={"STARSHIP TO LAND NASA ASTRONAUTS ON THE MOON"}
            text2={"NASA ASTRONAUTS ON THE MOON"}
             btn={<button type="">Learn More</button>}
         />
          <Page
             backgroundpic={xspace3}
            text1={"RECENT LAUNCH"}
              text2="STARLINK MISSION"
          btn={<button type="">Replay</button>}
         />
          <Page
             backgroundpic={xspace4}
            text="DRAGON DOCKING SIMULATOR"
            text2="Dragon is designed to autonomously dock and 
            undock with the International Space Station. However
            ,the crew can take manual control of the spacecraft if necessary"
          btn={<button type="">Try Now</button>}
         />

    </div>
  );
}

export default App;
