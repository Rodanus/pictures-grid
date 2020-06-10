import React from "react";
import Photo from "./Photo";

export default function PhotosList({ photos }) {
  return (
    <div className="photos">
      {photos.length > 0 ? (
        photos.map(photo => <Photo key={photo.id} photo={photo} />)
      ) : (
        <h2>Search for something to see the photos!</h2>
      )}
    </div>
  );
}
