//added image prop and function to move image to front
function ImageCard({ image }) {
    return (
    
      <div className={`image-card ${image.type}`}>
        <img src={image.url} alt={image.title} width="150" />
        <p>{image.title}</p>
        {/* onClick calls the function passed from App.jsx to move this image to the front */}
      </div>
    );
  }
  
  export default ImageCard; 