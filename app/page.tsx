import BeatCard from "@/components/BeatCard/BeatCard";
import React from "react";

export default function page() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-6">
      <BeatCard />
      <BeatCard />
      <BeatCard />
      <BeatCard />
      <BeatCard />
      <BeatCard />
    </div>
  );
}
