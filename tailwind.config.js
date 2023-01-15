module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",
        "search-icon": '#2B2B39',
        "menu-text-color": '#656464',
        "login-button": '#217BF4',
        "header-color": '#0A093D',
        "list-color": '#171648',
        "members-text-color": '#5D5B70',
        "tab-text-color": '#2F2C4A',
        "news-line-color": '#FFAF2E',
        "footer-bg-color": '#2B2B39',
        "footer-bg-color2": '#20202D',
        "footer-text-color": '#E7E7E7',
      },
    },
    fontFamily: {
      Inter: ["Inter, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1024px",
        xl: "1280px",
        "2xl": "1280px",
      }
    }
  },
  plugins: [],
}
