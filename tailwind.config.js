module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      fontSize: {
        14: "14px",
      },
      backgroundColor: {
        "main-bg": "#FAFBFB",
        "main-dark-bg": "#20232A",
        "secondary-dark-bg": "#33373E",
        "light-gray": "#F7F7F7",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        80: "80px",
      },
      minHeight: {
        590: "590px",
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://www.google.com/search?q=website+background&sxsrf=ALiCzsY8zYJWfkZ_dYr3c4DpXt1D5T001w:1655042558384&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiF_J7-iaj4AhVOH7cAHWMqCMQQ_AUoAXoECAEQAw&biw=1366&bih=578&dpr=1#imgrc=WUuy4pIvnpvmHM')",
      },
    },
  },
  plugins: [],
};
