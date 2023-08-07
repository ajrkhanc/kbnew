module.exports = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: '/:path',
      destination: 'https://byldgroup.com/blanchardindia',
      permanent: true
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

    {
      source: '/events-workshops/program-experience-webinar1/',
      destination: 'https://byldgroup.com/blanchardindia/events-workshops',
      permanent: true,
    },

    {
      source: '/events-workshops',
      destination: 'https://byldgroup.com/blanchardindia/events-workshops',
      permanent: true,
    },

    {
      source: '/events-workshops/virtual-public-workshop',
      destination: 'https://byldgroup.com/blanchardindia/events-workshops/virtual-public-workshop',
      permanent: true,
    },

    {
      source: '/assessments/bme-assessment-m',
      destination: 'https://byldgroup.com/blanchardindia/assessments/bme-assessment-m',
      permanent: true,
    },

    {
      source: '/about-us',
      destination: 'https://byldgroup.com/blanchardindia/about-us',
      permanent: true,
    },

    {
      source: '/about-us/meet-the-team',
      destination: 'https://byldgroup.com/blanchardindia/about-us/who-we-are/leadership-team',
      permanent: true,
    },

    {
      source: '/about-us/meet-the-team/yogesh-sood',
      destination: 'https://byldgroup.com/blanchardindia/about-us/who-we-are/leadership-team/yogesh-sood',
      permanent: true,
    },

    {
      source: '/books',
      destination: 'https://byldgroup.com/blanchardindia/books',
      permanent: true,
    },

    {
      source: '/elearning',
      destination: 'https://byldgroup.com/blanchardindia/elearning',
      permanent: true,
    },

    {
      source: '/blanchard-privacy-policy',
      destination: 'https://byldgroup.com/blanchardindia/blanchard-privacy-policy',
      permanent: true,
    },

    {
      source: '/cancellation-and-refund-policy',
      destination: 'https://byldgroup.com/blanchardindia/cancellation-and-refund-policy',
      permanent: true,
    },

    {
      source: '/coaching-essentials-webinar',
      destination: 'https://byldgroup.com/blanchardindia/coaching-essentials-webinar',
      permanent: true,
    },

    {
      source: '/get-started',
      destination: 'https://byldgroup.com/blanchardindia/get-started',
      permanent: true,
    },

    {
      source: '/terms-and-conditions',
      destination: 'https://byldgroup.com/blanchardindia/terms-and-conditions',
      permanent: true,
    },

    {
      source: '/thank-you-lp',
      destination: 'https://byldgroup.com/blanchardindia/thank-you-lp',
      permanent: true,
    },

    {
      source: '/thank-you-lp-blanchard-generic-landing-page',
      destination: 'https://byldgroup.com/blanchardindia/thank-you-lp-blanchard-generic-landing-page',
      permanent: true,
    },

    {
      source: '/the-three-secrets-of-the-new-one-minute-manager',
      destination: 'https://byldgroup.com/blanchardindia/the-three-secrets-of-the-new-one-minute-manager',
      permanent: true,
    },

    {
      source: '/products-services/slii-experience',
      destination: 'https://byldgroup.com/blanchardindia/what-we-do/leadership-development/leadership-development-programs',
      permanent: true,
    },

    {
      source: '/products-services/blanchard-management-essentials',
      destination: 'https://byldgroup.com/blanchardindia/our-content/programs/blanchard-management-essentials',
      permanent: true,
    },

    {
      source: '/products-services/self-leadership',
      destination: 'https://byldgroup.com/blanchardindia/our-content/programs/self-leadership',
      permanent: true,
    },

    {
      source: '/products-services/coaching-essentials',
      destination: 'https://byldgroup.com/blanchardindia/our-content/programs/coaching-essentials',
      permanent: true,
    },

    {
      source: '/products-services/building-trust',
      destination: 'https://byldgroup.com/blanchardindia/our-content/programs/building-trust',
      permanent: true,
    },

    {
      source: '/products-services/leading-people-through-change',
      destination: 'https://byldgroup.com/blanchardindia/our-content/programs/leading-people-through-change',
      permanent: true,
    },

    {
      source: '/products-services/team-leadership',
      destination: 'https://byldgroup.com/blanchardindia/our-content/programs/team-leadership',
      permanent: true,
    },

    {
      source: '/products-services/customer-service-training',
      destination: 'https://byldgroup.com/blanchardindia/our-content/programs/legendary-service',
      permanent: true,
    },

    {
      source: '/products-services/online-learning-training',
      destination: 'https://byldgroup.com/blanchardindia/our-content/programs/leading-virtually',
      permanent: true,
    },

    {
      source: '/products-services/online-learning-training',
      destination: 'https://byldgroup.com/blanchardindia/our-content/programs/leading-virtually',
      permanent: true,
    },

    {
      source: '/products-services/conversational-capacity',
      destination: 'https://byldgroup.com/blanchardindia/our-content/programs/conversational-capacity',
      permanent: true,
    },

  

  ]
}
