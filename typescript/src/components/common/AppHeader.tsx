import { NavLink } from "react-router";
import { Separator } from "../ui";

function AppHeader() {
  return (
    <header className="w-full h-12 flex items-center justify-center p-6 bg-[#121212]">
      <div className="w-full h-full max-w-[1328px] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/icons/logo.svg" alt="@LOGO" className="w-7" />
          <NavLink to={"/"}>토픽 인사이트</NavLink>
          <Separator orientation="vertical" className="h-3!" />
          <NavLink to={"/sign-in"}>프로필</NavLink>
        </div>
        <div className="flex items-center gap-4">
          <NavLink
            to={"/sign-in"}
            className="text-neutral-400 hover:text-white duration-250"
          >
            로그인
          </NavLink>
          <Separator orientation="vertical" className="h-3!" />
          <NavLink
            to={"/"}
            className="text-neutral-400 hover:text-white duration-250"
          >
            우리가 하는 일
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export { AppHeader };
