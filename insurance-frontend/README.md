# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
```md
│── /public                 # Static assets (favicon, images)
│── /src
│   │── /assets             # Icons, images
│   │── /components         # Reusable UI components
│   │── /features           # Redux slices for different functionalities
│   │   │── auth/           # Login, Register, Logout, Third-party auth
│   │   │── policies/       # Insurance policies (CRUD, details, approval)
│   │   │── cart/           # Cart management (add/remove policies)
│   │   │── orders/         # Order & payment processing
│   │   │── claims/         # Insurance claims submission & status tracking
│   │   │── analytics/      # Admin dashboard & analytics
│   │── /pages              # Main pages (React components for routes)
│   │── /services           # API services using Axios
│   │── /store              # Redux store configuration
│   │── /utils              # Helper functions
│   │── App.js              # Main app component
│   │── index.js            # Entry point
│── package.json
│── README.md
```