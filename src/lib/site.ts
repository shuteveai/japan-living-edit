export const site = {
  name: 'Japan Living Edit',
  url: 'https://japanlivingedit.com',
  description:
    'Japan Living Edit helps international readers discover thoughtfully designed products, practical ideas and everyday approaches to living from Japan.',
};

export const categories = [
  {
    title: 'Organize',
    slug: 'organize',
    description: 'Storage, entryways, shelves and everyday systems that make a home easier to use.',
  },
  {
    title: 'Small Spaces',
    slug: 'small-spaces',
    description: 'Compact living ideas for apartments, shared rooms and flexible home routines.',
  },
  {
    title: 'Kitchen',
    slug: 'kitchen',
    description: 'Useful tools, calm workflows and considered details for everyday cooking.',
  },
  {
    title: 'Coffee',
    slug: 'coffee',
    description: 'Brewing tools, serving pieces and quiet rituals shaped by Japanese design culture.',
  },
  {
    title: 'Everyday Essentials',
    slug: 'everyday-essentials',
    description: 'Daily-use objects, care tools and functional details that make ordinary routines easier to understand.',
  },
] as const;

export type CategoryName = (typeof categories)[number]['title'];

export function getCategorySlug(name: CategoryName) {
  const category = categories.find((category) => category.title === name);
  if (!category) throw new Error(`Unknown category: ${name}`);
  return category.slug;
}

export function getCanonical(pathname = '/') {
  return new URL(pathname, site.url).toString();
}
