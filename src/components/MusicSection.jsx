import Card from "./Card";

function MusicSection() {

  const musics = [

    {
      title: "Night Vibes",
      category: "Electronic"
    },

    {
      title: "Red Lights",
      category: "Synthwave"
    },

    {
      title: "Deep Focus",
      category: "Chill"
    },

    {
      title: "Dark Energy",
      category: "Rock"
    }

  ];

  return (

    <section className="music-section">

      <div className="section-title">

        <h2>Trending Music</h2>

        <p>Las mejores playlists del momento</p>

      </div>

      <div className="cards-container">

        {musics.map((music, index) => (

          <Card
            key={index}
            title={music.title}
            category={music.category}
          />

        ))}

      </div>

    </section>

  );
}

export default MusicSection;