import { episodeList } from "./data.js";
import { useState } from "react";

// I verified that the import was pulling the array and objects from data.js
// console.log(episodeList);

function App() {
  const [episodes] = useState(episodeList);

  function EpisodeList() {
    return <section className="episodeList"></section>;
  }

  return (
    <>
      <header>
        <h1>Episode List</h1>
      </header>
      <main></main>
    </>
  );
}

// I had to modify the following line by removing the {} and function (). After removing that, my browser showed the Episode List h1 header"
export default App;
// TODO
