import { createFileRoute } from "@tanstack/react-router";

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
    <div className="w-1/3 border-r text-center">
      pic or wtv
    </div>
  )
};

const Title = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="text-center mb-20">
        <h1 className="text-8xl font-bold">Title</h1>
        <h2 className="text-2xl font-semibold">Subtitle</h2>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button>Start</Button>
        <Button>Stats</Button>
        <Button>Levels</Button>
        <Button>Skills</Button>
        <Button>Credits</Button>
      </div>
    </div>
  )
};

function Home() {
  return (
    <>
      <div className="flex h-svh">
        <SideBar/>
        <Title/>
      </div>
    </>
  );
}
