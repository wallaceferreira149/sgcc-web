import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<div className="text-blue-500">Project cleaned</div>
	</StrictMode>,
);
