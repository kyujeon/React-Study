import {
  AppBanner,
  AppCompanyLink,
  AppHeader,
  AppMainGallery,
  StickyMenu,
  AppFooter,
} from "./components/common";

import { ImageCard, MentorCard, RecruitCard } from "./components/Skeleton";
import { Button } from "./components/ui";

function App() {
  return (
    <div className="w-full">
      {/* 베너 */}
      <AppBanner />

      {/* 자회사 링크 */}
      <AppCompanyLink />

      {/* 헤더 */}
      <AppHeader />

      <main className="w-full flex flex-col items-center py-6">
        {/* 메인 겔러리 */}
        <AppMainGallery />

        {/* Sticky Menu */}
        <StickyMenu />

        {/* Image Card */}
        <section className="w-full grid grid-cols-6 gap-6 mt-10 px-20">
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </section>

        {/* Mentor */}
        <section className="w-full flex flex-col gap-6 px-20 py-12 mt-12 bg-black">
          <h3 className="scroll-m-20 text-2xl text-white font-semibold tracking-tight">
            포트폴리오 피드백부터 커리어 상담까지!
          </h3>
          <MentorCard />
        </section>

        {/* Recruit */}
        <section className="w-full flex flex-col gap-6 py-12 px-20 bg-neutral-50">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            디자이너 채용 정보는 노트폴리오에서!
          </h3>
          <RecruitCard />
        </section>

        {/* Image Card */}
        <section className="w-full grid grid-cols-6 gap-6 mt-10 px-20">
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </section>
      </main>
      <div className="h-[114px] flex flex-col items-center gap-6 my-20 ">
        {/* 회원가입 및 로그인 */}
        <div className="flex items-center">
          <a href="" className="underline">
            회원가입
          </a>
          <p className="mx-1">또는</p>
          <a href="" className="underline">
            로그인
          </a>
          <p>을 통해 19만개 이상의 크리에이티브를 발견하고 수집해보세요.</p>
        </div>
        {/* 회원가입 및 로그인 버튼 ui */}
        <div className="flex items-center gap-4">
          <Button>회원가입</Button>
          <p className="text-sm">또는</p>
          <Button variant={"outline"}>로그인</Button>
        </div>
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
