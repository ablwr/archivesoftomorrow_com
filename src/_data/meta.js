module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'Archives of Tomorrow',
  siteDescription: 'Archives of Tomorrow: an archives technology company',
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Ashley Blewer', // i.e. Lene Saile - author's name. Must be set.
  authorEmail: 'ashley.blewer@gmail.com', // i.e. hola@lenesaile.com - email of the author
  authorWebsite: 'https://ashleyblewer.com', // i.e. https.://www.lenesaile.com - the personal site of the author
  themeColor: '#DD4462', //  Manifest: defines the default theme color for the application
  themeBgColor: '#F3F3F3', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.jpg', // fallback/default meta image
    opengraph_default_alt:
      'Visible content: Eleventy starter based on workflow for Cube CSS, Every Layout, Design Tokens and Tailwind for uitility, based on the concepts explained in buildexcellentwebsit.es ', // alt text for default meta image
    twitterSite: '', // i.e. @site - twitter profile of the site
    twitterCreator: '@ablwr', // i.e. @author -  twitter profile of the site
    mastodonProfile: 'https://digipres.club/@ashley' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'Archives of Tomorrow blog',
    description: 'Archives of Tomorrow: an archives technology company'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: 'Archives of Tomorrow',
    street: '',
    city: 'Philadelphia',
    state: 'PA',
    zip: '19147',
    mobileDisplay: '',
    mobileCall: '',
    email: '',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};
