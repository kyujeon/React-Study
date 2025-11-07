import { useEffect } from "react";

function App() {
  const menu = ["오픈예정", "펀딩+", "프리오더", "스토어", "더보기"];

  const fetchData = () => {
    console.log("데이터베이스에서 메인 페이지에서 필요한 데이터 호출");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full nax-w-[1328px] mx-auto">
      <header className="w-full flex items-center justify-between p-4">
        <div className="flex gap-6">
          {/* 로고 */}
          <a href="" className="text-xl font-semibold">
            wadiz
          </a>
          {/* 메뉴 */}
          <nav className="flex gap-6">
            {menu.map((item) => {
              return <div className="text-lg font-semibold">{item}</div>;
            })}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {/* 아이콘 묶음 */}
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 rounded-full bg-neutral-400"></div>
            <div className="w-6 h-6 rounded-full bg-neutral-600"></div>
            <div className="w-6 h-6 rounded-full bg-neutral-800"></div>
          </div>
          {/* 로그인/회원가입 */}
          <a href="">로그인/회원가입</a>
          {/* 프로젝트 만들기 */}
          <button>프로젝트 만들기</button>
        </div>
      </header>
      <main></main>
    </div>
  );
}

export default App;
