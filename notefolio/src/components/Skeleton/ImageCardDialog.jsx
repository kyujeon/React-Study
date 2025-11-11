import { ImageCardProp } from ".";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Separator,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../ui";
import { addCommas } from "../../lib/format/comma";
import { Calendar, Heart } from "lucide-react";
import dayjs from "dayjs";

function ImageCardDialog({ image }) {
  return (
    <Dialog>
      <DialogTrigger>
        <ImageCardProp image={image} />
      </DialogTrigger>
      <DialogContent>
        <div className="absolute top-0 -right-22 flex flex-col gap-6">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex flex-col items-center justify-center gap-1">
                <Button size={"icon"} className="rounded-full">
                  <Heart />
                </Button>
                <p className="text-white">좋아요 01</p>
              </div>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>좋아요 01</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <DialogHeader>
          <DialogTitle>Title</DialogTitle>
          <DialogDescription>
            {image.description || "설명이 없습니다."}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          <img
            src={image.urls.regular}
            alt="@IMAGE"
            className="w-full aspect-square object-cover rounded-md"
          />
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={image.user.profile_image.large}
                alt="@profile)image"
                className="w-7 h-7 rounded-full"
              />
              <p className="text-sm">{image.user.username}</p>
            </div>
            <div className="flex items-center gap-3"></div>
            {/* 좋아요 */}
            <div className="flex items-center gap-1">
              <Heart size={16} className="text-neutral-500" />
              <p className="text-sm">{addCommas(image.likes)}</p>
            </div>
          </div>
          <Separator />
          <div className="flex items-center justify-end gap-2">
            <Calendar size={16} className="text-neutral-500" />
            <p className="text-neutral-500 text-sm">
              {dayjs(image.created_at).format("YYYY. MM. DD")}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export { ImageCardDialog };
