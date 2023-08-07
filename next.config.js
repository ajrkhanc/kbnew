module.exports = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'www.blanchardinternational.co.in' }],
      destination: 'https://blanchardinternational.co.in/:path*',
      permanent: true
    },
    {
      source: '/events-workshops/program-experience-webinar1/',
      destination: '/events-workshops',
      permanent: true,
    },
    {
      source: '/assessments/bme-assessment',
      destination: '/assessments/bme-assessment-m',
      permanent: true,
    },

    {
      source: '/blog',
      destination: 'https://byldgroup.com/blanchardindia/blog',
      permanent: true,
    },

    {
      source: '/blog/:slug',
      destination: 'https://byldgroup.com/blanchardindia/blog/:slug', // Matched parameters can be used in the destination
      permanent: true,
    },

    {
      source: '/podcast/:path*',
      destination: 'https://byldgroup.com/blanchardindia/podcast/:path*',
      permanent: false
    },

    {
      source: '/ebooks/:path*',
      destination: 'https://byldgroup.com/blanchardindia/ebooks/:path*',
      permanent: false
    },

    {
      source: '/white-paper/:path*',
      destination: 'https://byldgroup.com/blanchardindia/white-paper/:path*',
      permanent: false
    },

    {
      source: '/forms/:path*',
      destination: 'https://byldgroup.com/blanchardindia/forms/:path*',
      permanent: false
    },

    {
      source: '/lp/:path*',
      destination: 'https://byldgroup.com/blanchardindia/lp/:path*',
      permanent: false
    },

  ]
}
