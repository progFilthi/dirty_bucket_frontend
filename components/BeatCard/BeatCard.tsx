"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
  CardDescription,
} from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import { Play, Pause, Download } from "lucide-react";
import { toast } from "sonner";

export default function BeatCard() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [lastTime, setLastTime] = useState(0);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      // Pause
      audio.pause();
      setLastTime(audio.currentTime);
      setIsPlaying(false);
    } else {
      // Play from last point
      audio.currentTime = lastTime;

      // Start playback
      audio.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeLimit = () => {
      if (audio.currentTime >= 15) {
        audio.pause();
        audio.currentTime = 0;
        setIsPlaying(false);

        toast("Preview limit reached", {
          description: "Purchase to unlock full beat",
          action: {
            label: "Buy now",
            onClick: () => console.log("Redirect to cart or checkout..."),
          },
        });
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setLastTime(0);
    };

    audio.addEventListener("timeupdate", handleTimeLimit);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeLimit);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <Card className="w-full max-w-xs mx-auto rounded-xl shadow-sm -space-y-4">
      {/* Audio Preview */}
      <audio
        ref={audioRef}
        src="/audio/Black%20Heart%20150%20D%23m%20%40beatsbyfilthi.mp3"
      />

      {/* Header */}
      <CardHeader>
        <CardTitle className="text-center text-lg">Black Heart</CardTitle>
      </CardHeader>

      {/* Image & Play Button */}
      <CardContent className="flex items-center justify-center">
        <div className="relative w-54 h-44 group rounded-md overflow-hidden">
          {/* Beat Cover */}
          <Image
            src="/assets/pic2.jpeg"
            alt="beat cover"
            fill
            className="object-cover object-top transition duration-300 group-hover:brightness-75"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 pointer-events-none rounded-md bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.6)_100%)]" />

          {/* Play/Pause Button */}
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause preview" : "Play preview"}
            className="absolute inset-0 flex items-center justify-center text-white bg-black/30 hover:bg-black/40 rounded-md opacity-0 group-hover:opacity-100 transition duration-200 cursor-pointer"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8" />
            ) : (
              <Play className="w-8 h-8" />
            )}
          </button>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex flex-col items-center space-y-2">
        {/* Info */}
        <div className="flex justify-between w-full text-sm text-muted-foreground">
          <div>
            <CardDescription>D#m</CardDescription>
            <CardDescription>150</CardDescription>
          </div>
          <CardDescription className="text-foreground">$29.99</CardDescription>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between w-full space-x-2">
          <Button className="flex-1">Add to cart</Button>
          <Button
            variant="outline"
            onClick={() =>
              toast("Purchase to download the full beat", {
                description:
                  "Add this beat to your cart and complete checkout.",
                action: {
                  label: "Buy now",
                  onClick: () => console.log("Go to checkout"),
                },
              })
            }
          >
            <Download className="w-4 h-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
