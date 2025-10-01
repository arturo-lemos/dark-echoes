import { episodeList } from "./data.js";
import { useState } from "react";

// I verified that the import was pulling the array and objects from data.js
// console.log(episodeList);

function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  function EpisodeList() {
    return (
      <section className="episodeList">
        <ul>
          {episodeList.map((episode) => {
            return (
              <li onClick={() => setSelectedEpisode(episode)} key={episode.id}>
                {" "}
                {episode.title}{" "}
              </li>
            );
          })}
        </ul>
      </section>
    );
  }

  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section>
          <h2>Episode Details</h2>
          <h2>#</h2>
          <p>Please select episode</p>
        </section>
      );
    }

    return (
      <section className="details">
        <h2> {selectedEpisode.title} </h2>
        <h2> {selectedEpisode.id} </h2>
        <p> {selectedEpisode.description} </p>
      </section>
    );
  }

  return (
    <>
      <header>
        <h1>Episode List</h1>
      </header>
      <main>
        <EpisodeList />
        <EpisodeDetails />
      </main>
    </>
  );
}

// I had to modify the following line by removing the {} and function (). After removing that, my browser showed the Episode List h1 header"
export default App;
// TODO
