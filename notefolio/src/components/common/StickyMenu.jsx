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

function StickyMenu({ props, onSetCategory }) {
  const categories = [
    {
      icon: Layers,
      label: "전체",
      isActive: true, // 라벨 색상 통제를 위한 속성
      value: "korea", // default 값이 korea라고 가정
    },
    {
      icon: CirclePlay,
      label: "영상/모션그래픽",
      isActive: false,
      value: "video",
    },
    {
      icon: Palette,
      label: "그래픽 디자인",
      isActive: false,
      value: "graphic-design",
    },
    {
      icon: IdCard,
      label: "브랜딩/편집",
      isActive: false,
      value: "branding",
    },
    {
      icon: ImagePlay,
      label: "UI/UX",
      isActive: false,
      value: "uxui",
    },
    {
      icon: PenTool,
      label: "일러스트레이션",
      isActive: false,
      value: "illustration",
    },
    {
      icon: MousePointerClick,
      label: "디지털 아트",
      isActive: false,
      value: "digital-art",
    },
    {
      icon: Sparkle,
      label: "AI",
      isActive: false,
      value: "ai",
    },
    {
      icon: Panda,
      label: "캐릭터 디자인",
      isActive: false,
      value: "character",
    },
    {
      icon: Package,
      label: "제품/패키지 디자인",
      isActive: false,
      value: "package-desgin",
    },
    {
      icon: Camera,
      label: "포토그래피",
      isActive: false,
      value: "photograph",
    },
    {
      icon: Type,
      label: "타이포그래피",
      isActive: false,
      value: "typograph",
    },
    {
      icon: Gem,
      label: "공예",
      isActive: false,
      value: "craft",
    },
    {
      icon: Brush,
      label: "파인아트",
      isActive: false,
      value: "fine-art",
    },
  ];

  const handleChangeCategory = () => {
    onSetCategory();
  };

  return (
    <section className="sticky px-20 top-14 z-10 flex items-center justify-center py-2 gap-10 mt-20 bg-white">
      <div className="hidden min-w-fit lg:flex flex-col gap-2">
        {/* 아이콘 */}
        <ArrowUpDown className="text-neutral-700" />
        {/* 아이콘 라벨 */}
        <p className="text-sm">정렬</p>
      </div>
      <Separator orientation="vertical" className="hidden lg:block h-10!" />
      <div className="flex items-center gap-12 overflow-x-scroll cursor-pointer">
        {categories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <div
              className="min-w-fit flex flex-col items-center gap-2"
              onClick={() => onSetCategory(category.value)}
            >
              <IconComponent
                className={`${
                  props === category.value
                    ? "text-[#4ACAD4]"
                    : "text-neutral-700"
                }`}
              />
              <p
                className={`${
                  props === category.value && "text-[#4ACAD4]"
                } text-sm`}
              >
                {" "}
                {category.label}{" "}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export { StickyMenu };
