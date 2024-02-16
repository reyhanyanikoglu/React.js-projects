function ImageItem({ image }) {
  console.log(image);
  return (
    <div>
      <img
        className="imageItem"
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}

export default ImageItem;
