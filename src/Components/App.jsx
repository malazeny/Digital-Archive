import { useState } from "react";
import "/src/components/App.css";
import ImageCard from "./ImageCard/ImageCard"; 
import imageData from "../data/images.json";

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function App() {
  const [images] = useState(() => shuffleArray(imageData));
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [subFilter, setSubFilter] = useState("All");

  const filteredImages = images.filter((img) => {
    const locationMatch =
      selectedLocation === "All" || img.location === selectedLocation;

    const subFilterMatch =
      selectedLocation !== "Paris" || subFilter === "All"
        ? true
        : img.time === subFilter; 

    return locationMatch && subFilterMatch;
  });

  return (
    <>
      <h1>My Vacation Camera Roll</h1>

      <div className="filter-buttons">
        <button onClick={() => setSelectedLocation("All")}>All</button>
        <button onClick={() => setSelectedLocation("Kenya")}>Kenya</button>
        <button onClick={() => setSelectedLocation("Cancun")}>Cancun</button>
        <button onClick={() => setSelectedLocation("Paris")}>Paris</button>
      </div>

      {selectedLocation === "Paris" && (
        <div className="filter-buttons sub-filters">
          <button onClick={() => setSubFilter("Day")}>Day</button>
          <button onClick={() => setSubFilter("Night")}>Night</button>
          <button onClick={() => setSubFilter("All")}>All</button>
        </div>
      )}

      <div className="gallery">
        {filteredImages.map((img) => (
          <ImageCard key={img.id} image={img} />
        ))}
      </div>
    </>
  );
}

export default App;
