import React from "react";
import { Card, Skeleton } from "../ui";
import { CircleUserRound } from "lucide-react";
import { RECRUIT } from "../constants";

function RecruitCard() {
  return (
    <div className="grid grid-cols-6 gap-6">
      {RECRUIT.map((recruitment) => {
        return (
          <Card className="w-full h-fit p-0 gap-3 border-none shadow-none bg-transparent">
            <Skeleton className="w-full h-52 rounded-lg bg-neutral-200" />
            <div className="flex gap-2">
              {/* 로고 */}
              <CircleUserRound className="w-8 h-8" />

              <div className="flex flex-col">
                {/* 타이틀 */}
                <p className="text-[15px] font-semibold line-clamp-1">
                  {recruitment.title}
                </p>
                {/* 회사정보 */}
                <p className="text-sm text-neutral-700">
                  {recruitment.company}
                </p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export { RecruitCard };
