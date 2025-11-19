import {
  BadgeCheck,
  CaseSensitive,
  ChartNoAxesColumnIncreasing,
  Heart,
  MessageCircleMore,
} from "lucide-react";
import { Card, Separator } from "../ui";

function NewTopic() {
  return (
    <Card className="p-4 gap-4">
      <div className="h-fit flex items-center justify-between gap-4">
        <div className="h-full flex flex-col justify-between">
          {/* 제목 */}
          <div className="flex flex-col">
            <CaseSensitive size={20} className="text-neutral-400" />
            <p className="font-semibold text-base line-clamp-2">
              NEW Topic 제목
            </p>
          </div>
          {/* 본문 */}
          <p className="text-neutral-400 line-clamp-3">
            new topic 본문 조회 테스트
          </p>
        </div>
        <div className="w-35 min-w-35 bg-accent rounded-md p-4">
          <img
            src="/vite.svg"
            alt="@VITE"
            className="w-full bg-accent rounded-md"
          />
        </div>
      </div>
      <Separator />
      <div className="flex items-end justify-between">
        <div className="flex flex-col">
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
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <ChartNoAxesColumnIncreasing size={14} />
              <p>1</p>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircleMore size={14} />
              <p>1</p>
            </div>
          </div>
          <Separator orientation="vertical" className="h-3!" />
          <div className="flex items-center gap-1">
            <Heart size={15} className="text-red-400" />
            <p>1</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export { NewTopic };
