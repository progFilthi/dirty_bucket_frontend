import React from "react";
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

export default function BeatCard() {
  return (
    <Card className="w-full max-w-xs mx-auto rounded-xl shadow-md">
      <CardHeader>
        <CardTitle className="text-center text-lg">Black Heart</CardTitle>
      </CardHeader>

      <CardContent className="flex justify-center">
        <div className="relative w-54 h-48">
          <Image
            src="/pic1.jpeg"
            alt="beat cover"
            fill
            className="object-cover rounded-md"
          />
        </div>
      </CardContent>

      <CardFooter className="flex flex-col items-center gap-3">
        <div className="flex justify-between w-full text-sm text-muted-foreground">
          <CardDescription>
            Key: <span className="text-foreground">D#m</span>
          </CardDescription>
          <CardDescription>
            BPM: <span className="text-foreground">150</span>
          </CardDescription>
        </div>
        <Button className="w-full">Add to cart</Button>
      </CardFooter>
    </Card>
  );
}
