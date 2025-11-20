import { AppTextEditor } from "@/components/common";
import {
  Button,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Separator,
} from "@/components/ui";

import { Asterisk, Image, ImageOff } from "lucide-react";

function CreateTopic() {
  return (
    <main className="w-full flex-1 flex justify-center">
      <div className="w-full max-w-[1328px] h-full flex gap-6 py-6">
        {/* Step1 */}
        <div className="flex flex-1 flex-col gap-6">
          <div className="flex flex-col">
            <p className="font-medium text-[#FA6859]">Step 1</p>
            <p className="font-semibold text-base">토픽 작성하기</p>
          </div>
          <Separator />
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <Asterisk size={14} className="text-[#FA6859]" />
              <p className="text-neutral-400 text-base">본문</p>
            </div>
            {/* BlockNote 텍스트 에디터 ui*/}
            <div className="w-full h-screen">
              <AppTextEditor />
            </div>
          </div>
        </div>
        {/* Step2 */}
        <div className="w-[314px] min-w-[314px] flex flex-col gap-6">
          <div className="flex flex-col">
            <p className="font-medium text-[#FA6859]">Step 2</p>
            <p className="font-semibold text-base">카테고리 및 썸네일 등록</p>
          </div>
          <Separator />
          <div className="flex flex-col gap-6">
            {/* 카테고리 */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <Asterisk size={14} className="text-[#FA6859]" />
                <p className="text-neutral-400 text-base">카테고리</p>
              </div>
              {/* 셀렉트 박스 */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="토픽(주제) 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>카테고리(주제)</SelectLabel>
                    <SelectItem value="humidity">인문학</SelectItem>
                    <SelectItem value="start-up">스타트업</SelectItem>
                    <SelectItem value="programing">
                      IT&middot;프로그래밍
                    </SelectItem>
                    <SelectItem value="planing">
                      서비스&middot;전략기획{" "}
                    </SelectItem>
                    <SelectItem value="marketing">마케팅</SelectItem>
                    <SelectItem value="design">
                      디자인&middot;일러스트
                    </SelectItem>
                    <SelectItem value="self-development">자기개발</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            {/* 썸네일 */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <Asterisk size={14} className="text-[#FA6859]" />
                <p className="text-neutral-400 text-base">썸네일</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-full aspect-video flex items-center justify-center rounded-md bg-card">
                  <Button variant={"ghost"} size={"icon"}>
                    <Image />
                  </Button>
                </div>
                {/* 썸네일 제거 버튼 */}
                <Button variant={"secondary"} className="bg-card">
                  <ImageOff />
                  썸네일 제거
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CreateTopic;
