module.exports = {
  darkMode: 'class', // Enable dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Set Roboto as the default sans font
      },

      colors: {
        customTextColour: 'rgb(226, 232, 240)',
        customGray1: 'rgb(17, 17, 17)',  
        customGray2: 'rgb(51, 51, 51)', 
        customGray3: 'rgb(249, 250, 251)',
        customGray4: 'rgb(15, 23, 42)', 
      },
      borderWidth: {
        '0.1': '0.1px', 
      },
      
    },
  },
  plugins: [],
}
