export const site = {
  name: 'Japan Living Edit',
  url: 'https://japanlivingedit.com',
  description:
    'Japan Living Edit helps international readers discover thoughtfully designed products, practical ideas and everyday approaches to living from Japan.',
};

export const categories = [
  {
    title: 'Organize',
    description: 'Storage, entryways, shelves and everyday systems that make a home easier to use.',
  },
  {
    title: 'Small Spaces',
    description: 'Compact living ideas for apartments, shared rooms and flexible home routines.',
  },
  {
    title: 'Kitchen',
    description: 'Useful tools, calm workflows and considered details for everyday cooking.',
  },
  {
    title: 'Coffee',
    description: 'Brewing tools, serving pieces and quiet rituals shaped by Japanese design culture.',
  },
];

export function getCanonical(pathname = '/') {
  return new URL(pathname, site.url).toString();
}
