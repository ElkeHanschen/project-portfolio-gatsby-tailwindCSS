/* see full config here:
* https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    screens: {
      phone: { max: '767px' },
      tablet: '768px',
      laptop: '1024px',
      desktop: '1440px',
    },
    extend: {
      colors: {
        palette116: {
          "vivid_sky_blue": "#32cbff",
          "carolina_blue": "#00a5e4",
          "little_boy_blue": "#89a1ef",
          "orchid": "#ef9cda",
          "pink_lace": "#fecef1",
        },
        palette104: {
          "ming": "#006d77",
          "middle_blue_green": "#83c5be",
          "alice_blue": "#edf6f9",
          "misty_rose": "#ffddd2",
          "dark_salmon": "#e29578",
        },
        palette86: {
          "old_mauve": "#5d2a42",
          "fiery_rose": "#fb6376",
          "melon": "#fcb1a6",
          "unbleached_silk": "#ffdccc",
          "floral_white": "#fff9ec",
        },
        palette80: {
          "oxford_blue": "#001b2e",
          "charcoal": "#294c60",
          "cadet_blue": "#adb6c4",
          "papaya_whip": "#ffefd3",
          "peach": "#ffc49b",
        },
        palette68: {
          "polished_pine": "#6c9a8b",
          "vivid_tangerine": "#e8998d",
          "misty_rose": "#eed2cc",
          "cultured": "#fbf7f4",
          "brown_sugar": "#a1683a",
        },
        palette58: {
          "aero_blue": "#bcf4de",
          "honeydew": "#cde5d7",
          "timberwolf": "#ded6d1",
          "baby_pink": "#eec6ca",
          "light_pink": "#ffb7c3",
        },
        palette48: {
          "old_mauve": "#512d38",
          "pearly_purple": "#b27092",
          "cotton_candy": "#f4bfdb",
          "pale_purple": "#ffe9f3",
          "green_sheen": "#87baab",
        },
      },
      spacing: {
        "72": "18rem",
      },
    },
  },
  /* enable hover, focus, active utilities; the order matters! */
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
  },
  plugins: [],
};
