import Image from "next/image";
import logo from "@/public/logo.webp";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="flex flex-col bg-gradient-to-br from-blue-500 to-purple-600 min-w-screen text-center p-8 md:px-20">
        <div className="flex gap-4 text-center items-center justify-center mb-2">
          <Image src={logo} alt="Visiorganize Logo" width={70} height={70} />
          <h1 className={`font-semibold text-3xl`}>Visiorganize</h1>
        </div>
        <p>The ultimate tool to organize software development work.</p>
        <div className="mt-4"><Link href={"https://visi.axionspire.net"} className="bg-blue-500 hover:text-sky-500 p-2 rounded-3xl text-lg"><FontAwesomeIcon icon={faRocket} /> Launch</Link></div>
      </div>
    </main>
  );
}
