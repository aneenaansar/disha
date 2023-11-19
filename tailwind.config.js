/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        'artifika' : ['Artifika', 'serif'],
        'montasorrat' : ['Montserrat', 'sans-serif']
      },
      colors: {
        'primary' : '#FFC8B9',
        'baseprimary' : '#FFF0EC',
        'light' : '#FFEBD9',
      },
      screens:{
        'pc':{'min':'1580px'},
        'ipad':{'max':'920px'},
        'phone_max':{'max':'768px'},
        'mobile':{'max':'640px'},
        'ipad_min':{'max':'480px'},
       }
    },
  },
  plugins: [],
}

