export function getSocialMetas({
  url,
  title = 'Helping people make the world a better place through quality software',
  description = 'Make the world better with software',
  image = '/images/diurivjlogo.png',
  keywords = ''
}: {
  image?: string
  url: string
  title?: string
  description?: string
  keywords?: string
}) {
  return {
    title,
    description,
    keywords,
    image,
    'og:url': url,
    'og:title': title,
    'og:description': description,
    'og:image': image,
    'twitter:card': image ? 'summary_large_image' : 'summary',
    'twitter:creator': '@kentcdodds',
    'twitter:site': '@kentcdodds',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': image,
    'twitter:alt': title
  }
}
