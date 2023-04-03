
import Breadcrumb from "@/components/Common/Breadcrumb";
import Blog from "@/components/Blog";

const AboutPage = () => {
  const artistName = "TreyC"

  const songData = [
    {
      id: 1,
      title: "High",
      image: "/images/covers/highcover.png",
      tags: ["Melodic rap"], 
      ytlink: "https://www.youtube.com/watch?v=EtJMBTe4N-o&ab_channel=BLSPlug",
      spotifylink: "https://open.spotify.com/album/00pT3c2lDP9vyZe3ZHKTyX?go=1&sp_cid=9fba86bdf0c4ca3361e974f5c8e805eb&utm_source=embed_player_p&utm_medium=desktop&nd=1",
    },
    {
      id: 2,
      title: "Legacy",
      image: "/images/covers/legacycover.png",
      tags: ["NY Drill"], 
      ytlink: "https://www.youtube.com/watch?v=zs1D1Kj9abg&ab_channel=BLSPlug",
      spotifylink: "https://open.spotify.com/track/4zmJIr2W8To4vOV5xkRz7U",
    },
    {
      id: 3,
      title: "Beamray",
      image: "/images/covers/beamraycover.png",
      tags: ["Rap"], 
      ytlink: "https://www.youtube.com/watch?v=6OqFDf41rZM&ab_channel=BLSPlug",
      spotifylink: "https://open.spotify.com/track/6hoEAKx9M6trHjOwO2wQyo",
    },
  ];

  const description = (
    <div>
      <p>
        TreyC is a 19-year-old rapper from Chamberlain Hills who has taken the music industry by storm. Born and raised in a tough neighborhood, TreyC's music reflects his life experiences and the challenges he's faced. He started rapping at a young age and quickly gained a reputation for his raw and authentic style.
      </p>
      <br />
      <p>
        Today, TreyC is not only a rising star in the rap scene but also a millionaire, thanks to his hit songs and savvy business acumen. He's the founder of Chamber Music Publishing Group.
      </p>
      <br />
      <p>
        TreyC's lyrics are introspective and thought-provoking, tackling issues like poverty, violence, and racial inequality with honesty and empathy.
      </p>
      <br />
      <p>
        Despite his success, TreyC remains humble and committed to his community. He regularly gives back through charitable donations and outreach programs, and he's become a role model for young people in Chamberlain Hills and beyond.
      </p>
      <br />
      <p>
        In short, TreyC is a talented and driven artist who has achieved incredible success at a young age. With his unique voice and powerful message, he's sure to continue making waves in the music world for years to come.
      </p>
    </div>
  );

  return (
    <>
      <Breadcrumb
        pageName={"About " + artistName}
        description={description}
        image="/images/artists/treyc.webp"
      />
      <Blog artistData={songData} artistName={artistName}/>
    </>
  );
};

export default AboutPage;
