export default defineAppConfig({
  global: {
    picture: {
      dark: '/qvc-logo.png',
      light: '/qvc-logo.png',
      alt: 'QVC BD Limited'
    },
    meetingLink: '',
    email: 'qvcbdltd@gmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Built with ❤️ by Abir • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-facebook',
      'to': 'https://facebook.com/qvcbdltd',
      'target': '_blank',
      'aria-label': 'QVC BD Limited on Facebook'
    }, {
      'icon': 'i-simple-icons-x',
      'to': 'https://x.com/qvcbdltd',
      'target': '_blank',
      'aria-label': 'QVC BD Limited on X'
    }, {
      'icon': 'i-simple-icons-linkedin',
      'to': 'https://linkedin.com/qvcbdltd',
      'target': '_blank',
      'aria-label': 'QVC BD Limited on LinkedIn'
    }]
  }
})
