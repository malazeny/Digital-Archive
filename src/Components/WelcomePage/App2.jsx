import { useState } from "react";
import './App2.css';
import ImageCard from "../ImageCard/ImageCard"; 
import imageData from '../../data/images2.json';

function App(){
  const [images] = useState(imageData);
  const image = images[0]; // choose the single image

  return (
    <div className="single-image">
      <ImageCard image={image} />
      <h1>Kissena Park</h1>
    </div>
  );
}

export default App;
