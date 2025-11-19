import { BadgeCheck } from "lucide-react";
import { Card } from "../ui";
import { Separator } from "@radix-ui/react-separator";

function HotTopic() {
  return (
    <Card className="p-0 gap-3 border-0 bg-transparent">
      <div className="relative">
        <img
          src="./images/bg-sample.png"
          alt="BG-SAMPLE"
          className="rounded-lg h-70"
        />
        <p className="absolute z-10 bottom-4 px-4 font-semibold text-xl line-clamp-2">
          HOT Topic 제목
        </p>
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent rounded-b-lg"></div>
      </div>
      <div className="flex flex-col pl-1">
        <div className="flex items-center gap-1">
          <BadgeCheck size={14} className="text-green-400 mb-0.5" />
          <p>개발자 9Diin</p>
        </div>
        <div className="flex items-center text-neutral-400 text-xs gap-2">
          <p>IT 및 기술분야</p>
          <Separator orientation="vertical" className="h-3!" />
          <p>소프트웨어 엔지니어</p>
        </div>
      </div>
    </Card>
  );
}

export { HotTopic };
