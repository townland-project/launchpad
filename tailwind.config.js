module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        'app-logo': "url('../public/assets/logo.png')",
        'roadmap-wave': "url('../public/assets/roadmap-wave.svg')",
        'geek': "url('../public/assets/images/geek.png')",
        'lady': "url('../public/assets/images/lady.png')",
        'chat': "url('../public/assets/images/chat.png')",
        'planet': "url('../public/assets/images/planet.png')",
        'man': "url('../public/assets/images/man.png')",
        'woman': "url('../public/assets/images/woman.png')",
      }
    },
  },
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
