import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

function RootLayout() {
	return (
		<>
			<nav className="">links</nav>

			<Outlet />

			<TanStackRouterDevtools />
		</>
	);
}

export const Route = createRootRoute({
	component: RootLayout,
});
