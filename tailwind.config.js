// tailwind.config.js
module.exports = {
  content: [
    "./App.tsx",
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'base': '10px',
        'small': '8px'
      },
      fontSize: {
        'title': '40px',
        'base': '16px'
      },
      colors: {
        'main-black': '#272727',
        'main-grey': '#585858',
        'secondary-grey': '#ABABAB',
        'tertiary-grey': '#EBEBEB',
        'main-blue': '#5184FE',
        'rectangle-grey': '#F8F8F8',
      },
      fontFamily: {
        'interThin': ['Inter_100Thin'],
        'interExtraLight': ['Inter_200ExtraLight'],
        'interLight': ['Inter_300Light'],
        'interRegular': ['Inter_400Regular'],
        'interMedium': ['Inter_500Medium'],
        'interSemiBold': ['Inter_600SemiBold'],
        'interBold': ['Inter_700Bold'],
        'interExtraBold': ['Inter_800ExtraBold'],
        'interBlack': ['Inter_900Black'],
      },
      letterSpacing: {
        'title': -0.8,
        'base': -0.3,
      }
    }
  }
  // ...
};
