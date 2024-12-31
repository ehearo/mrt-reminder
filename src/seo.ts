interface SeoConfig {
  title: string;
  description: string;
  url: string;
  keywords: string;
  locale: string;
}

const seoConfigs: Record<string, SeoConfig> = {
  'zh-TW': {
    title: '台北捷運即時動態 | 台北捷運時刻表 | 台北捷運路線圖',
    description: '台北捷運即時到站時間查詢，提供台北車站、板橋站、市政府站等捷運站的即時動態與時刻表。台北捷運轉乘資訊、票價、路線圖查詢，讓您的通勤更便利。',
    url: 'https://metro-taipei.site',
    keywords: '台北捷運,捷運時刻表,捷運到站時間,台北車站,板橋站,台北捷運票價,捷運路線圖,台北地鐵',
    locale: 'zh_TW'
  },
  'en': {
    title: 'Taipei Metro | MRT Timetable | Route Map | Real-time Information',
    description: 'Real-time arrival information for Taipei Metro (MRT). Check timetables, fares, and route maps for Taipei Main Station, Banqiao Station, and more. Your essential guide to Taipei\'s public transportation.',
    url: 'https://metro-taipei.site/en',
    keywords: 'Taipei Metro,Taipei MRT,MRT timetable,Taipei Main Station,Taipei subway,Taiwan MRT',
    locale: 'en_US'
  },
  'ja': {
    title: '台北メトロ | 地下鉄時刻表 | 路線図 | リアルタイム運行情報',
    description: '台北メトロ（MRT）のリアルタイム運行情報。台北駅、板橋駅など主要駅の時刻表、運賃、路線図を提供。台北の公共交通機関の必須ガイド。',
    url: 'https://metro-taipei.site/ja',
    keywords: '台北メトロ,台北MRT,地下鉄時刻表,台北駅,台北の地下鉄',
    locale: 'ja_JP'
  }
}

export function generateMetaTags(locale: string = 'zh-TW'): string {
  const seo = seoConfigs[locale]
  return `
    <title>${seo.title}</title>
    <meta name="description" content="${seo.description}">
    <meta name="keywords" content="${seo.keywords}">
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
    <link rel="canonical" href="${seo.url}">
    
    <!-- 多語系設定 -->
    <link rel="alternate" hreflang="zh-TW" href="https://metro-taipei.site">
    <link rel="alternate" hreflang="en" href="https://metro-taipei.site/en">
    <link rel="alternate" hreflang="ja" href="https://metro-taipei.site/ja">
    <link rel="alternate" hreflang="x-default" href="https://metro-taipei.site">
    
    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="${seo.title}">
    <meta property="og:description" content="${seo.description}">
    <meta property="og:image" content="${seoConfigs['zh-TW'].url}/og-image.png">
    <meta property="og:locale" content="${seo.locale}">
    <meta property="og:url" content="${seo.url}">

    <!-- 結構化資料 -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "${seo.title}",
      "description": "${seo.description}",
      "url": "${seo.url}",
      "applicationCategory": "TransitApplication",
      "operatingSystem": "All",
      "inLanguage": "${locale}",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "TWD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Metro Taipei",
        "url": "${seoConfigs['zh-TW'].url}"
      }
    }
    </script>
  `
} 