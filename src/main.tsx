import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { routeTree } from "./routeTree.gen";
import "./core/i18n";

const queryClient = new QueryClient({
	defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

const router = createRouter({
	routeTree,
	defaultPreload: "intent",
	context: { queryClient },
	defaultStaleTime: 0,
	basepath: "/",
});

// Register things for typesafety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const mode = localStorage.getItem("theme") || "dark";
localStorage.setItem('theme', mode);

// Register the router instance for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<NextUIProvider>
			<NextThemesProvider attribute="class" defaultTheme={mode}>
				<main className="text-foreground bg-background flex flex-col">
					<QueryClientProvider client={queryClient}>
						<RouterProvider router={router} />
						<ReactQueryDevtools initialIsOpen={false} />
					</QueryClientProvider>
				</main>
			</NextThemesProvider>
		</NextUIProvider>
	</StrictMode>,
);
