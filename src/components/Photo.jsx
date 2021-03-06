import React from "react";

export default function Photo({ photo, toggleViewPhoto }) {
  const handleOnClick = () => {
    toggleViewPhoto(photo);
  };

  return (
    <img
      src={photo.urls.small}
      alt={photo.alt_description}
      style={{ width: "100%", display: "block" }}
      onClick={handleOnClick}
    />
  );
}
