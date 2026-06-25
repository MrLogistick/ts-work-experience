import type * as React from "react";

export type SkillNodePosition = {
	x: number;
	y: number;
};

export type SkillNodeStatus = "inactive" | "available" | "active";

export type SkillPathConnection = {
	from: SkillNodePosition;
	to: SkillNodePosition;
	status?: SkillNodeStatus;
};

export const SkillTree = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={`h-full min-h-0 grow flex flex-col ${className ?? ""}`}>
			{children}
		</div>
	);
};

export const SkillTreeContent = ({
	children,
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement> & {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div
			{...props}
			className={`min-h-0 grow overflow-hidden flex flex-row items-stretch gap-4 px-4 py-3 ${className ?? ""}`}
		>
			{children}
		</div>
	);
};

export const SkillPath = ({
	children,
	canvasClassName,
	className,
	pathName,
	connections,
	...props
}: React.HTMLAttributes<HTMLDivElement> & {
	children: React.ReactNode;
	canvasClassName?: string;
	className?: string;
	pathName?: string;
	connections?: SkillPathConnection[];
}) => {
	return (
		<div
			{...props}
			className={`flex min-h-0 w-full min-w-0 grow basis-0 flex-col items-center gap-2 ${className ?? ""}`}
		>
			{pathName ? <span className="font-bold text-lg">{pathName}</span> : null}
			<div
				className={`relative h-full min-h-0 w-full overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/70 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ${canvasClassName ?? ""}`}
			>
				<svg
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 h-full w-full"
					preserveAspectRatio="none"
					viewBox="0 0 100 100"
				>
					{connections?.map(({ from, to, status = "inactive" }) => {
						const controlX = (from.x + to.x) / 2;
						const stroke =
							status === "active"
								? "rgba(34, 197, 94, 0.8)"
								: status === "available"
									? "rgba(255, 255, 255, 0.45)"
									: "rgba(113, 113, 122, 0.45)";

						return (
							<path
								key={`${from.x}-${from.y}-${to.x}-${to.y}`}
								d={`M ${from.x} ${from.y} C ${controlX} ${from.y}, ${controlX} ${to.y}, ${to.x} ${to.y}`}
								fill="none"
								stroke={stroke}
								strokeWidth="2"
								vectorEffect="non-scaling-stroke"
							/>
						);
					})}
				</svg>
				{children}
			</div>
		</div>
	);
};

const skillNodeStatusClasses: Record<SkillNodeStatus, string> = {
	inactive: "border-zinc-500/45 text-zinc-500/60",
	available: "border-white text-white",
	active: "border-green-500 text-green-400",
};

export const SkillNode = ({
	icon,
	name,
	status,
	active,
	selected,
	position,
	className,
	style,
	...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
	icon: React.ReactNode;
	name: string;
	status?: SkillNodeStatus;
	active?: boolean;
	selected?: boolean;
	position?: SkillNodePosition;
}) => {
	const resolvedStatus = status ?? (active ? "active" : "inactive");

	return (
		<button
			{...props}
			type="button"
			className={`flex aspect-square w-[clamp(4.6rem,5.9vw,6.3rem)] cursor-pointer appearance-none flex-col items-center justify-center gap-1 rounded-full border-2 bg-zinc-950 text-center shadow-[0_0_0_1px_rgba(9,9,11,0.9)] outline-none transition-[color,border-color,outline-color,outline-offset] duration-200 ${selected ? "outline-[3px] outline-solid outline-blue-600/70 outline-offset-[4px]" : ""} focus-visible:outline-[3px] focus-visible:outline-solid focus-visible:outline-blue-600/70 focus-visible:outline-offset-[4px] ${position ? "absolute -translate-x-1/2 -translate-y-1/2" : "shrink-0"} ${selected ? "z-20" : "z-10"} ${skillNodeStatusClasses[resolvedStatus]} ${className ?? ""}`}
			style={
				position
					? {
							...style,
							left: `${position.x}%`,
							top: `${position.y}%`,
						}
					: style
			}
		>
			<span
				aria-hidden="true"
				className="flex items-center justify-center text-base leading-none [&>svg]:h-[clamp(0.95rem,1.5vw,1.25rem)] [&>svg]:w-[clamp(0.95rem,1.5vw,1.25rem)]"
			>
				{icon}
			</span>
			<span className="max-w-[84%] text-[clamp(0.46rem,0.72vw,0.64rem)] font-medium leading-[1.05]">
				{name}
			</span>
		</button>
	);
};

export const SkillDescription = ({
	icon,
	title,
	description,
	className,
	showDescription,
	...props
}: React.HTMLAttributes<HTMLDivElement> & {
	icon?: React.ReactNode;
	title: string;
	description: string;
	className?: string;
	showDescription?: boolean;
}) => {
	return (
		<div
			{...props}
			className={`mx-4 rounded-[1.75rem] border border-white/10 bg-zinc-950/70 p-4 ${className ?? ""}`}
		>
			<div className="flex h-full items-center justify-center gap-5">
				{icon ? (
					<div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-white [&>svg]:h-7 [&>svg]:w-7">
						{icon}
					</div>
				) : null}
				<div className="max-w-4xl text-left">
					<h3 className="text-lg font-semibold">{title}</h3>
					{showDescription ? (
						<p className="mt-2 text-sm leading-relaxed text-zinc-300">
							{description}
						</p>
					) : null}
				</div>
			</div>
		</div>
	);
};
