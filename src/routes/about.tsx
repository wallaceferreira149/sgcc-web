import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/layouts/About";

export const Route = createFileRoute("/about")({
	component: About,
});
