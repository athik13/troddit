const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'th-text': 'var(--text)', 
        'th-textLight': 'var(--textLight)',
        'th-textBody' : 'var(--textBody)',
        'th-textStrong' : 'var(--textStrong)',
        'th-textHeading' : 'var(--textHeading)',
        'th-base': 'var(--base)',
        'th-accent1': 'var(--accent1)',
        'th-accent2' : 'var(--accent2)',
        'th-background': 'var(--background)',
        'th-background2' : 'var(--background2)',
        'th-post': 'var(--post)',
        'th-post2' : 'var(--post2)',
        'th-postHover': 'var(--postHover)',
        'th-highlight': 'var(--highlight)',
        'th-border' : 'var(--border)',
        'th-border2' : 'var(--border2)',
        'th-borderHighlight' : 'var(--borderHighlight)',
        'th-borderHighlight2' : 'var(--borderHighlight2)',
        'th-green': 'var(--green)',
        'th-red' : 'var(--red)',
        'th-upvote' : 'var(--upvote)',
        'th-downvote' : 'var(--downvote)',
        'th-scrollbar' : 'var(--scrollbar)',
        'th-link' : 'var(--link)',
        'th-linkHover' : 'var(--linkHover)',
        'th-commentRibbon' : 'var(--commentRibbon)',
        'th-commentRibbonHover' : 'var(--commentRibbonHover)',
        'th-backgroundComment' : 'var(--backgroundComment)',
        'th-backgroundCommentAlternate' : 'var(--backgroundCommentAlternate)',
        'th-toggleColor' : 'var(--toggleColor)',
        'th-toggleHandleColor' : 'var(--toggleHandleColor)',
        // lightText: "#E7E5E4",
        // lightBG: "#F1F5F9",
        // lightPost: "#F8FAFC",
        // lightPostHover: "#FFFFFF",
        // lightHighlight: "#F3F4F6",
        // lightBorder: "#D4D4D8",
        // lightBorderHighlight: "#71717A",
        // darkBG: "#1A1A1B",
        // darkPostHover: "#262626",
        // darkBorder: "#3F3F46",
        // darkBorderHighlight: "#71717A",
        // darkHighlight: "#262626",
        // lightGreen: "#16A34A",
        // darkGreen: "#7AFBD6",
        // upvote: "#F97316",
        // downvote: "#60A5FA",
        // lightScroll: "#60A5FA",
        // darkScroll: "#991B1B",
        blueGray: colors.slate,
        gray: colors.gray,
        trueGray: colors.neutral,
      },
      scale: {
        101: "1.01",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  variants: {
    extend: {},
    scrollbar: ["dark", "rounded"],
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/typography")],
};
