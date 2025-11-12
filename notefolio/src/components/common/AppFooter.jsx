import { Separator, Tooltip, TooltipContent, TooltipTrigger } from "../ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FOOTER_ICON } from "../constants";
import { AppTooltip } from ".";

function AppFooter() {
  return (
    <footer className="hidden w-full h-9 lg:flex items-center justify-between border-t px-8">
      {/* 텍스트 묶음 */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <p className="text-xs font-semibold">(주)스터닝</p>
          <p className="text-xs font-semibold">사업자 정보</p>
        </div>
        <Separator orientation="vertical" className="h-3!" />
        <div className="flex items-center gap-3">
          <p className="text-xs">서비스 소개</p>
          <p className="text-xs">운영정책</p>
          <p className="text-xs">개인정보처리방침</p>
          <p className="text-xs">자주묻는 질문</p>
          <p className="text-xs">광고상품</p>
          <p className="text-xs">문의하기</p>
        </div>
      </div>
      {/* 아이콘 묶음 */}
      <div className="flex items-center gap-3">
        {FOOTER_ICON.map((item, index) => {
          return (
            <>
              <AppTooltip description={item.title}>
                <FontAwesomeIcon icon={item.icon} />
              </AppTooltip>
              {index === 1 && (
                <Separator orientation="vertical" className="h-3!" />
              )}
              {index === 4 && (
                <Separator orientation="vertical" className="h-3!" />
              )}
            </>
          );
        })}

        <img
          src="./public/logo.svg"
          alt="로고"
          className="w-22 cursor-pointer"
        />
      </div>
    </footer>
  );
}

export { AppFooter };
