import { Button } from "../ui";

function AppBottomLogin() {
  return (
    <div className="h-[114px] flex flex-col items-center gap-6 my-20 ">
      {/* 회원가입 및 로그인 */}
      <div className="flex md:hidden flex-col items-center gap-1">
        <div className="flex items-center">
          <a href="" className="underline">
            회원가입
          </a>
          <p className="mx-1">또는</p>
          <a href="" className="underline">
            로그인
          </a>
          <a>을 통해</a>
        </div>
        <p>19만개 이상의 크리에이티브를 발견하고 수집해보세요.</p>
      </div>

      <div className="hidden md:flex items-center">
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
  );
}
export { AppBottomLogin };
