import { User } from 'netlify-identity-widget';

interface PageData {
  title: string;
  body: string;
  metaTitle: string;
  metaDescription: string;
  slug: string;
}

interface GeneratedPage {
  title: string;
  slug: string;
  createdAt: string;
}

const GENERATED_PAGES_KEY = 'generated_pages';

export function getGeneratedPages(): GeneratedPage[] {
  const pagesJson = localStorage.getItem(GENERATED_PAGES_KEY);
  return pagesJson ? JSON.parse(pagesJson) : [];
}

function addGeneratedPage(page: GeneratedPage): void {
  const pages = getGeneratedPages();
  pages.push(page);
  localStorage.setItem(GENERATED_PAGES_KEY, JSON.stringify(pages));
}

export function removeGeneratedPage(slug: string): void {
  const pages = getGeneratedPages();
  const filteredPages = pages.filter(page => page.slug !== slug);
  localStorage.setItem(GENERATED_PAGES_KEY, JSON.stringify(filteredPages));
}

export async function generatePage(pageData: PageData, user: User): Promise<void> {
  if (!user || !user.token?.access_token) {
    throw new Error('Not authenticated');
  }

  const pageContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${pageData.metaTitle}</title>
    <meta name="description" content="${pageData.metaDescription}">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2/dist/tailwind.min.css">
</head>
<body>
    <article class="prose prose-lg max-w-4xl mx-auto px-4 py-12">
        <h1 class="text-4xl font-bold mb-8">${pageData.title}</h1>
        ${pageData.body}
    </article>
</body>
</html>`;

  try {
    const response = await fetch('/.netlify/functions/commit-page', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token.access_token}`
      },
      body: JSON.stringify({
        content: pageContent,
        path: `pages/${pageData.slug}.html`
      })
    });

    if (!response.ok) {
      throw new Error('Failed to generate page');
    }

    addGeneratedPage({
      title: pageData.title,
      slug: pageData.slug,
      createdAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Failed to generate page:', error);
    throw new Error('Failed to generate page');
  }
}