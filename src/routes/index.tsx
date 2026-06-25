import { createFileRoute } from "@tanstack/react-router";
import { TitleButton } from "../components/button";
import { getRouter } from "../router";

export const Route = createFileRoute("/")({ component: Home });

const router = getRouter();

// const gradientClass = "bg-linear-to-l from-[#49C5B1] to-[#002858]"
// bg-linear-to-l to-[#49C5B1] from-[#011A38] from-72% to-80%

const Title = () => {
	return (
		<div className="z-20 h-full w-full -translate-x-14 -translate-y-10 text-white sm:-translate-y-12">
			<div className="flex h-full w-full max-w-4xl flex-col justify-center px-8 sm:px-16 lg:px-24">
				<div className="flex flex-col items-center gap-20">
					<div className="text-center">
						<h1 className="text-8xl font-bold">Logan Wurst</h1>
						<h2 className="-translate-y-3 text-2xl font-semibold">
							Blah Blah funny joke
						</h2>
					</div>
					<div className="flex flex-col items-center gap-4">
						<TitleButton>Start</TitleButton>
						<TitleButton onClick={() => router.navigate({ to: "/levels" })}>
							Level Select
						</TitleButton>
						<TitleButton>Statistics</TitleButton>
						<TitleButton onClick={() => router.navigate({ to: "/skills" })}>
							Skills
						</TitleButton>
					</div>
				</div>
			</div>
		</div>
	);
};

function Home() {
	return (
		<div className="h-full min-h-0 overflow-hidden">
			<Title />
		</div>
	);
}
