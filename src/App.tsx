import {TopBar } from "./Components/TopBar";
import { LeftSideBar } from "./Components/LeftSideBar";
import { Posts } from "./Components/Posts";
import { RightSideBar } from "./Components/RightSideBar";
import "./index.css";

export function App() {
  return (
    <div>
      <div>
        <TopBar />
      </div>
{/* marginLeft:"300px",marginRight:"300px */}
      <div style={{display:"flex", marginLeft:"20vw",marginRight:"20vw ",}}>
        <div style={{flex:2, margin:10, border:"2px solid black"}}>
          <LeftSideBar />
        </div>
        
        <div style={{flex:6,margin:10, border:"2px solid black"}}>
          <Posts />
        </div>

        <div style={{flex:2, margin:10 ,border:"2px solid black"}}>
          <RightSideBar />
        </div>
      </div>
      
    </div>
  );
}

export default App;
