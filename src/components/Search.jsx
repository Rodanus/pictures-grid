import React, { useState } from "react";

export default function Search() {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      value={value}
      placeholder="Search"
      onChange={e => setValue(e.target.value)}
    />
  );
}
