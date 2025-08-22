// import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import AppProvider from "./context/AppProvider.tsx"
// Import critical CSS first to ensure basic styles load
import "@/styles/critical.css"
// Import full styles after critical CSS
import "@/styles/global.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
    // <React.StrictMode>
    <AppProvider>
        <App />
    </AppProvider>,
    // </React.StrictMode>
)
