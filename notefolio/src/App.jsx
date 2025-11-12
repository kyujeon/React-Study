import axios from "axios";
import {
  AppBanner,
  AppCompanyLink,
  AppHeader,
  AppMainGallery,
  StickyMenu,
  AppFooter,
  AppBottomLogin,
} from "./components/common";

import {
  MentorCard,
  RecruitCard,
  ImageCardDialog,
} from "./components/Skeleton";

import { useEffect, useState } from "react";

function App() {
  // const [data, setData] = useState(null); // Unsplash API 에서 받은 데이터 전부
  // const [Images, setImages] = useState([]); // Unsplash API에서 받은 데이터 전체 중 실제로 필요한 image 데이터

  const [koreaImages, setKoreaImages] = useState([]);
  const [japanImages, setJapanImages] = useState([]);

  const [category, setCategory] = useState("korea");
  const [searchValue, setSearchValue] = useState("");
  const [searchImages, setSearchImages] = useState([]);

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
    const res = await axios.get(
      `${API_URL}&page=1&query=${category}&per_page=12`
    );
    setKoreaImages(res.data.results);
  };

  const fetchJapan = async () => {
    const res = await axios.get(`${API_URL}&page=1&query=japan&per_page=12`);
    setJapanImages(res.data.results);
  };

  const fetchSearch = async () => {
    const query = searchValue.trim() ? searchValue : category;
    const res = await axios.get(`${API_URL}&page=1&query=${query}&per_page=12`);
    setSearchImages(res.data.results);
    setKoreaImages([]);
  };

  // // Unsplash API 조회 함수 실행
  // useEffect(() => {
  //   fetchAPI();
  // }, []);

  useEffect(() => {
    fetchKorea();
  }, [category]);

  useEffect(() => {
    fetchJapan();
  }, []);

  return (
    <div className="w-full">
      {/* 베너 */}
      <AppBanner />

      {/* 자회사 링크 */}
      <AppCompanyLink />

      {/* 헤더 */}
      <AppHeader onSetSearchValue={setSearchValue} onFetchApi={fetchSearch} />

      <main className="w-full flex flex-col items-center py-6">
        {/* 메인 겔러리 */}
        <AppMainGallery />

        {/* Sticky Menu */}
        <StickyMenu onSetCategory={setCategory} />

        {/* Image Card Prop */}
        <section className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 mt-6 px-6 lg:px-20">
          {(searchImages.length > 0 ? searchImages : koreaImages).map(
            (image, index) => (
              <ImageCardDialog key={index} image={image} />
            )
          )}
        </section>

        {/* Mentor */}
        <section className="w-full flex flex-col gap-6 py-12 px-6 lg:px-20 mt-12 bg-black">
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
        <section className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 mt-6 px-6 lg:px-20">
          {japanImages.map((image, index) => {
            return <ImageCardDialog image={image} />;
          })}
        </section>
      </main>
      {/* 회원가입 로그인 반응형 */}
      <AppBottomLogin />

      {/* 푸터 */}
      <AppFooter />
    </div>
  );
}

export default App;
