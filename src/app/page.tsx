import Navbar from "@/components/navbar";
import NewLog from "@/components/new-log";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-5 space-y-10">
      <Navbar />
      <NewLog />
    </div>
  );
}
