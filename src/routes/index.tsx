import { createFileRoute } from "@tanstack/react-router";
import { TitleButton } from "../components/button"

export const Route = createFileRoute("/")({ component: Home });

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="px-1 text-2xl font-bold">
      {children}
    </button>
  )
}

const SideBar = () => {
  return (
    <div className="w-1/3 text-center z-0">
      <div className="rounded-full aspect-square w-2/1 -translate-x-1/3 -translate-y-1/2 bg-[#006472]">
      </div>
    </div>
  )
};

// const gradientClass = "bg-linear-to-l from-[#49C5B1] to-[#002858]"
// bg-linear-to-l to-[#49C5B1] from-[#011A38] from-72% to-80%
const Title = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full z-20 text-white bg-linear-to-l from-[#0D006C] to-transparent from-90%">
      <div className="text-center mb-20">
        <h1 className="text-8xl font-bold">Title</h1>
        <h2 className="text-2xl font-semibold">Subtitle</h2>
      </div>
      <div className="flex flex-col items-center gap-4">
        <TitleButton>Start</TitleButton>
        <TitleButton>Level Select</TitleButton>
        <TitleButton>Statistics</TitleButton>
        <TitleButton>Skills</TitleButton>
      </div>
    </div>
  )
};

function Home() {
  return (
    <>
      <div className="flex h-svh bg-[#005F6C]">
        <SideBar/>
        <Title/>
      </div>
    </>
  );
}
