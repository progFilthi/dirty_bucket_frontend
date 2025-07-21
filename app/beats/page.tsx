import React from "react";
import BeatCard from "@/components/BeatCard/BeatCard";

export default function Beatspage() {
  return (
    <div>
      <h1 className="text-center text-2xl">Beat Collections</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-6 mt-2">
        <BeatCard />
        <BeatCard />
        <BeatCard />
        <BeatCard />
        <BeatCard />
        <BeatCard />
      </div>
    </div>
  );
}
