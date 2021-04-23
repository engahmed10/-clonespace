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
            btn="Learn More"
         />
          <Page
              backgroundpic={xspace2}
             text1=""
             text2=" Starship To Land "
             text3="Nasa Astronauts On "
             text4="The Moon"
             btn="Learn More"
         />
          <Page
             backgroundpic={xspace3}
            text1={"RECENT LAUNCH"}
              text2="STARLINK MISSION"
              btn="Replay"
         />
          <Page
             backgroundpic={xspace4}
             lastpage
          
         />

    </div>
  );
}

export default App;
