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
      source: '/blog/:slug',
      destination: 'https://byldgroup.com/blanchardindia/blog/:slug', // Matched parameters can be used in the destination
      permanent: true,
    },

  ]
}
