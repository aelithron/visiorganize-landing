"use client"

import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export default function Majik() {
  const searchParams = useSearchParams();
  const [showMajik, setShowMajik] = useState(searchParams.has("majik") && searchParams.get("majik") !== "false");
  const [triggered, setTriggered] = useState(false);
  const [triggerCount, setTriggerCount] = useState(0);
  useHotkeys('shift+backspace+t', () => setShowMajik(!showMajik), [showMajik])

  function handleClick() {
    setTriggered(true);
    setTriggerCount(triggerCount + 1);
    if (triggerCount < 2) {
      setTimeout(() => {
        setTriggered(false);
      }, 2000);
    } else {
      try {
        new Audio("https://neighborhood.hackclub.com/normal.mp3").play();
      } catch {
        alert("i tried to load the majik but failed :cry:");
      }
    }
  }

  function closeMajik() {
    setShowMajik(false);
    setTriggered(false);
    setTriggerCount(0);
  }

  return (
    <div>
      {triggered && (
        <div className="fixed top-0 left-0 w-full h-full z-50 bg-violet-300 dark:bg-violet-500">
          <div className="flex flex-col items-center justify-center p-8">
            <h1 className="font-semibold text-5xl">hi</h1>
            {triggerCount < 3 ? (
              <p className="text-2xl">the majik isn&apos;t strong enough yet...</p>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <p className="text-2xl">the majik is now strong enough :D</p>
                <button onClick={() => closeMajik()} className="bg-red-500 p-2 rounded-full mt-4 text-center justify-center"><FontAwesomeIcon icon={faClose} /> Close</button>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="fixed bottom-0 right-0 z-40">
        {showMajik && <button onClick={handleClick} className="bg-slate-500 m-4 p-2 rounded-full">✨ Majik</button>}
      </div>
    </div>
  )
}