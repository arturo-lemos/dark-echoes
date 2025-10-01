import { episodeList } from "./data.js";
import { useState } from "react";

// I verified that the import was pulling the array and objects from data.js
// console.log(episodeList);

function App() {
  const [recipeList] = useState(episodeList);

  return (
    <>
      <header>
        <h1>Episode List</h1>
      </header>
      <main></main>
    </>
  );
}

export default function App() {
  // TODO
}
