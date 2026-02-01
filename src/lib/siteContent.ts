// Site content that can be edited via the CMS
export interface SiteContent {
  hero: {
    tagline: string;
    description: string;
  };
  about: {
    headline: string;
    bio: string[];
    location: string;
    currentWork: string;
    quote: string;
  };
  music: {
    albumTitle: string;
    albumYear: string;
    albumDescription: string;
    tracks: Array<{
      title: string;
      duration: string;
      featured: boolean;
    }>;
    appleMusicUrl: string;
    spotifyUrl: string;
  };
  contact: {
    email: string;
    socialLinks: Array<{
      name: string;
      url: string;
    }>;
  };
}

export const defaultSiteContent: SiteContent = {
  hero: {
    tagline: "Broadcaster • Musician • Visual Artist",
    description: "Four decades of storytelling through broadcast, gypsy jazz, and the lens.",
  },
  about: {
    headline: "Broadcaster, Musician & Visual Artist",
    bio: [
      "With over 40 years in electronic media and broadcasting, Clint Hasse has built a career at the intersection of sound, image, and storytelling.",
      "Currently with KSDK NewsChannel 5 / Gannett handling broadcast and digital marketing, and lending his baritone voice to KMOX Radio, Clint brings decades of experience in commercial writing, producing, and voiceover work.",
      "As the rhythm guitarist for Swing DeVille, St. Louis's premier gypsy jazz ensemble, he plays a custom Jean-Pierre Favino guitar and lends his baritone vocals to The Great American Songbook."
    ],
    location: "St. Louis, MO",
    currentWork: "KSDK / Swing DeVille",
    quote: "Every song tells a story. Every photograph captures a moment that will never come again.",
  },
  music: {
    albumTitle: "Inside Nashville",
    albumYear: "2017",
    albumDescription: "13 original country tracks capturing the spirit of Nashville—from gypsy jazz influences to heartfelt storytelling. A journey through honky-tonks, love, and the disappearing cowboy way of life.",
    tracks: [
      { title: "East Nashville Girl", duration: "4:16", featured: true },
      { title: "Guitar Playing Goodtime Man", duration: "4:12", featured: true },
      { title: "Kombucha", duration: "4:14", featured: true },
      { title: "All That's Missing Is You", duration: "4:08", featured: true },
      { title: "Two Minutes and Three Shots of Bourbon", duration: "3:49", featured: true },
      { title: "Audrey Lives Downstairs", duration: "3:32", featured: true },
      { title: "My Second Home, Hamburg", duration: "2:41", featured: false },
      { title: "Return to Bakersfield", duration: "2:02", featured: false },
      { title: "Radio Silence", duration: "2:57", featured: false },
      { title: "The Twang", duration: "2:39", featured: false },
      { title: "I Could've Been George Jones' Son", duration: "2:56", featured: false },
      { title: "I Rarely Mow My Lawn", duration: "3:20", featured: false },
      { title: "Disappearing Cowboy Way of Life", duration: "2:50", featured: false },
    ],
    appleMusicUrl: "https://music.apple.com/us/artist/clint-hasse/1316269529",
    spotifyUrl: "https://open.spotify.com/artist/4Bt9p5U6k46ASQGTUrXLKL",
  },
  contact: {
    email: "hello@clinthasse.com",
    socialLinks: [
      { name: "Apple Music", url: "https://music.apple.com/us/artist/clint-hasse/1316269529" },
      { name: "Spotify", url: "https://open.spotify.com/artist/4Bt9p5U6k46ASQGTUrXLKL" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/clint-hasse-5646a033/" },
      { name: "Swing DeVille", url: "https://www.swingdeville.com/clint-hasse" },
    ],
  },
};
