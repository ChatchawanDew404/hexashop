/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      sm:"576px",
      md:"768px",
      lg:"992px",
      xl:"1200px"
    },
    extend: {
      colors:{
        whiteColor:'#fff',
        whiteColor2:'#f8f8f8',
        blackColor:'#000',
        gray : "#a1a1a1",
        gray2 : "#aaa",
        darkGray: "#2a2a2a",
        darkGray2: "#212529",
        lightGray: "#eee",
        lightGray2: "#aeaeae",
        lightBlue : "#ccffff"
      }, container:{
        center:true,
        padding:{
          DEFAULT:'1rem',
          sm:'1.5rem'
        }
      },
      fontFamily:{
        poppins:["Poppins","sans-serif"]
      }
    },
    keyframes:{
      point1:{
        '0%':{transform: 'scale(1)' ,opacity:'1'},
        '100%':{transform: 'scale(3)' ,opacity:'0'}
      },
      point2:{
        '0%':{transform: 'scale(1)' ,opacity:'1'},
        '100%':{transform: 'scale(2)' ,opacity:'0'}
      },
    },
    animation:{
      point1:'point1 1s ease-in-out infinite',
      point2:'point2 2s ease-in-out infinite'
    }
  },
  plugins: [],
}

