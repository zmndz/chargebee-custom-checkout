
export default {
  icons: {
    // iconfont: 'mdi' // default - only for display purposes
  },
  theme: {
    dark: true,
    options: {
      customProperties: true,
      minifyTheme(css) {
        return process.env.NODE_ENV === 'production' ? css.replace(/[\r\n|\r|\n]/g, '') : css;
      }
    },
    themes: {
      // light: {
      //   primary: '#1d1d1d',
      //   secondary: '#262626',
      //   accent: '#4da5f3',
      //   info: '#00a0a6',
      //   warning: '#F9A825',
      //   error: '#D32F2F',
      //   success: '#4CAF50',
      //   dark: '#0A1E25',
      // },
      dark: {
          primary: '#4da5f3',
    //       accent: '#4da5f3',
    //       secondary: '#262626',
        info: '#00a0a6',
        warning: '#F9A825',
        error: '#D32F2F',
        success: '#4CAF50',
        background: '#1d1d1d',
        'background--lighten': '#262626',
        'background--lighten-2': '#363636',
      },
    }
  }
};
