import { ChevronDown, Search } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const menu = [
  {
    label: "발견",
    newest: false,
    dropdown: false,
    underline: true,
  },
  {
    label: "채용",
    newest: false,
    dropdown: false,
    underline: false,
  },
  {
    label: "워크숍/커뮤니티",
    newest: false,
    dropdown: true,
  },
  {
    label: "포폴피드백",
    newest: true,
  },
  {
    label: "에이전시",
    newest: false,
  },
];

function AppHeader() {
  return (
    <header className="sticky top-0 z-10 w-full h-14 flex items-center justify-between px-8 border-b bg-white">
      {/* 좌측 헤더 */}
      <div className="h-full flex items-center gap-10">
        {/* 로고 */}
        <img
          src="./public/logo.svg"
          alt="로고"
          className="w-30 cursor-pointer"
        />
        <nav className="h-full flex items-center gap-4">
          {menu.map((item) => {
            return (
              <div
                className={`h-full flex items-center gap-1 font-semibold cursor-pointer ${
                  item.underline && "border-b-2 border-black"
                }`}
              >
                {item.label}
                {item.newest && (
                  <p className="text-[#05BCC6] text-xs font-extrabold">New</p>
                )}
                {item.dropdown && <ChevronDown size={16} />}
              </div>
            );
          })}
        </nav>
      </div>

      {/* 우측 헤더 */}
      <div className="flex items-center gap-2">
        {/* 검색창 */}
        <div className="flex items-center border px-3 rounded-full bg-neutral-50">
          <Search size={18} className="text-neutral-400" />
          <Input
            placeholder="230,000개 이상의 크리에이티브 검색"
            className="w-70 outline-0 border-none focus-visible:ring-0 placeholder:text-neutral-400"
          />
        </div>

        {/* 로그인 */}
        <Button variant="link" className="text-xs">
          로그인
        </Button>
        {/* 회원가입 */}
        <Button className="rounded-full font-semibold text-xs">회원가입</Button>
      </div>
    </header>
  );
}

export { AppHeader };
