// import React from "react"
import ReactDOM from "react-dom/client"
// Import global styles first
import "@/styles/global.css"
import App from "./App.tsx"
import AppProvider from "./context/AppProvider.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
    // <React.StrictMode>
    <AppProvider>
        <App />
    </AppProvider>,
    // </React.StrictMode>
)
