import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import logo from "@/public/logo.webp";
import screenshot1 from "@/public/screenshots/1.webp";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="flex flex-col bg-gradient-to-b from-[#c9def4] to-[#f5ccd4] dark:from-[#0E0725] dark:to-[#5C03BC] min-w-screen text-center p-8 md:px-20">
        <div className="flex gap-4 text-center items-center justify-center mb-2">
          <Image src={logo} alt="Visiorganize Logo" width={70} height={70} />
          <h1 className={`font-semibold text-3xl`}>Visiorganize</h1>
        </div>
        <p>The ultimate tool to organize software development work.</p>
        <div className="mt-4"><Link href={"https://visi.axionspire.net"} className="bg-blue-500 hover:text-sky-500 p-2 rounded-3xl text-lg"><FontAwesomeIcon icon={faRocket} /> Launch</Link></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 bg-gradient-to-b from-[#f5ccd4] to-[#b8a4c9] dark:from-[#5C03BC] dark:to-[#1a2766] min-w-screen text-center p-8 md:px-20 place-content-center gap-4">
        <div>
          <h1 className="font-semibold text-2xl">What is Visiorganize?</h1>
          <p>It&apos;s a simple organization tool for software devs!</p>
          <ol className="list-decimal list-inside text-left mt-4">
            <p>It works based on three simple concepts:</p>
            <li>Projects (meant to represent something you are building)</li>
            <li>Folders (groups of resources in a project)</li>
            <li>Resources (objects related to a project, such as tasks or GitHub repos).</li>
          </ol>
        </div>
        <div className="flex justify-center items-center">
          <Image src={screenshot1} alt="Visiorganize Logo" width={400} height={400} />
        </div>
      </div>
    </main>
  );
}
