import type * as React from "react";

export const backgroundOptions = [
	{ value: "starry-night", label: "Starry Night" },
	{ value: "space-invaders", label: "Mars Base" },
	{ value: "forest", label: "Forest" },
] as const;

export type BackgroundVariant = (typeof backgroundOptions)[number]["value"];

export const defaultBackgroundVariant: BackgroundVariant = "starry-night";

export const isBackgroundVariant = (
	value: string,
): value is BackgroundVariant =>
	backgroundOptions.some((option) => option.value === value);

const starField = [
	{ left: "7%", top: "10%", size: "0.28rem", opacity: 0.6 },
	{ left: "14%", top: "18%", size: "0.2rem", opacity: 0.55 },
	{ left: "21%", top: "9%", size: "0.16rem", opacity: 0.7 },
	{ left: "30%", top: "24%", size: "0.3rem", opacity: 0.65 },
	{ left: "38%", top: "13%", size: "0.18rem", opacity: 0.45 },
	{ left: "44%", top: "29%", size: "0.22rem", opacity: 0.55 },
	{ left: "56%", top: "8%", size: "0.16rem", opacity: 0.5 },
	{ left: "63%", top: "19%", size: "0.24rem", opacity: 0.65 },
	{ left: "72%", top: "11%", size: "0.18rem", opacity: 0.45 },
	{ left: "80%", top: "24%", size: "0.26rem", opacity: 0.55 },
	{ left: "89%", top: "15%", size: "0.18rem", opacity: 0.5 },
	{ left: "93%", top: "30%", size: "0.22rem", opacity: 0.6 },
	{ left: "11%", top: "38%", size: "0.2rem", opacity: 0.5 },
	{ left: "24%", top: "44%", size: "0.14rem", opacity: 0.6 },
	{ left: "47%", top: "40%", size: "0.18rem", opacity: 0.45 },
	{ left: "68%", top: "36%", size: "0.14rem", opacity: 0.6 },
	{ left: "83%", top: "43%", size: "0.18rem", opacity: 0.5 },
] as const;

const marsStars = [
	{ x: 12, y: 10, size: 1, color: "#f8fafc" },
	{ x: 25, y: 15, size: 1, color: "#f8fafc" },
	{ x: 41, y: 8, size: 1, color: "#f6cfc2" },
	{ x: 58, y: 18, size: 1, color: "#f8fafc" },
	{ x: 77, y: 11, size: 1, color: "#f8fafc" },
	{ x: 93, y: 20, size: 1, color: "#fde68a" },
	{ x: 108, y: 13, size: 1, color: "#f8fafc" },
	{ x: 144, y: 16, size: 1, color: "#f8fafc" },
	{ x: 150, y: 10, size: 1, color: "#f8fafc" },
] as const;

const marsWindowOffsets = [
	{ x: 68, y: 60 },
	{ x: 72, y: 60 },
	{ x: 76, y: 60 },
	{ x: 80, y: 60 },
	{ x: 84, y: 60 },
	{ x: 88, y: 60 },
	{ x: 68, y: 64 },
	{ x: 72, y: 64 },
	{ x: 76, y: 64 },
	{ x: 80, y: 64 },
	{ x: 84, y: 64 },
	{ x: 88, y: 64 },
] as const;

const solarPanelColumns = [0, 3, 6, 9] as const;

const forestTrees = [
	{ x: 8, height: 24, width: 8 },
	{ x: 16, height: 18, width: 6 },
	{ x: 23, height: 27, width: 9 },
	{ x: 34, height: 20, width: 7 },
	{ x: 46, height: 28, width: 9 },
	{ x: 57, height: 18, width: 6 },
	{ x: 67, height: 24, width: 8 },
	{ x: 79, height: 20, width: 7 },
	{ x: 90, height: 26, width: 8 },
] as const;

const BackgroundFrame = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div
			aria-hidden="true"
			className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
		>
			{children}
		</div>
	);
};

const StarryNightBackground = () => {
	return (
		<BackgroundFrame>
			<div className="absolute inset-0 bg-[linear-gradient(180deg,#040711_0%,#0a1120_45%,#111c30_100%)]" />
			<div className="absolute inset-y-0 left-0 w-[34%] bg-[radial-gradient(circle_at_24%_48%,rgba(170,208,255,0.55)_0%,rgba(108,143,202,0.24)_32%,rgba(12,16,28,0)_72%)]" />
			<div className="absolute inset-x-0 bottom-0 h-[28%] bg-[linear-gradient(180deg,rgba(4,6,12,0)_0%,rgba(4,6,12,0.82)_100%)]" />
			<div className="absolute -bottom-[6%] left-[-6%] h-[22%] w-[52%] rounded-t-[100%] bg-[#070b16]" />
			<div className="absolute bottom-0 left-[34%] h-[12%] w-[32%] rounded-t-[100%] bg-[#060a14]" />
			<div className="absolute bottom-0 right-[-8%] h-[18%] w-[64%] rounded-t-[100%] bg-[#050811]" />
			{starField.map((star) => (
				<span
					key={`${star.left}-${star.top}`}
					className="absolute rounded-full bg-white"
					style={{
						left: star.left,
						top: star.top,
						width: star.size,
						height: star.size,
						opacity: star.opacity,
					}}
				/>
			))}
		</BackgroundFrame>
	);
};

const MarsBaseBackground = () => {
	return (
		<BackgroundFrame>
			<div className="absolute inset-0 bg-[#130d14]" />
			<svg
				aria-hidden="true"
				className="absolute inset-0 h-full w-full"
				preserveAspectRatio="xMidYMid slice"
				shapeRendering="crispEdges"
				style={{ imageRendering: "pixelated" }}
				viewBox="0 0 160 90"
			>
				<rect width="160" height="90" fill="#130d14" />
				<rect width="160" height="18" y="10" fill="#21131f" />
				<rect width="160" height="18" y="28" fill="#4a2433" />
				<rect width="160" height="22" y="46" fill="#9d4f42" />
				<rect width="160" height="22" y="68" fill="#7d392f" />
				{marsStars.map((star) => (
					<rect
						key={`${star.x}-${star.y}`}
						fill={star.color}
						height={star.size}
						width={star.size}
						x={star.x}
						y={star.y}
					/>
				))}
				<rect fill="#f7d07c" height="1" width="6" x="123" y="12" />
				<rect fill="#f7d07c" height="1" width="8" x="122" y="13" />
				<rect fill="#f1a35d" height="2" width="10" x="121" y="14" />
				<rect fill="#f1a35d" height="2" width="10" x="121" y="16" />
				<rect fill="#f1a35d" height="1" width="8" x="122" y="18" />
				<rect fill="#f1a35d" height="1" width="6" x="123" y="19" />
				<rect fill="#572232" height="10" width="18" x="0" y="50" />
				<rect fill="#572232" height="14" width="18" x="10" y="46" />
				<rect fill="#572232" height="18" width="18" x="24" y="42" />
				<rect fill="#572232" height="12" width="16" x="40" y="48" />
				<rect fill="#572232" height="16" width="22" x="104" y="44" />
				<rect fill="#572232" height="12" width="18" x="124" y="48" />
				<rect fill="#793531" height="8" width="30" x="0" y="60" />
				<rect fill="#793531" height="12" width="30" x="18" y="56" />
				<rect fill="#793531" height="10" width="28" x="44" y="58" />
				<rect fill="#793531" height="14" width="36" x="96" y="54" />
				<rect fill="#793531" height="10" width="28" x="128" y="58" />
				<rect fill="#b55e46" height="4" width="160" x="0" y="68" />
				<rect fill="#8f4537" height="18" width="160" x="0" y="72" />
				<g transform="translate(16 0)">
					<rect fill="#dce0db" height="2" width="8" x="48" y="58" />
					<rect fill="#dce0db" height="2" width="12" x="46" y="60" />
					<rect fill="#dce0db" height="2" width="16" x="44" y="62" />
					<rect fill="#c8cdca" height="6" width="20" x="42" y="64" />
					<rect fill="#a7afaf" height="6" width="2" x="60" y="64" />
					<rect fill="#bcc2c0" height="2" width="4" x="62" y="64" />
					<rect fill="#dce0db" height="14" width="30" x="64" y="56" />
					<rect fill="#edf1eb" height="2" width="30" x="64" y="56" />
					<rect fill="#a7afaf" height="14" width="2" x="92" y="56" />
					{marsWindowOffsets.map((window) => (
						<rect
							key={`${window.x}-${window.y}`}
							fill="#76b7ff"
							height="2"
							width="2"
							x={window.x}
							y={window.y}
						/>
					))}
					<rect fill="#d1d6d3" height="4" width="10" x="94" y="52" />
					<rect fill="#c4cac7" height="14" width="8" x="95" y="56" />
					<rect fill="#b0b7b6" height="18" width="6" x="96" y="48" />
					<rect fill="#e6ebe6" height="4" width="4" x="97" y="44" />
					<rect fill="#c8cdca" height="4" width="2" x="98" y="40" />
					<rect fill="#f08b62" height="2" width="2" x="98" y="38" />
					<rect fill="#dce0db" height="2" width="8" x="106" y="58" />
					<rect fill="#dce0db" height="2" width="12" x="104" y="60" />
					<rect fill="#dce0db" height="2" width="16" x="102" y="62" />
					<rect fill="#c8cdca" height="6" width="20" x="100" y="64" />
					<rect fill="#a7afaf" height="6" width="2" x="118" y="64" />
					<rect fill="#d4ae71" height="2" width="6" x="74" y="70" />
					<rect fill="#d4ae71" height="2" width="10" x="88" y="70" />
					<rect fill="#314764" height="4" width="14" x="28" y="70" />
					<rect fill="#314764" height="4" width="14" x="118" y="70" />
					{solarPanelColumns.map((offset) => (
						<rect
							key={`left-panel-${offset}`}
							fill="#79b8ff"
							height="1"
							width="2"
							x={29 + offset}
							y="71"
						/>
					))}
					{solarPanelColumns.map((offset) => (
						<rect
							key={`right-panel-${offset}`}
							fill="#79b8ff"
							height="1"
							width="2"
							x={119 + offset}
							y="71"
						/>
					))}
					<rect fill="#5b6162" height="4" width="2" x="34" y="74" />
					<rect fill="#5b6162" height="4" width="2" x="124" y="74" />
					<rect fill="#d6d0c8" height="3" width="8" x="110" y="76" />
					<rect fill="#bcae9e" height="2" width="4" x="112" y="74" />
					<rect fill="#6b5443" height="2" width="2" x="111" y="79" />
					<rect fill="#6b5443" height="2" width="2" x="116" y="79" />
				</g>
				<rect fill="#5b2a25" height="2" width="10" x="58" y="82" />
				<rect fill="#5b2a25" height="2" width="8" x="136" y="80" />
			</svg>
		</BackgroundFrame>
	);
};

const ForestBackground = () => {
	return (
		<BackgroundFrame>
			<div className="absolute inset-0 bg-[linear-gradient(180deg,#07131b_0%,#102521_48%,#1a3d2b_100%)]" />
			<div className="absolute inset-x-0 top-0 h-[44%] bg-[radial-gradient(circle_at_30%_22%,rgba(209,235,255,0.16)_0%,rgba(168,214,194,0.08)_20%,rgba(7,19,27,0)_44%)]" />
			<svg
				aria-hidden="true"
				className="absolute inset-0 h-full w-full"
				preserveAspectRatio="none"
				viewBox="0 0 100 100"
			>
				<path
					d="M0 66 C16 56 29 60 44 54 C59 48 74 52 100 46 L100 100 L0 100 Z"
					fill="#173828"
					opacity="0.55"
				/>
				<path
					d="M0 78 C17 68 37 73 53 66 C67 61 81 62 100 58 L100 100 L0 100 Z"
					fill="#0f271b"
					opacity="0.9"
				/>
				{forestTrees.map((tree) => (
					<g key={tree.x} transform={`translate(${tree.x} 76)`}>
						<rect
							x={-0.5}
							y={6}
							width="1"
							height={tree.height / 7}
							fill="#08140d"
						/>
						<polygon
							points={`0,${-tree.height / 3} ${tree.width / 2},7 ${-tree.width / 2},7`}
							fill="#102a1d"
						/>
						<polygon
							points={`0,${-tree.height / 4.8} ${tree.width / 2.6},4 ${-tree.width / 2.6},4`}
							fill="#143523"
						/>
					</g>
				))}
			</svg>
		</BackgroundFrame>
	);
};

export const Background = ({
	variant,
	className,
}: {
	variant: BackgroundVariant;
	className?: string;
}) => {
	return (
		<div className={className}>
			{variant === "starry-night" ? <StarryNightBackground /> : null}
			{variant === "space-invaders" ? <MarsBaseBackground /> : null}
			{variant === "forest" ? <ForestBackground /> : null}
		</div>
	);
};
