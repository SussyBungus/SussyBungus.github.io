import React, { useState, useEffect } from "react";
import "../../styles/comps/gallery/gallery.css";

const initialImages = [
  { id: 1, src: "https://picsum.photos/600/400?random=1", title: "Sunset Glow", description: "A beautiful sunset by the beach.", location: "Malibu", camera: "Canon EOS R5", category: "Nature" },
  { id: 2, src: "https://picsum.photos/600/400?random=2", title: "Mountain Peak", description: "Snow-covered mountain peak in winter.", location: "Swiss Alps", camera: "Nikon D850", category: "Nature" },
  { id: 3, src: "https://picsum.photos/600/400?random=3", title: "Forest Trail", description: "Peaceful trail surrounded by forest.", location: "Yosemite", camera: "Sony A7III", category: "Nature" },
  { id: 4, src: "https://picsum.photos/600/400?random=4", title: "City Lights", description: "Night view of the vibrant city lights.", location: "Tokyo", camera: "Fujifilm X-T4", category: "City" },
  { id: 5, src: "https://picsum.photos/600/400?random=5", title: "Desert Dunes", description: "Golden sand dunes under the sun.", location: "Sahara", camera: "Canon 5D Mark IV", category: "Travel" },
  { id: 6, src: "https://picsum.photos/600/400?random=6", title: "Ocean Waves", description: "Rolling waves hitting the shore.", location: "Bali", camera: "GoPro Hero 11", category: "Travel" },
];

const categories = ["All", "Nature", "City", "Travel"];

const Gallery = () => {
  const [images, setImages] = useState(initialImages);
  const [popupImage, setPopupImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  // Infinite scroll: load more images when near bottom
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        const nextId = images.length + 1;
        const categoriesPool = ["Nature", "City", "Travel"];
        const moreImages = Array.from({ length: 6 }, (_, i) => ({
          id: nextId + i,
          src: `https://picsum.photos/600/400?random=${nextId + i}`,
          title: `Image ${nextId + i}`,
          description: `Description for image ${nextId + i}`,
          location: "Unknown",
          camera: "Unknown",
          category: categoriesPool[(nextId + i) % categoriesPool.length],
        }));
        setImages(prev => [...prev, ...moreImages]);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [images]);

  // Filter images
  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter(img => img.category === activeCategory);

  return (
    <div className="gallery-container">
      <div className="gallery-description">
        <h1>My Photo Gallery</h1>
        <p>These photos are not mine but the public, these are for test purposes.</p>
      </div>

      {/* Category filters */}
      <div className="gallery-filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery grid */}
      <div className="gallery-grid">
        {filteredImages.map(img => (
          <div key={img.id} className="gallery-item" onClick={() => setPopupImage(img)}>
            <img src={img.src} alt={img.title} />
            <div className="gallery-overlay">
              <h3>{img.title}</h3>
              <p>{img.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Popup modal */}
      {popupImage && (
        <div className="popup-overlay" onClick={() => setPopupImage(null)}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <div className="popup-left">
              <img src={popupImage.src} alt={popupImage.title} />
            </div>
            <div className="popup-right">
              <h2>{popupImage.title}</h2>
              <p>{popupImage.description}</p>
              <p><strong>Location:</strong> {popupImage.location}</p>
              <p><strong>Camera:</strong> {popupImage.camera}</p>
              <p><strong>Category:</strong> {popupImage.category}</p>
              <button onClick={() => setPopupImage(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
