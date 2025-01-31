import { createRoot } from "react-dom/client";

function App() {
    return (
        <div>
            <h1>Welcome to the template!</h1>
        </div>
    );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);
root.render(<App />);