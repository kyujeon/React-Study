import {
  Badge,
  BadgeCheck,
  Briefcase,
  Crosshair,
  WandSparkles,
} from "lucide-react";

import { Card, Separator, Skeleton } from "../ui";
import { MENTORS } from "../constants";

function MentorCard() {
  return (
    <div className="grid grid-cols-6 gap-6">
      {/* 멘토 카드 */}
      {MENTORS.map((mentor) => {
        return (
          <Card className="w-full p-0 gap-0">
            <div className="relative w-full">
              <Skeleton className="w-full h-52 rounded-t-lg rounded-b-none" />
              {mentor.job === "마케터" && (
                <Badge className="absolute bottom-4 right-4 py-1 rounded-sm bg-blue-600 text-white">
                  <Crosshair />
                  {mentor.job}
                </Badge>
              )}
              {mentor.job === "디자이너" && (
                <Badge className="absolute bottom-4 right-4 py-1 rounded-sm bg-green-600 text-white">
                  <WandSparkles />
                  {mentor.job}
                </Badge>
              )}
            </div>
            {/* 멘토정보 */}
            <div className="flex flex-col gap-2 p-4">
              <p className="text-lg font-semibold">{mentor.name} 멘토</p>
              <Separator className="mb-1" />
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <BadgeCheck fill="#dc2626" className="text-white" />
                  <p className="text-sm"> {mentor.career} </p>
                </div>
                <div className="flex items-center gap-1">
                  {mentor.job === "마케터" && (
                    <Briefcase fill="#2563eb" className="text-white" />
                  )}
                  {mentor.job === "디자이너" && (
                    <Briefcase fill="#16a34a" className="text-white" />
                  )}
                  <p className="text-sm"> {mentor.role} </p>
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export { MentorCard };
