
import './App.css';
import ImageSlider from './components/ImageSlider';
import Navbar from './components/Navbar';
import { SliderData } from './components/SliderData';


function App() {
  return (
    <div>
  <Navbar/>
  <ImageSlider slides={SliderData}/>
  </div>
  );
    
}

export default App;
