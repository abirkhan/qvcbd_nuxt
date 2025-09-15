export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://scontent.fspd3-1.fna.fbcdn.net/v/t39.30808-6/303549191_208561308170394_5745016480458344863_n.png?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=pmD-eNqYlKYQ7kNvwHa7eDH&_nc_oc=AdkEbXx6oRxqdhT4LDUx7IHhTFcUmHh7lJxqeNJgqN967S-cjV5-qNlNZxe_4yglhYQ&_nc_zt=23&_nc_ht=scontent.fspd3-1.fna&_nc_gid=UFtdjggC1yST1emCbc4Z5A&oh=00_AfbPcEEYRrYb984G2ts3odT7iYJ1uGNHtqrG2upTCVCmqw&oe=68CC46C6',
      light: 'https://scontent.fspd3-1.fna.fbcdn.net/v/t39.30808-6/303549191_208561308170394_5745016480458344863_n.png?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=pmD-eNqYlKYQ7kNvwHa7eDH&_nc_oc=AdkEbXx6oRxqdhT4LDUx7IHhTFcUmHh7lJxqeNJgqN967S-cjV5-qNlNZxe_4yglhYQ&_nc_zt=23&_nc_ht=scontent.fspd3-1.fna&_nc_gid=UFtdjggC1yST1emCbc4Z5A&oh=00_AfbPcEEYRrYb984G2ts3odT7iYJ1uGNHtqrG2upTCVCmqw&oe=68CC46C6',
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
