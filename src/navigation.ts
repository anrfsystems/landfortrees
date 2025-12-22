import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'What we do',
      href: getPermalink('/#whatwedo'),
    },
    {
      text: 'Projects',
      href: getPermalink('/#projects'),
    },
    {
      text: 'Collaborate',
      href: getPermalink('/#collab'),
    },
    {
      text: 'Contact',
      href: getPermalink('/#contact'),
    },
    
    
   
  ],
  actions: [{ text: 'Download', href: 'https://github.com/arthelokyo/astrowind', target: '_blank' }],
};

export const footerData = {
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  
  footNote: `
    © 2025 ANRF· All rights reserved.
  `,
};
