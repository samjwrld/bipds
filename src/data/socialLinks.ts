export interface SocialLink {
  id: string;
  name: string;
  url: string;
  handle: string;
  icon: 'linkedin' | 'instagram' | 'twitter' | 'facebook' | 'youtube';
  color: string;
  bgHover: string;
  badge?: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'Bharat IP Defense Solutions',
    url: 'https://www.linkedin.com/company/bharat-ip-defense-solutions',
    icon: 'linkedin',
    color: '#0A66C2',
    bgHover: 'hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]',
    badge: 'Official Company Page'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@bharatipdefence',
    url: 'https://www.instagram.com/bharatipdefence',
    icon: 'instagram',
    color: '#E4405F',
    bgHover: 'hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 hover:text-white hover:border-transparent',
    badge: 'Updates & IP Reels'
  }
];

export const secondarySocials = [
  {
    id: 'twitter',
    name: 'X (Twitter)',
    handle: '@BharatIPDefence',
    url: 'https://twitter.com/BharatIPDefence',
    icon: 'twitter',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    handle: 'Bharat IP Defence',
    url: 'https://facebook.com/BharatIPDefence',
    icon: 'facebook',
  }
];
