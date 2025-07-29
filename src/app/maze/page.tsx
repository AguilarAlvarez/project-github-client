"use client"
import Instructions from "@/components/maze/Instructions";
import Maze from "@/components/maze/Maze";
import { useState } from "react";
const MazeGamePage = () => {
    const [showinstruction, setShowInstructions] = useState(true)
    return (
        <main className="w-screen h-screen">
            {
                showinstruction ?
                    <Instructions onClose={() => setShowInstructions(false)}></Instructions> : <></>
            }
            <div>
                <Maze />
            </div>
        </main>
    );
};

export default MazeGamePage;