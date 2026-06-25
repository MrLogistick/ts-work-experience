import { TanStackDevtools } from "@tanstack/react-devtools";
import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import type { TRPCOptionsProxy } from "@trpc/tanstack-react-query";
import { useEffect, useState } from "react";
import type { TRPCRouter } from "#/integrations/trpc/router";
import {
	Background,
	type BackgroundVariant,
	backgroundOptions,
	defaultBackgroundVariant,
	isBackgroundVariant,
} from "../components/background";
import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";
import appCss from "../styles.css?url";

interface MyRouterContext {
	queryClient: QueryClient;

	trpc: TRPCOptionsProxy<TRPCRouter>;
}

const backgroundStorageKey = "app-background-variant";

export const Route = createRootRouteWithContext<MyRouterContext>()({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "TanStack Start Starter",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	const [background, setBackground] = useState<BackgroundVariant>(
		defaultBackgroundVariant,
	);

	useEffect(() => {
		const storedBackground = window.localStorage.getItem(backgroundStorageKey);

		if (storedBackground && isBackgroundVariant(storedBackground)) {
			setBackground(storedBackground);
		}
	}, []);

	useEffect(() => {
		window.localStorage.setItem(backgroundStorageKey, background);
	}, [background]);

	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body className="h-svh overflow-hidden bg-[#040711] text-white">
				<div className="relative h-svh overflow-hidden">
					<Background className="absolute inset-0" variant={background} />
					<div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-end p-4 sm:p-6">
						<label className="pointer-events-auto flex w-full max-w-[13rem] flex-col gap-2 rounded-[1.25rem] border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-sm">
							<span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
								Background
							</span>
							<select
								className="rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-white outline-none transition-colors focus:border-white/30"
								onChange={(event) =>
									setBackground(event.target.value as BackgroundVariant)
								}
								value={background}
							>
								{backgroundOptions.map((option) => (
									<option key={option.value} value={option.value}>
										{option.label}
									</option>
								))}
							</select>
						</label>
					</div>
					<div className="relative z-10 flex h-full min-h-0 flex-col">
						<div className="h-20 shrink-0 sm:h-24" />
						<div className="min-h-0 grow">{children}</div>
					</div>
				</div>
				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
						TanStackQueryDevtools,
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
