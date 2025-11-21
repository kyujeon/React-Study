import { NavLink } from "react-router";
import { Separator } from "../ui";
import { UseAuthStore } from "@/pages/store/auth";

function AppHeader() {
  // const user = UseAuthStore((state) => state.user);
  // const reset = UseAuthStore((state) => state.reset);

  const { user, reset } = UseAuthStore();

  return (
    <header className="fixed z-20 w-full min-h-12 h-12 flex items-center justify-center p-6 bg-[#121212]">
      <div className="w-full h-full max-w-[1328px] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/icons/logo.svg" alt="@LOGO" className="w-7" />
          <NavLink to={"/"}>토픽 인사이트</NavLink>
          <Separator orientation="vertical" className="h-3!" />
          <NavLink to={"/user/:id/profile"}>프로필</NavLink>
          <Separator orientation="vertical" className="h-3!" />
          <NavLink
            to={"/"}
            className="text-neutral-400 hover:text-white duration-250"
          >
            우리가 하는 일
          </NavLink>
        </div>
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <span> {user.email}</span>
              <Separator orientation="vertical" className="h-3!" />
              <span className="cursor-pointer" onClick={reset}>
                {" "}
                로그아웃{" "}
              </span>
            </div>
          ) : (
            <NavLink
              to={"/sign-in"}
              className="text-neutral-400 hover:text-white duration-250"
            >
              로그인
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
}

export { AppHeader };
