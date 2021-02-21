import React from "react";
import Photo from "./Photo";
import "./PhotosList.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function PhotosList({ photos, title }) {
  return (
    <section className="photos-list-section">
      <h2 className="photos-list-sec-title">{title}</h2>
      {photos.length > 0 ? (
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 600: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {photos.map((photo, id) => (
              <Photo key={id} photo={photo} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      ) : null}
    </section>
  );
}
