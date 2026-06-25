import { createFileRoute } from "@tanstack/react-router";
import {
	Binary,
	Boxes,
	Cable,
	Cpu,
	Disc3,
	FileCode2,
	FolderArchive,
	Gamepad2,
	LayoutTemplate,
	Map as MapIcon,
	MemoryStick,
	MonitorPlay,
	MoveDiagonal,
	Orbit,
	Palette,
	PencilRuler,
	Radar,
	Rocket,
	ScanLine,
	Sigma,
	Split,
	Wrench,
} from "lucide-react";
import { type ComponentType, type SVGProps, useState } from "react";
import {
	SkillDescription,
	SkillNode,
	type SkillNodePosition,
	type SkillNodeStatus,
	SkillPath,
	type SkillPathConnection,
	SkillTree,
	SkillTreeContent,
} from "../components/skill-tree";
import { Title } from "../components/title";

type SkillTreeRouteNode = {
	title: string;
	description: string;
	icon: ComponentType<SVGProps<SVGSVGElement>>;
	position: SkillNodePosition;
	status: SkillNodeStatus;
};

type SkillTreeRouteConnection = {
	from: SkillTreeRouteNode;
	to: SkillTreeRouteNode;
};

const skillNodes = {
	programmingFundamentals: {
		title: "Programming Fundamentals",
		description:
			"Learn the core concepts of programming including variables, control flow, functions, debugging, and problem-solving.",
		icon: Binary,
		position: { x: 8, y: 50 },
		status: "active",
	},
	engineProgramming: {
		title: "Engine Fundamentals",
		description:
			"Understand how game engines are structured and how their core systems interact.",
		icon: Cpu,
		position: { x: 21, y: 14 },
		status: "available",
	},
	dataStructures: {
		title: "Data Structures",
		description:
			"Use efficient data organization techniques such as arrays, lists, trees, hash maps, and graphs.",
		icon: Boxes,
		position: { x: 35, y: 14 },
		status: "available",
	},
	memoryManagement: {
		title: "Memory Management",
		description:
			"Control allocation, lifetime, and performance characteristics of application memory.",
		icon: MemoryStick,
		position: { x: 49, y: 14 },
		status: "inactive",
	},
	multithreading: {
		title: "Multithreading",
		description:
			"Execute work across multiple CPU cores while managing synchronization and concurrency.",
		icon: Split,
		position: { x: 63, y: 14 },
		status: "inactive",
	},
	engineArchitecture: {
		title: "Engine Architecture",
		description:
			"Design scalable engine systems including ECS, asset management, and runtime subsystems.",
		icon: LayoutTemplate,
		position: { x: 77, y: 14 },
		status: "inactive",
	},
	graphicsRendering: {
		title: "Graphics & Rendering",
		description:
			"Learn how games transform data into images displayed on screen.",
		icon: MonitorPlay,
		position: { x: 21, y: 38 },
		status: "available",
	},
	linearAlgebra: {
		title: "Linear Algebra",
		description:
			"Apply vectors, matrices, and transformations to represent objects and movement in 2D and 3D space.",
		icon: Sigma,
		position: { x: 35, y: 38 },
		status: "available",
	},
	graphicsApis: {
		title: "Graphics APIs",
		description:
			"Use graphics libraries such as OpenGL, Vulkan, or DirectX to communicate with the GPU.",
		icon: Cable,
		position: { x: 49, y: 38 },
		status: "inactive",
	},
	shaderProgramming: {
		title: "Shader Programming",
		description:
			"Write GPU programs that control rendering, lighting, materials, and visual effects.",
		icon: Palette,
		position: { x: 63, y: 38 },
		status: "inactive",
	},
	customRenderingPipeline: {
		title: "Custom Rendering Pipeline",
		description:
			"Build the complete process that converts scene data into rendered frames.",
		icon: ScanLine,
		position: { x: 77, y: 38 },
		status: "inactive",
	},
	physicsSimulation: {
		title: "Physics & Simulation",
		description:
			"Model how objects move, interact, and respond to forces within a game world.",
		icon: Orbit,
		position: { x: 21, y: 62 },
		status: "available",
	},
	vectorMathematics: {
		title: "Vector Mathematics",
		description:
			"Use vectors to represent position, direction, velocity, and other physical properties.",
		icon: MoveDiagonal,
		position: { x: 35, y: 62 },
		status: "available",
	},
	collisionDetection: {
		title: "Collision Detection",
		description:
			"Determine when objects intersect and generate collision information.",
		icon: Radar,
		position: { x: 49, y: 62 },
		status: "inactive",
	},
	rigidBodyDynamics: {
		title: "Rigid Body Dynamics",
		description:
			"Simulate realistic motion using forces, momentum, mass, and constraints.",
		icon: Disc3,
		position: { x: 63, y: 62 },
		status: "inactive",
	},
	physicsEngineDesign: {
		title: "Physics Engine Design",
		description:
			"Create systems that manage simulation, collision resolution, and world interactions.",
		icon: Wrench,
		position: { x: 77, y: 62 },
		status: "inactive",
	},
	toolsGameplay: {
		title: "Tools & Gameplay",
		description:
			"Develop the systems and workflows that enable content creation and game logic.",
		icon: Gamepad2,
		position: { x: 21, y: 86 },
		status: "available",
	},
	assetManagement: {
		title: "Asset Management",
		description:
			"Import, organize, and efficiently load game resources such as models, textures, and audio.",
		icon: FolderArchive,
		position: { x: 35, y: 86 },
		status: "available",
	},
	sceneManagement: {
		title: "Scene Management",
		description: "Create and manage game worlds, entities, and level data.",
		icon: MapIcon,
		position: { x: 49, y: 86 },
		status: "inactive",
	},
	scriptingSystems: {
		title: "Scripting Systems",
		description:
			"Allow gameplay behavior to be created and modified through scripts or embedded languages.",
		icon: FileCode2,
		position: { x: 63, y: 86 },
		status: "inactive",
	},
	editorDevelopment: {
		title: "Editor Development",
		description:
			"Build tools that enable developers and designers to create and debug content efficiently.",
		icon: PencilRuler,
		position: { x: 77, y: 86 },
		status: "inactive",
	},
	customGameEngine: {
		title: "Custom Game Engine",
		description:
			"Design, implement, and ship a complete game engine integrating rendering, physics, tooling, asset management, gameplay systems, and runtime architecture into a cohesive platform for creating games.",
		icon: Rocket,
		position: { x: 92, y: 50 },
		status: "inactive",
	},
} satisfies Record<string, SkillTreeRouteNode>;

const skillConnections = [
	{
		from: skillNodes.programmingFundamentals,
		to: skillNodes.engineProgramming,
	},
	{
		from: skillNodes.programmingFundamentals,
		to: skillNodes.graphicsRendering,
	},
	{
		from: skillNodes.programmingFundamentals,
		to: skillNodes.physicsSimulation,
	},
	{
		from: skillNodes.programmingFundamentals,
		to: skillNodes.toolsGameplay,
	},
	{
		from: skillNodes.engineProgramming,
		to: skillNodes.dataStructures,
	},
	{
		from: skillNodes.dataStructures,
		to: skillNodes.memoryManagement,
	},
	{
		from: skillNodes.memoryManagement,
		to: skillNodes.multithreading,
	},
	{
		from: skillNodes.multithreading,
		to: skillNodes.engineArchitecture,
	},
	{
		from: skillNodes.graphicsRendering,
		to: skillNodes.linearAlgebra,
	},
	{
		from: skillNodes.linearAlgebra,
		to: skillNodes.graphicsApis,
	},
	{
		from: skillNodes.graphicsApis,
		to: skillNodes.shaderProgramming,
	},
	{
		from: skillNodes.shaderProgramming,
		to: skillNodes.customRenderingPipeline,
	},
	{
		from: skillNodes.physicsSimulation,
		to: skillNodes.vectorMathematics,
	},
	{
		from: skillNodes.vectorMathematics,
		to: skillNodes.collisionDetection,
	},
	{
		from: skillNodes.collisionDetection,
		to: skillNodes.rigidBodyDynamics,
	},
	{
		from: skillNodes.rigidBodyDynamics,
		to: skillNodes.physicsEngineDesign,
	},
	{
		from: skillNodes.toolsGameplay,
		to: skillNodes.assetManagement,
	},
	{
		from: skillNodes.assetManagement,
		to: skillNodes.sceneManagement,
	},
	{
		from: skillNodes.sceneManagement,
		to: skillNodes.scriptingSystems,
	},
	{
		from: skillNodes.scriptingSystems,
		to: skillNodes.editorDevelopment,
	},
	{
		from: skillNodes.engineArchitecture,
		to: skillNodes.customGameEngine,
	},
	{
		from: skillNodes.customRenderingPipeline,
		to: skillNodes.customGameEngine,
	},
	{
		from: skillNodes.physicsEngineDesign,
		to: skillNodes.customGameEngine,
	},
	{
		from: skillNodes.editorDevelopment,
		to: skillNodes.customGameEngine,
	},
] satisfies SkillTreeRouteConnection[];

const renderedSkillConnections: SkillPathConnection[] = skillConnections.map(
	({ from, to }) => ({
		from: from.position,
		to: to.position,
		status: to.status,
	}),
);

type SkillNodeId = keyof typeof skillNodes;

export const Route = createFileRoute("/skills")({
	component: Skills,
});

function Skills() {
	const [selectedSkillNodeId, setSelectedSkillNodeId] = useState<SkillNodeId>(
		"programmingFundamentals",
	);
	const selectedSkillNode = skillNodes[selectedSkillNodeId];
	const SelectedSkillIcon = selectedSkillNode.icon;

	return (
		<div className="grid h-full min-h-0 grid-rows-[auto_minmax(0,1fr)_auto] gap-3 overflow-hidden">
			<span className="shrink-0">
				<Title>Skill Tree</Title>
			</span>
			<div className="min-h-0">
				<SkillTree className="h-full">
					<SkillTreeContent className="justify-center">
						<SkillPath
							canvasClassName="h-full min-h-0"
							className="h-full"
							connections={renderedSkillConnections}
						>
							{Object.entries(skillNodes).map(([id, skillNode]) => {
								const Icon = skillNode.icon;
								const skillNodeId = id as SkillNodeId;

								return (
									<SkillNode
										aria-pressed={selectedSkillNodeId === skillNodeId}
										key={id}
										icon={<Icon />}
										name={skillNode.title}
										onClick={() => setSelectedSkillNodeId(skillNodeId)}
										position={skillNode.position}
										selected={selectedSkillNodeId === skillNodeId}
										status={skillNode.status}
									/>
								);
							})}
						</SkillPath>
					</SkillTreeContent>
				</SkillTree>
			</div>
			<SkillDescription
				className="mb-3 min-h-28 shrink-0"
				description={selectedSkillNode.description}
				icon={<SelectedSkillIcon />}
				showDescription={true}
				title={selectedSkillNode.title}
			/>
		</div>
	);
}
