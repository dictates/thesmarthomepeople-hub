export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Guides & Blog',
      href: '/blog',
    },
  ],
  actions: [{ text: 'Newsletter Signup', href: '#subscribe', variant: 'primary' }],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Privacy Policy', href: '/privacy' },
    { text: 'Terms', href: '/terms' },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: '/rss.xml' },
  ],
  footNote: `
    © 2026 The Smart Home People · Built for the TP-Link Tapo Community. All rights reserved.
  `,
};
