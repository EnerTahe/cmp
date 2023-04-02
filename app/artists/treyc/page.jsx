
import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import Blog from "@/components/Blog";

const AboutPage = () => {
  const artistName = "TreyC"

  const songData = [
    {
      id: 1,
      title: "High",
      image: "/images/covers/highcover.png",
      tags: ["normi cover img vaja - see tag btw"], 
      ytlink: "https://www.youtube.com/watch?v=EtJMBTe4N-o&ab_channel=BLSPlug",
      spotifylink: "https://open.spotify.com/album/00pT3c2lDP9vyZe3ZHKTyX?go=1&sp_cid=9fba86bdf0c4ca3361e974f5c8e805eb&utm_source=embed_player_p&utm_medium=desktop&nd=1",
    },
    {
      id: 2,
      title: "Legacy",
      image: "/images/covers/legacycover.png",
      tags: ["normi cover img vaja - see tag btw"], 
      ytlink: "https://www.youtube.com/watch?v=zs1D1Kj9abg&ab_channel=BLSPlug",
      spotifylink: "https://open.spotify.com/track/4zmJIr2W8To4vOV5xkRz7U",
    },
    {
      id: 3,
      title: "Beamray",
      image: "/images/covers/beamraycover.png",
      tags: ["normi cover img vaja - see tag btw"], 
      ytlink: "https://www.youtube.com/watch?v=6OqFDf41rZM&ab_channel=BLSPlug",
      spotifylink: "https://open.spotify.com/track/6hoEAKx9M6trHjOwO2wQyo",
    },
  ];

  return (
    <>
      <Breadcrumb
        pageName={"About " + artistName}
        description="TreyC is a rapper from the Chamberlain Hills. He is a founder of the Chamber Music Publishing group. ADD MORE INFO HERE"
        image="/images/artists/treyc.webp"
      />
      <Blog artistData={songData} artistName={artistName}/>
    </>
  );
};

export default AboutPage;
