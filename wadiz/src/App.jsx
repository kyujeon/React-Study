function App() {
  const info = ["Google 정보", "스토어"];
  const bt = ["Google 검색", "I'm Feeling Lucky"];

  return (
    <div className="flex flex-col w-full h-screen bg-[#202124] text-white">
      {/* 헤더 */}
      <header className="flex items-center justify-between px-6 py-3 text-sm">
        {/* 좌측 정보 */}
        <div className="flex gap-4 font-semibold">
          {info.map((item) => {
            return <a href="">{item}</a>;
          })}
        </div>
        {/* 아이콘 및 프로필 */}
        <div className="flex gap-4 items-center font-semibold">
          <a href="">Gmail</a>
          <a herf="">이미지</a>
          <a herf="">
            <img src="./google icon/test.png" art="실험실" />
          </a>
          <a herf="">
            <img src="./google icon/menu.png" alt="메뉴" />
          </a>
          <a herf="">
            <img src="./google icon/img.png" alt="프로필" />
          </a>
        </div>
      </header>
      {/* 로고,검색창 */}
      <main className="flex flex-col items-center justify-center flex-1 gap-8">
        {/* 로고 */}
        <img src="./google icon/logo.png" alt="로고" />

        {/* 검색창 */}
        <div className="flex items-center bg-[#4D5156] rounded-full w-[688px] h-14 px-4 gap-2">
          <img
            src="./google icon/search.png"
            alt="돋보기"
            className="w-7 h-7"
          />
          <input type="text" className="w-[420px]  flex-1 outline-none"></input>
          <img src="./google icon/kb.png" alt="키보드" className="w-9 h-7" />
          <img src="./google icon/mic.png" alt="마이크" className="w-6 h-6" />
          <img src="./google icon/cm.png" alt="카메라" className="w-7 h-7" />

          <button className="flex items-center text-sm  rounded-full w-[100px] px-3 py-1.5 ">
            <img src="./google icon/search2.png" />
            AI 모드
          </button>
        </div>
        {/* 하단 버튼 */}
        <div className="flex gap-3 ">
          {bt.map((bt) => {
            return (
              <button className="bg-[#303134] test-sm px-4 py-1.5 rounded-lg hover:border ">
                {bt}
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
