/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Pastikan baris ini ada, ini untuk App Router
    ],
    theme: {
      extend: {
        // Anda bisa menambahkan kustomisasi tema di sini jika perlu
      },
    },
    plugins: [],
  };