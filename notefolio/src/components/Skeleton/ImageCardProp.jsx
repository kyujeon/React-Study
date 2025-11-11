import { ChartNoAxesColumn, Heart } from "lucide-react";
import { Skeleton } from "../ui";

function addCommas(amount) {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function ImageCardProp({ image }) {
  return (
    <div className="w-full flex flex-col gap-2">
      <img
        src={image.urls.regular}
        alt="Thumnail"
        className="w-full aspect-square rounded-sm object-cover"
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
        <div className="flex items-center gap-3">
          {/* 조회수 */}
          <div className="flex items-center gap-1">
            <ChartNoAxesColumn size={18} className="text-neutral-400" />
            <Skeleton className="w-8 h-4" />
          </div>
          {/* 좋아요 */}
          <div className="flex items-center gap-1">
            <Heart size={16} className="text-neutral-500" />
            <p className="text-sm">{addCommas(image.likes)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ImageCardProp };
