import { createFileRoute } from "@tanstack/react-router";
import { Button } from "../components/button";
import { Title } from "../components/title";
import { z } from "zod"
import { useState } from "react";

export const Route = createFileRoute("/dialog")({
  component: Dialog,
});

const zodDataSchema = z.object({
  title: z.string(),
  description: z.string(),
  learnings: z.string().array(),
  difficulty: z.number().int().min(1).max(5)
})
type zodData = z.infer<typeof zodDataSchema>

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
  },
  {
    title: "Space Farm",
    description: `
      Survive the void of space by balancing resources and scraping by to finally grow
      a potato to live off of.

      Space Farm is yet another uncomplete prototype although of a resource management game
      made in 1 day for the Devs Thjat Jam 14 game jam.
    `,
    learnings: ["I learnt A", "I learnt b"],
    difficulty: 3,
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
  },  {
    title: "Tankinator",
    description: `
      You carry the last survivors of the battle, the battle you lost. There is one last mission,
      kill the remnants of the army sent to capture you and escape, become the fabled Tankinator.

      Tankinator is a shoot-em-up game made following a tutorial then expanding upon it for a school assigment.
    `,
    learnings: ["I learnt A", "I learnt b"],
    difficulty: 3,
  },  {
    title: "Cannon Fire",
    description: `
      the land is too harsh for infantry anymore, no horserider can survive. It is the sole
      job of artillery that will win the battle.

      Cannon Fire is a game currently being worked on, it is an artillery duel game or a worms-like
      where you must kill all enemies to win and where everything is destructable.
    `,
    learnings: ["I learnt A", "I learnt b"],
    difficulty: 5,
  },
]

const Description = () => {
    return (
        <div className="flex flex-col w-full">
            {/* description and difficulty */}
            <div className="border h-full text-center">DESCRIPTION</div>
            <div className="border aspect-5/1 mt-3 text-center">DIFFICULTY STARS</div>
        </div>
    )
}

const Screenshots = () => {
    return (
        <div className="grid grid-cols-2 grid-flow-row w-full gap-1">
            {/* images and screenshots */}
            <div className="border aspect-video text-center mb-3 col-span-2">SCREENSHOT</div>
            <div className="border aspect-video text-center mb-3">SCREENSHOT</div>
            <div className="border aspect-video text-center mb-3">SCREENSHOT</div>
            <div className="border aspect-video text-center mb-3">SCREENSHOT</div>
            <div className="border aspect-video text-center mb-3">SCREENSHOT</div>
        </div>
    )
}

const Links = () => {
    return (
        <div className="flex flex-col w-full">
            {/* learnings and external links */}
            <div className="border h-full text-center">LEARNINGS</div>
            <div className="border aspect-5/1 mt-3 text-center">DIFFICULTY STARS</div>
        </div>
    )
}

function Dialog() {
    const currentItem = 0
    const displayItem = demoData[currentItem]
    const levelNumber = currentItem + 1

    return (
        <div className="flex flex-col h-full justify-center">
        <div className="flex flex-col border max-w-full aspect-59.5/30 mx-72">

            <Title>{displayItem.title}</Title>
            <div className="border w-1/2 mx-auto"></div>
            <Title className="font-light text-lg">Level {levelNumber}</Title>
            <div className="flex flex-row max-w-full grow mb-3 max-h-full mx-3 p-1 space-x-3">
                <Description/>
                <Screenshots/>
                <Links/>
            </div>
        </div>
        </div>
    );
}
