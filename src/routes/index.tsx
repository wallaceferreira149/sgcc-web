import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/layouts/Home";

export const Route = createFileRoute("/")({
	component: Home,
});
