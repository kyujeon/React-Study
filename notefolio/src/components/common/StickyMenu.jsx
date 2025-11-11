import {
  ArrowUpDown,
  Brush,
  Camera,
  CirclePlay,
  Gem,
  IdCard,
  MousePointerClick,
  Package,
  Palette,
  Panda,
  PenTool,
  Sparkle,
  Type,
  Layers,
  ImagePlay,
} from "lucide-react";
import { Separator } from "../ui";

function StickyMenu() {
  const categories = [
    {
      icon: Layers,
      label: "전체",
      isActive: true, // 라벨 색상 통제를 위한 속성
    },
    {
      icon: CirclePlay,
      label: "영상/모션그래픽",
      isActive: false,
    },
    {
      icon: Palette,
      label: "그래픽 디자인",
      isActive: false,
    },
    {
      icon: IdCard,
      label: "브랜딩/편집",
      isActive: false,
    },
    {
      icon: ImagePlay,
      label: "UI/UX",
      isActive: false,
    },
    {
      icon: PenTool,
      label: "일러스트레이션",
      isActive: false,
    },
    {
      icon: MousePointerClick,
      label: "디지털 아트",
      isActive: false,
    },
    {
      icon: Sparkle,
      label: "AI",
      isActive: false,
    },
    {
      icon: Panda,
      label: "캐릭터 디자인",
      isActive: false,
    },
    {
      icon: Package,
      label: "제품/패키지 디자인",
      isActive: false,
    },
    {
      icon: Camera,
      label: "포토그래피",
      isActive: false,
    },
    {
      icon: Type,
      label: "타이포그래피",
      isActive: false,
    },
    {
      icon: Gem,
      label: "공예",
      isActive: false,
    },
    {
      icon: Brush,
      label: "파인아트",
      isActive: false,
    },
  ];
  return (
    <section className="sticky top-14 z-10 w-full flex items-center justify-center py-2 gap-10 mt-20 bg-white">
      <div className="hidden min-w-fit lg:flex flex-col gap-2">
        {/* 아이콘 */}
        <ArrowUpDown className="text-neutral-700" />
        {/* 아이콘 라벨 */}
        <p className="text-sm">정렬</p>
      </div>
      <Separator orientation="vertical" className="hidden lg:block h-10!" />
      <div className="flex items-center gap-12 overflow-x-scroll">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <div className="min-w-fit flex flex-col items-center gap-2">
              <IconComponent className="text-neutral-700" />
              <p className="text-sm"> {category.label} </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export { StickyMenu };
