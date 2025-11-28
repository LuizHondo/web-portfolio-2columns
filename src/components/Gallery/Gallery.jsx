import "./Gallery.css";

function Gallery({ items = [] }) {
  if (!items.length) {
    return null;
  }

  return (
    <section className="gallery">
      <h2 className="gallery__title">Gallery</h2>
      <div className="gallery__grid">
        {items.map((item, index) => (
          <figure className="gallery__card" key={index}>
            <img
              className="gallery__image"
              src={item.url}
              alt={item.title ? item.title : `Gallery item ${index + 1}`}
            />
            {item.title && (
              <figcaption className="gallery__caption">{item.title}</figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
