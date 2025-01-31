import { createRoot } from "react-dom/client";

function App() {
    return (
        <div>
            <h1>Welcome to the template!</h1>
        </div>
    );
}

document.addEventListener("DOMContentLoaded", () => {
    const root = createRoot(document.getElementById("app")!);
    root.render(<App />);
});
