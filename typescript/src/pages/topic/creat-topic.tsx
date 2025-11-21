import { AppTextEditor } from "@/components/common";
import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Separator,
} from "@/components/ui";
import supabase from "@/utils/supabase";

import {
  ArrowLeft,
  Asterisk,
  BookOpenCheck,
  Image,
  ImageOff,
  Save,
  Trash2,
} from "lucide-react";
import { useRef, useState } from "react";

function CreateTopic() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState();
  const [category, setCategory] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<File | string | null>(null);

  // => File 타입의 원본 데이터를 받음
  // => Supabase의 이미지만 관리하는 Storage에 전달받은 File을 저장 => URL 형식으로
  // => Supabase 데이터베이스에 저장 (in topics 테이블의 thumbnail 칼럼)

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // 파일 변화 감지 및 상태값 할당
  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    setThumbnail(event.target.files?.[0] ?? null);

    console.log(event.target.files);

    event.target.value = "";
  };

  // 이미지 미리보기
  const handleRenderPreview = () => {
    if (typeof thumbnail === "string") {
      return (
        <img
          src={thumbnail}
          alt="@THUMBNAIL"
          className="w-full aspect-video rounded-md"
        />
      );
    } else if (thumbnail instanceof File) {
      // thumbnail은 File 객체여야 한다.
      // 예를들어, <input type=file">에서 사용자가 선택한 파일을 나타내는 객체이다.
      // createObjectURL 매서드는 파일을 브라우저에서 사용할 수 잇는 임시 URL 로 변환된다. *(미리보기)
      // 이 URL 은 해당 파일에 대한 참조를 제공하여 로컬에서만 요효하다. 즉, 이 URL 은 서버에서 접근할 수 없고, 사용자의 브라우저내에서만 유요하다.
      // 변환된 URL을 이미지, 비디오, 오디오 등의 미디어 파일에서 사용할 수 있다.

      return (
        <img
          src={URL.createObjectURL(thumbnail)}
          alt="@THUMBNAIL"
          className="w-full aspect-video rounded-md"
        />
      );
    }

    //썸네일이 설정되지 않은 경우에는 기본 이미지 아이콘을 보여준다. (기본값)
    return (
      <div className="w-full aspect-video flex items-center justify-center rounded-md bg-card">
        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={() => fileInputRef.current?.click()}
        >
          <Image />
        </Button>
      </div>
    );
  };

  //저장
  const handleSave = async () => {
    console.log(title);
    console.log(category);
    console.log(thumbnail);

    // const { data, error } = await supabase.from("topics").insert([{}]).select();
  };

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
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <Asterisk size={14} className="text-[#FA6859]" />
                <p className="text-neutral-400 text-base">제목</p>
              </div>
              <Input
                placeholder="토픽제목을 입력하세요."
                className="h-15 placeholder:text-base px-3 font-semibold border-none"
                value={title}
                onChange={(event) => setTitle(event.currentTarget.value)}
              />
            </div>
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
              <Select
                value={category}
                onValueChange={(value) => setCategory(value)}
              >
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
                {/* 미리보기 */}
                {handleRenderPreview()}
                <Input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleChangeFile}
                />

                {/* 썸네일 제거 버튼 */}
                <Button
                  variant={"secondary"}
                  className="bg-card"
                  onClick={() => setThumbnail(null)}
                >
                  <ImageOff />
                  썸네일 제거
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 아래 버튼 */}
      <div className="fixed bottom-12 flex items-center gap-2">
        <Button variant={"outline"} size={"icon"}>
          <ArrowLeft />
        </Button>
        <Button
          variant={"outline"}
          className="px-5! bg-amber-900/50!"
          onClick={handleSave}
        >
          <Save />
          저장
        </Button>
        <Button variant={"outline"} className="px-5! bg-emerald-900/50!">
          <BookOpenCheck />
          발행
        </Button>
        <Separator orientation="vertical" className="h-5!" />
        <Button variant={"outline"} size={"icon"} className="bg-red-900/50!">
          <Trash2 />
        </Button>
      </div>
    </main>
  );
}

export default CreateTopic;
