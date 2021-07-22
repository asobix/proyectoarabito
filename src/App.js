
import './App.css';
import ImageSlider from './components/ImageSlider';
import Navbar from './components/Navbar';
import { SliderData } from './components/SliderData';
import TextConstruction from './components/TextConstruction';
import Card from '@material-ui/core/Card';
import Toolbar from '@material-ui/core/Toolbar';
function App() {
  return (
    <div>
  <Navbar/>
  <Card  elevation={20} style={{margin:10}}>             
  <ImageSlider slides={SliderData}/>
  <Card elevation={24} style={{
        margin: "-230px 350px",
        position: "relative",
        height: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom:50,
        backgroundColor:"#ffdede"
        
  }}>
  <TextConstruction/>
  </Card>
  </Card>
  
  </div>
  );
    
}

export default App;
