import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "../components/button";
import { Dialog } from "../components/dialog";
import { Title } from "../components/title";
import { z } from "zod";

export const Route = createFileRoute("/levels")({
  component: Levels,
});

const zodDataSchema = z.object({
  title: z.string(),
  description: z.string(),
  learnings: z.string().array(),
  difficulty: z.number().int().min(1).max(5),
  label: z.number().int()
});
type zodData = z.infer<typeof zodDataSchema>;

const demoData: zodData[] = [
  {
    title: "Button Dungeon",
    description: `
      Alone in a platforming dungeon,
      you must parkour and puzzle your way to freedom.

      Button Dungeon is an uncomplete prototype of an adventure-puzzle platformer
      meant to include an in-depth story made over a weekend for the 5th Saturday Smash Jam.
    `,
    learnings: ["I learnt A", "I learnt b"],
    difficulty: 1,
    label: 1
  },
  {
    title: "Space Farm",
    description: `
      Survive the void of space by balancing resources and scraping by to finally grow
      a potato to live off of.
      Space Farm is yet another uncomplete prototype although of a resource management game
      made in 1 day for the Devs That Jam 14 game jam.
    `,
    learnings: ["I learnt A", "I learnt b"],
    difficulty: 3,
    label: 2
  },
  {
    title: "The Forest Cycle",
    description: `
      Suddenly, you find yourself in the middle of a dense forest at dawn.
      You have no clue why you're here, but you do know that when the sun falls,
      you fall asleep, and when it rises, you awaken.
      You must find a way out of the forest before the full moon rises again.
      
      The Forest Cycle is another uncompleted prototype although of a mysterious timed maze game
      made over 2 days for the DTJ16 game jam.
    `,
    learnings: ["I learnt A", "I learnt b"],
    difficulty: 2,
    label: 3
  },
  {
    title: "Rolled",
    description: `
      A devastating car crash occurs at the top of a high mountain.
      Bits and pieces of the car go flying everywhere, including a wheel.
      A wheel turn alive. Make it to the bottom of the mountain... or die.

      Rolled is a slightly more complete endless runner game that definately has an end, since
      this time, it was made over the time of several weeks.
    `,
    learnings: ["I learnt A", "I learnt b"],
    difficulty: 3,
    label: 4
  },
  {
    title: "Space Wave",
    description: `
      In a chokepoint in the galaxy, the only way to get through to the unknown, lies an impassable
      asteroid belty. It wraps around not only one but TWO planets, dubbed the "Twin-World Ring"...
      So, your job as a Guide is to lead a pilot into the belt and ride on the Twin-Planets'
      gravity to get up to speed so we can get past the unpassable.

      Space Wave is an actual endless runner where you dodge asteroids infinitely, its the project
      I began making games on in 2024 for the small 3rd Saturday Smash Jam, but then continued work all the way until
      the opening days of 2026, where v1.2 was on the doorstep of release.
    `,
    learnings: ["I learnt A", "I learnt b"],
    difficulty: 4,
    label: 5
  },
  {
    title: "Tankinator",
    description: `
      You carry the last survivors of the battle, the battle you lost. There is one last mission,
      kill the remnants of the army sent to capture you and escape, become the fabled Tankinator.

      Tankinator is a shoot-em-up game made following a tutorial then expanding upon it for a school assigment.
    `,
    learnings: ["I learnt A", "I learnt b"],
    difficulty: 3,
    label: 6
  },
  {
    title: "Cannon Fire",
    description: `
      the land is too harsh for infantry anymore, no horserider can survive. It is the sole
      job of artillery that will win the battle.

      Cannon Fire is a game currently being worked on, it is an artillery duel game or a worms-like
      where you must kill all enemies to win and where everything is destructable.
    `,
    learnings: ["I learnt A", "I learnt b"],
    difficulty: 5,
    label: 7
  },
];

// function Levels() {
//   const [level, setLevel] = useState<zodData | null>(null);

//   return (
//     <div className="flex flex-col h-full justify-center space-y-10">
//       <div className="items-center justify-center flex">
//         <Title>Levels</Title>
//       </div>
//       <div className="flex flex-row justify-evenly items-center">
//         <Button onClick={() => setLevel(demoData[0])}>Level 1</Button>
//         <Button onClick={() => setLevel(demoData[1])}>Level 2</Button>
//         <Button onClick={() => setLevel(demoData[2])}>Level 3</Button>
//         <Button onClick={() => setLevel(demoData[3])}>Level 4</Button>
//         <Button onClick={() => setLevel(demoData[4])}>Level 5</Button>
//         <Button onClick={() => setLevel(demoData[5])}>Level 6</Button>
//         <Button onClick={() => setLevel(demoData[6])}>Locked</Button>
//       </div>
//       <p>{level && level.description}</p>
//     </div>
//   );
// }

const Description = ({ description, stars }: { description: string, stars: number }) => {
    return (
        <div className="flex flex-col w-full">
            {/* description and difficulty */}
            <div className="border max-h-10 text-start px-2 overflow-y-scroll">{description}</div>
            <div className="border aspect-5/1 mt-3 text-center">{stars}</div>
        </div>
    )
}

const Screenshots = ({ screenshots }: { screenshots: string[] }) => {
    return (
        <div className="grid grid-cols-2 grid-flow-row w-full gap-1">
            {/* images and screenshots */}
            {/* {screenshots.map((screenshot) => (
                <div>
                    <img src={screenshot} />
                </div>
            ))} */}
            <div className="border aspect-video text-center mb-3 col-span-2">SCREENSHOT</div>
            <div className="border aspect-video text-center mb-3">SCREENSHOT</div>
            <div className="border aspect-video text-center mb-3">SCREENSHOT</div>
            <div className="border aspect-video text-center mb-3">SCREENSHOT</div>
            <div className="border aspect-video text-center mb-3">SCREENSHOT</div>
        </div>
    )
}

const Links = ({ learnings }: { learnings: string[] }) => {
    return (
        <div className="flex flex-col w-full">
            {/* learnings and external links */}
            <div className="border h-full text-center">{learnings}</div>
            <div className="border aspect-5/1 mt-3 text-center">DIFFICULTY STARS</div>
        </div>
    )
}

function Levels() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedLevel, setSelectedLevel] = useState<zodData | null>(null)

  const handleSelectLevel = (levelIdx: number) => {
    setSelectedLevel(demoData[levelIdx])
    setDialogOpen(true)
  }

  return (
    <div>
    <div className="flex h-full min-h-0 flex-col gap-6 overflow-hidden p-6 text-white sm:p-8">
      <div className="mx-auto rounded-3xl border border-white/10 bg-black/35 px-6 py-4 backdrop-blur-sm w-44 justify-self-center">
        <Title className="text-white w-32">Levels</Title>
      </div>
      <div className="flex min-h-0 grow items-center justify-center pb-32">
        <div className="w-full max-w-6xl rounded-4xl border border-white/10 bg-black/30 p-6 shadow-[0_24px_90px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:p-8">
          <div className="flex flex-wrap items-center justify-evenly gap-4">
            {demoData.map((level) => (
              <Button
                key={level.label - 1}
                className="rounded-2xl border-white/25 bg-white/8 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/14"
                onClick={() => handleSelectLevel(level.label - 1)}
              >
                Level {level.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
      <Dialog 
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        className="flex flex-col border max-w-5xl h-3/4 text-black"
        >
            <Title>{selectedLevel?.title}</Title>
            <div className="border w-1/2 mx-auto"></div>
            <Title className="font-light text-lg">Level {selectedLevel?.label}</Title>
            <div className="flex flex-row max-w-full grow mb-3 max-h-full mx-3 p-1 space-x-3">
                <Description description={selectedLevel?.description ?? ""} stars={selectedLevel?.difficulty ?? 0}/>
                <Screenshots screenshots={[""]}/>
                <Links learnings={selectedLevel?.learnings ?? [""]}/>
            </div>
        </Dialog>
    </div>
  );
}
