import React from "react";
// import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";

export default function Youtube() {
  return (
    <>
      <section className="youtube-main">
        <div className="App">
          <YoutubeEmbed embedId="rokGy0huYEA" />
          <YoutubeEmbed embedId="rokGy0huYEA" />
          <YoutubeEmbed embedId="rokGy0huYEA" />
          <YoutubeEmbed embedId="rokGy0huYEA" />
          <YoutubeEmbed embedId="rokGy0huYEA" />
          <YoutubeEmbed embedId="rokGy0huYEA" />
        </div>
        <button className="global-btn">View All</button>
      </section>
    </>
  );
}
