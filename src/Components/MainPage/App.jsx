import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "/src/Components/MainPage/App.css";
import ImageCard from "../ImageCard/ImageCard"; 
import imageData from "../../data/images.json";
import gifData from "../../data/gif.json"; // <-- import gif separately
import Welcome from '../WelcomePage/App2.jsx';
import Nav from '../Nav/Nav.jsx'; 

function Home({ images, gif }) {
  const [imageCount, setImageCount] = useState(images.length);

  return (
    <>
      <div className="controls">
        <label>Number of images: {imageCount}</label>
        <input 
          type="range" 
          min="1" 
          max={images.length} 
          value={imageCount} 
          onChange={(e) => setImageCount(Number(e.target.value))}
        />
      </div>

      <div className="gallery">
        {images.slice(0, imageCount).map((img) => (
          <ImageCard key={img.id} image={img} />
        ))}
      </div>

      <div className="gif-container">
        {gif.length > 0 && <ImageCard image={gif[0]} />}
      </div>
    </>
  );
}

function App() {
  const [images] = useState(imageData);
  const [gif] = useState(gifData);

  return (
    <Router>
      <Nav /> 
      <Routes>
        <Route 
          path="/" 
          element={<Home images={images} gif={gif} />} 
        />
        <Route path="/main" element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;
