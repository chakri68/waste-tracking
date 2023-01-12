import React, { useState, useEffect } from "react";

import { Galleria } from "primereact/galleria";

const Gallery = () => {
  const [images, setImages] = useState(["g-1.webp", "g-2.webp"]);
  const galleriaService = new PhotoService();

  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 5,
    },
    {
      breakpoint: "768px",
      numVisible: 3,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
    },
  ];

  //   useEffect(() => {
  //     galleriaService.getImages().then((data) => setImages(data));
  //   }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const itemTemplate = (item) => {
    return (
      <img
        src={item}
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        alt={item.alt}
        style={{ width: "100%", display: "block" }}
      />
    );
  };

  const thumbnailTemplate = (item) => {
    return (
      <img
        src={item.thumbnailImageSrc}
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        alt={item.alt}
        style={{ display: "block" }}
      />
    );
  };

  return (
    <div>
      <div className="card">
        <Galleria
          value={images}
          responsiveOptions={responsiveOptions}
          numVisible={5}
          style={{ maxWidth: "640px" }}
          item={itemTemplate}
          //   thumbnail={thumbnailTemplate}
          circular
          autoPlay
          transitionInterval={2000}
        />
      </div>
    </div>
  );
};
export default Gallery;
