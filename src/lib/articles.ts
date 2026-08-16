import { getCollection } from 'astro:content';

export async function getPublishedArticles() {
  const articles = await getCollection('articles', ({ data }) => !data.draft);

  return articles.sort(
    (a, b) => b.data.publishedDate.getTime() - a.data.publishedDate.getTime(),
  );
}
