import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

export const UIElement = () => {
  return <div>Hello</div>;
};

function Home() {
  return (
    <>
      <div className="flex flex-row space-x-3 h-svh mx-1">
        <div className="w-1/3 border">hello</div>
        <div className="max-w-full border grow">Hello</div>
      </div>
    </>
  );
}
