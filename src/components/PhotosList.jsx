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
              <Photo key={id} photo={photo} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      ) : null}
    </div>
  );
}
