import axios from "axios";
import {
  AppBanner,
  AppCompanyLink,
  AppHeader,
  AppMainGallery,
  StickyMenu,
  AppFooter,
} from "./components/common";

import {
  ImageCard,
  ImageCardProp,
  MentorCard,
  RecruitCard,
} from "./components/Skeleton";

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui";

import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null); // Unsplash API 에서 받은 데이터 전부
  // const [Images, setImages] = useState([]); // Unsplash API에서 받은 데이터 전체 중 실제로 필요한 image 데이터

  const [koreaImages, setKoreaImages] = useState([]);
  const [japanImages, setJapanImages] = useState([]);
  const API_KEY = "KMMSXsPEVEi25NOMNBEM_b1iZKxEQCjFtoWoTU_udho";
  const API_URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}`;

  // // Unsplash API 호출
  // const fetchAPI = async () => {
  //   const API_KEY = "KMMSXsPEVEi25NOMNBEM_b1iZKxEQCjFtoWoTU_udho";
  //   const API_URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}`;

  //   const res = await axios.get(`${API_URL}&page=1&query=korea`);

  //   console.log("res :", res);

  //   // const 실제로 필요한 데이터 = res.data;
  //   setData(res.data);
  //   // const 스켈레톤이;ㅣ미지컴포넌트에 쓰일 데이터 = res.data.results;
  //   setImages(res.data.results);
  // };

  const fetchKorea = async () => {
    const res = await axios.get(`${API_URL}&page=1&query=korea&per_page=12`);
    setKoreaImages(res.data.results);
  };

  const fetchJapan = async () => {
    const res = await axios.get(`${API_URL}&page=1&query=japan&per_page=12`);
    setJapanImages(res.data.results);
  };

  // // Unsplash API 조회 함수 실행
  // useEffect(() => {
  //   fetchAPI();
  // }, []);

  useEffect(() => {
    fetchKorea();
    fetchJapan();
  }, []);

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

        {/* Image Card Prop */}
        <section className="w-full grid grid-cols-6 gap-6 mt-10 px-20">
          {koreaImages.map((image, index) => {
            return (
              <Dialog>
                <DialogTrigger>
                  <ImageCardProp image={image} />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            );
          })}
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
          {japanImages.map((image, index) => {
            return (
              <Dialog>
                <DialogTrigger>
                  <ImageCardProp image={image} />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            );
          })}
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
