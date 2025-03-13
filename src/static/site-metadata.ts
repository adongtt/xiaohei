interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: "哩工's Running Page",
  siteUrl: 'https://adongtt.github.io/ligong',
  logo: 'https://uk.weika.live/ligong.jpg',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://adongtt.github.io/ligong',
    },
    {
      name: 'About',
      url: 'https://adongtt.github.io/ligong',
    },
  ],
};

export default data;
