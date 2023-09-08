/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          "purple": "hsl(259, 100%, 65%)",
          "lightred": "hsl(0, 100%, 67%)"
        },
        neutral: {
          "white": "hsl(0, 0%, 100%)",
          "offwhite": "hsl(0, 0%, 94%)",
          "lightgrey": "hsl(0, 0%, 86%)",
          "smokeygrey": "hsl(0, 1%, 44%)",
          "offblack": "hsl(0, 0%, 8%)"
        }
      },
      borderRadius: {
        "custom": "100px"
      },
      fontSize: {
        "inputs": "32px"
      },
      fontFamily: {
        "pop" : " 'Poppins', sans-serif "
      }
    },
  },
  plugins: [],
}

