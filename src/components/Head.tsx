// src/components/Head.tsx
import Head from 'next/head';

interface HeadProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  url?: string;
  type?: 'website' | 'article';
}

export default function HeadComponent({
  title = 'Blog — Beyond UI',
  description = 'A modern blog built with Next.js',
  imageUrl = '/default-og-image.jpg',
  url = '',
  type = 'website',
}: HeadProps) {
  const fullTitle = title.includes('Next.js Blog') ? title : `${title} | Next.js Blog`;
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      {url && <meta property="og:url" content={url} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}