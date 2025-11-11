import { ChevronDown, Search, TextAlignJustify } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

import {
  faApple,
  faFacebook,
  faGooglePlay,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faBookOpen, faInbox } from "@fortawesome/free-solid-svg-icons";

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

const footerIcon = [
  {
    icon: faBookOpen,
    title: "노트폴리오 매거진",
  },
  {
    icon: faInbox,
    title: "노플 레터",
  },
  {
    icon: faInstagram,
    title: "노트폴리오 인스타그램",
  },
  {
    icon: faFacebook,
    title: "노트폴리오 페이스북",
  },
  {
    icon: faYoutube,
    title: "노트폴리오 유튜브",
  },
  {
    icon: faApple,
    title: "iOS App",
  },
  {
    icon: faGooglePlay,
    title: "Android App",
  },
];

function AppHeader() {
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
      <header className="flex flex-col lg:hidden sticky top-0 z-10 h-27 px-8 border-b bg-white">
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
                className="w-[80%] sm:max-w-none overflow-y-scroll"
              >
                <SheetHeader>
                  <SheetTitle className="px-4 py-10">
                    <img
                      src="./public/logo.svg"
                      alt="로고"
                      className="w-22 cursor-pointer"
                    />
                  </SheetTitle>
                  <SheetDescription>
                    {/* 로고, 회원가입, 로그인 */}
                    <div className="flex flex-col px-4 gap-2">
                      <div className="pb-6">
                        <p className="font-semibold text-sm">
                          회원가입 또는 로그인을 통해 13만개
                        </p>
                        <p className="font-semibold text-sm">
                          이상의 크리에이티브를 발견하고 수집해보세요.
                        </p>
                      </div>
                      {/* 로그인 */}
                      <Button className="rounded-full font-extrabold text-xs h-10 bg-[#4ACAD4]">
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
                        <p className="text-sm">서비스 소개</p>
                        <p className="text-sm">공지사항</p>
                        <p className="text-sm">운영정책</p>
                        <p className="text-sm">개인정보처리방침</p>
                        <p className="text-sm">자주묻는 질문</p>
                        <p className="text-sm">광고상품</p>
                        <div className="flex items-center gap-1">
                          <p className="text-sm">문의하기</p>
                          <ChevronDown size={16} className="font-extrabold" />
                        </div>
                      </div>
                    </div>
                    <Separator />

                    {/* 패밀리사이트 */}
                    <div className="flex items-center justify-between gap-5 px-4 mt-10 mb-10">
                      <p className="text-m font-black">패밀리 사이트</p>
                      <ChevronDown size={22} className="font-black" />
                    </div>
                    <Separator />

                    {/* 사업자정보 */}
                    <div className="flex flex-col px-4 mt-12 gap-4">
                      <p className="font-black text-sm">
                        (주)스터닝 사업자 정보
                      </p>
                      <p className="text-xs text-neutral-400">
                        사업자 등록번호 : 120-87-69298 | 직업정보제공:
                        J1200020190003 | 대표자명: 김승환 |
                        전화번호:070-8733-5858 | 주소 : 서울특별시 강남구
                        봉은사로112번 6길 2F
                      </p>
                      <p className="font-black text-sm">ⓒ2020 STUNNING INC. </p>
                    </div>
                    <div className="px-4 mt-6 mb-20">
                      {footerIcon.map((footerIcon) => {
                        return (
                          <div className="min-w-fit flex gap-2 mt-5">
                            <FontAwesomeIcon icon={footerIcon.icon} />
                            <p className="text-xs font-black">
                              {" "}
                              {footerIcon.title}{" "}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </SheetDescription>
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
              <SheetContent side="bottom" className="h-full sm:max-h-none">
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
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
