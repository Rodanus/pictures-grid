import React from "react";

export default function Photo({ photo }) {
  return <img src={photo.urls.small} alt={photo.alt_description} />;
}
