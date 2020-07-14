import React from "react";
import Photo from "./Photo";
import "./PhotosList.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function PhotosList({ photos }) {
  return (
    <div className="photos">
      {photos.length > 0 ? (
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 600: 2, 900: 3 }}>
          <Masonry gutter="10px">
            {photos.map((photo, id) => (
              <img
                key={id}
                src={photo.urls.small}
                alt={photo.alt_description}
                style={{ width: "100%", display: "block" }}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      ) : (
        <h2>Search for something to see the photos!</h2>
      )}
    </div>
  );
}
