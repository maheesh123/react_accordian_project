 
import Accordian from './Accordian';
import { accordionData } from './utils/Content';
import './App.css';
import './index.css'

function App() {
  return (
     <div>
      <div className='accordion'>
        {
          accordionData.map(({title,content})=>{
           return <Accordian title={title} content={content} key={Math.random()*100}/>
          })
        }
      </div>

     </div>
  );
}

export default App;
