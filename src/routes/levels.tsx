import { createFileRoute } from "@tanstack/react-router";
import { Button } from "../components/button";
import { Title } from "../components/title";

export const Route = createFileRoute("/levels")({
  component: Levels,
});

function Levels() {
  return (
    <div className="flex flex-col h-full justify-center space-y-10">
      <div className="items-center justify-center flex">
        <Title>Levels</Title>
      </div>
      <div className="flex flex-row justify-evenly items-center">
        <Button>Level 1</Button>
        <Button>Level 2</Button>
        <Button>Level 3</Button>
        <Button>Level 4</Button>
        <Button>Level 5</Button>
        <Button>Level 6</Button>
        <Button>Locked</Button>
      </div>
    </div>
  );
}
