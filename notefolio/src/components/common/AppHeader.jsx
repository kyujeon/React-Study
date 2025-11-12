import { ChevronDown, Search, TextAlignJustify } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FOOTER_ICON } from "../constants";

import {
  Input,
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Separator,
} from "../ui/";

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

function AppHeader({ onSetSearchValue, onFetchApi }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onFetchApi();
    }
  };
  return (
    <>
      <header className="hidden sticky top-0 z-10 w-full h-14 lg:flex items-center justify-between px-8 border-b bg-white">
        {/* 좌측 헤더 */}
        <div className="h-full flex items-center gap-4">
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
                  className={`h-full flex items-center gap-1 text-sm font-semibold cursor-pointer ${
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
        <div className="flex items-center gap-1">
          {/* 검색창 */}
          <div className="flex items-center border px-2 rounded-full bg-neutral-50">
            <Search size={18} className="text-neutral-400" />
            <Input
              placeholder="230,000개 이상의 크리에이티브 검색"
              onChange={(e) => onSetSearchValue?.(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-64 outline-0 border-none focus-visible:ring-0 placeholder:text-neutral-400"
            />
          </div>

          {/* 로그인 */}
          <Button variant="link" className="text-xs">
            로그인
          </Button>
          {/* 회원가입 */}
          <Button className="rounded-full font-semibold text-xs">
            회원가입
          </Button>
        </div>
      </header>

      {/* 반응형 */}
      <header className="min-w-[480px] flex flex-col lg:hidden sticky top-0 z-10 h-27 px-8 border-b bg-white">
        {/* 우측: sheet, 로고 / 좌측: 로그인, 검색 아이콘 */}
        <div className="w-full flex items-center justify-between">
          {/* 우측: sheet, 로고  */}
          <div className="flex gap-4 py-4">
            <Sheet>
              <SheetTrigger>
                <TextAlignJustify size={20} />
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[80%] sm:max-w-none overflow-y-scroll lg:hidden"
              >
                <SheetHeader>
                  <SheetTitle className="px-4 py-10">
                    <img
                      src="./public/logo.svg"
                      alt="로고"
                      className="w-22 cursor-pointer"
                    />
                  </SheetTitle>
                  <SheetDescription></SheetDescription>
                  {/* 로고, 회원가입, 로그인 */}
                  <div className="flex flex-col px-4 gap-2">
                    <div className="pb-6">
                      <div className="font-semibold text-sm">
                        회원가입 또는 로그인을 통해 13만개
                      </div>
                      <div className="font-semibold text-sm">
                        이상의 크리에이티브를 발견하고 수집해보세요.
                      </div>
                    </div>
                    {/* 로그인 */}
                    <Button className="rounded-full font-extrabold text-xs h-10 bg-[#4ACAD4] hover:bg-[#2babb4]">
                      회원가입
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-full font-extrabold text-xs h-10"
                    >
                      로그인
                    </Button>
                  </div>

                  <Separator className="mt-10" />
                  {/* 네비게이션 */}
                  <nav className="flex flex-col gap-6 px-4 mt-10 mb-16 ">
                    {menu.map((item) => {
                      return (
                        <div
                          className={`h-full flex items-center justify-between font-extrabold text-black cursor-pointer`}
                        >
                          {item.label}
                          {item.dropdown && <ChevronDown size={16} />}
                        </div>
                      );
                    })}
                  </nav>
                  <Separator />

                  {/* 푸터내용 */}
                  <div>
                    <div className="flex flex-col gap-6 px-4 mt-10 mb-14">
                      <div className="text-sm">서비스 소개</div>
                      <div className="text-sm">공지사항</div>
                      <div className="text-sm">운영정책</div>
                      <div className="text-sm">개인정보처리방침</div>
                      <div className="text-sm">자주묻는 질문</div>
                      <div className="text-sm">광고상품</div>
                      <div className="flex items-center gap-1">
                        <div className="text-sm">문의하기</div>
                        <ChevronDown size={16} className="font-extrabold" />
                      </div>
                    </div>
                  </div>
                  <Separator />

                  {/* 패밀리사이트 */}
                  <div className="flex items-center justify-between gap-5 px-4 mt-10 mb-10">
                    <div className="text-m font-black">패밀리 사이트</div>
                    <ChevronDown size={22} className="font-black" />
                  </div>
                  <Separator />

                  {/* 사업자정보 */}
                  <div className="flex flex-col px-4 mt-12 gap-4">
                    <div className="font-black text-sm">
                      (주)스터닝 사업자 정보
                    </div>
                    <div className="text-xs text-neutral-400">
                      사업자 등록번호 : 120-87-69298 | 직업정보제공:
                      J1200020190003 | 대표자명: 김승환 | 전화번호:070-8733-5858
                      | 주소 : 서울특별시 강남구 봉은사로112번 6길 2F
                    </div>
                    <div className="font-black text-sm">
                      ⓒ2020 STUNNING INC.{" "}
                    </div>
                  </div>
                  <div className="px-4 mt-6 mb-20">
                    {FOOTER_ICON.map((item) => {
                      return (
                        <div className="min-w-fit flex gap-2 mt-5">
                          <FontAwesomeIcon icon={item.icon} />
                          <div className="text-xs font-black">{item.title}</div>
                        </div>
                      );
                    })}
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>
            <img
              src="./public/logo.svg"
              alt="로고"
              className="w-30 cursor-pointer"
            />
          </div>

          {/* 좌측: 로그인, 검색 아이콘 */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="rounded-full font-semibold text-xs shadow-none"
            >
              로그인
            </Button>
            <Sheet>
              <SheetTrigger>
                <Search size={18} />
              </SheetTrigger>
              <SheetContent
                side="bottom"
                className="h-full sm:max-h-none lg:hidden "
              >
                <SheetHeader>
                  <SheetTitle></SheetTitle>
                  <SheetDescription></SheetDescription>
                  <div className="flex items-center border px-4 mb-3 rounded-full bg-neutral-50">
                    <Search size={18} className="text-neutral-400" />
                    <Input
                      placeholder="230,000개 이상의 크리에이티브 검색"
                      className="h-10 outline-0 border-none focus-visible:ring-0 placeholder:text-neutral-400"
                    />
                  </div>
                  <Separator />
                  <div className="flex flex-col px-4 mt-4">
                    <p className="font-black text-xs">노트폴리오 추천 검색어</p>
                    <div className="flex mt-3 mb-10 gap-2">
                      <Button
                        variant="outline"
                        className="rounded-full font-extrabold text-xs shadow-none"
                      >
                        포스터
                      </Button>
                      <Button
                        variant="outline"
                        className="rounded-full font-extrabold text-xs shadow-none"
                      >
                        로고
                      </Button>
                      <Button
                        variant="outline"
                        className="rounded-full font-extrabold text-xs shadow-none"
                      >
                        브랜딩
                      </Button>
                      <Button
                        variant="outline"
                        className="rounded-full font-extrabold text-xs shadow-none"
                      >
                        리플렛
                      </Button>
                      <Button
                        variant="outline"
                        className="rounded-full font-extrabold text-xs shadow-none"
                      >
                        포트폴리오
                      </Button>
                      <Button
                        variant="outline"
                        className="rounded-full font-extrabold text-xs shadow-none"
                      >
                        상세페이지
                      </Button>
                    </div>
                    <p className="font-black text-xs">노트폴리오 추천 콘텐츠</p>
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* 발견,채용,워크숍,포폴,에이전시 */}
        <nav className="h-full flex items-center gap-4">
          {menu.map((item) => {
            return (
              <div
                className={`h-full flex items-center gap-1 text-sm font-semibold cursor-pointer ${
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
      </header>
    </>
  );
}

export { AppHeader };
