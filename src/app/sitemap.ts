import { getAllBlogPosts } from '@/data/blogPosts'
import { topicalMap } from '@/data/topicalMap'
import { getAllAuthors } from '@/data/authors'

export default function sitemap() {
  const baseUrl = 'https://invoicemonk.com'
  
  // Static routes
  const routes = [
    '',
    '/invoicing',
    '/expenses',
    '/payments',
    '/accounting',
    '/estimates',
    '/receipts',
    '/pricing',
    '/why-invoicemonk',
    '/compliance',
    '/about',
    '/contact',
    '/freelancers',
    '/consultants',
    '/contractors',
    '/small-businesses',
    '/developer',
    '/free-invoice-generator',
    '/glossary',
    '/explore',
    '/blog',
    '/guides',
    '/guides/invoicing',
    '/guides/getting-paid',
    '/guides/business-finances',
    '/guides/tax-compliance',
    '/guides/freelancing',
    '/guides/estimates',
    '/features/client-management',
    '/privacy-policy',
    '/terms-of-service',
    '/cookie-policy',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.includes('/blog') ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }))

  // Blog posts
  const posts = getAllBlogPosts()
  const blogPosts = posts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified || post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // Blog topics
  const topics = Object.keys(topicalMap).map(topicId => ({
    url: `${baseUrl}/blog/topic/${topicId}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  // Authors
  const allAuthors = getAllAuthors()
  const authorPages = allAuthors.map(author => ({
    url: `${baseUrl}/blog/author/${author.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...routes, ...blogPosts, ...topics, ...authorPages]
}
