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
import { Download } from "lucide-react";

export default function BeatCard() {
  return (
    <Card className="w-full max-w-xs mx-auto rounded-xl shadow-md">
      <CardHeader>
        <CardTitle className="text-center text-lg">Black Heart</CardTitle>
      </CardHeader>

      <CardContent className="flex justify-center">
        <div className="relative w-54 h-48">
          <Image
            src="/assets/pic2.jpeg"
            alt="beat cover"
            fill
            className="object-cover object-top rounded-md"
          />
        </div>
      </CardContent>

      <CardFooter className="flex flex-col items-center gap-3">
        <div className="flex justify-between w-full text-sm text-muted-foreground">
          <div>
            <CardDescription>
              <span>D#m</span>
            </CardDescription>
            <CardDescription>
              <span>150</span>
            </CardDescription>
          </div>
          <CardDescription>
            <span className="text-foreground">$29.99</span>
          </CardDescription>
        </div>
        <div className="flex items-center justify-between w-full gap-2">
          <Button className="flex-1">Add to cart</Button>
          <Button variant="outline">
            <Download />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
