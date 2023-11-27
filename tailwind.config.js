/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/{*.jsx, *.js}"],
  theme: {
    extend: {
      backgroundColor: {
        'light-color' : '#FDF8E7', //Couleur claire du projet
        'light-color-lightened' : '#FFFCF4', //Couleur très claire du projet
        'light-color-dark' : '#FDF8E7', //Couleur claire légèrement foncée du projet
        'light-color-shadow' : '#FDF8E7', //Couleur ombragée de la light couleur
        'dark-color' : '#121517', //Couleur foncée du projet
        'primary-color' : '#63579E', //Couleur vivante du projet
        'error-color' : '#E7888C',
        'valid-color' : '#80DBAC'
      },
      textColor: {
        'dark-color' : '#121517', //Couleur foncée du projet
        'light-color' : '#FDF8E7', //Couleur très claire du projet
        'primary-color' : '#63579E', //Couleur vivante du projet
      },
      boxShadow: {
        'inner-shadow': 'inset 0 0 12px rgba(171, 167, 157, 1)', // Ombre interne
        'outer-shadow': '0 0 8px rgba(171, 167, 157, 1)',      // Ombre externe
        'button-shadow': '2px 3px 10px rgba(171, 167, 157, 1)',      // Ombre externe décalée
        'card-shadow': '2px 3px 10px rgba(171, 167, 157, 1)', 
      },
      colors: {
        'dark-color': '#121517',
        'shadow-color' : '#FDF8E7' 
      },
      borderColor: {
        'light-color' : '#FDF8E7', //Couleur claire du projet
        'dark-color' : '#121517', //Couleur foncée du projet
        'primary-color' : '#63579E', //Couleur vivante du projet
      },
      screens: {
          'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
}

