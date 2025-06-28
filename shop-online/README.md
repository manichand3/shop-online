# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

//file structure

/src
┣ /assets 👉 Images, logos, icons, etc.
┣ /components 👉 Reusable UI parts (Header, Footer, ProductCard...)
┣ /layouts 👉 Common UI wrapper (like Layout.jsx with Header/Footer)
┣ /pages 👉 Actual page screens (Home, ProductDetail, Cart...)
┣ /context 👉 App-wide state (like AuthContext or CartContext)
┣ /services 👉 API call logic (axios/fetch wrappers)
┣ /routes 👉 Optional: for protected routes or custom routing logic
┣ /utils 👉 Helper functions (formatPrice, authToken, etc.)
┣ App.js 👉 App entry with Routes inside
┣ index.js 👉 React root rendering
