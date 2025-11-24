import {
  BadgeCheck,
  CaseSensitive,
  ChartNoAxesColumnIncreasing,
  Heart,
  MessageCircleMore,
} from "lucide-react";
import { Card, Separator } from "../ui";
import { useNavigate } from "react-router";

interface Topic {
  id: number;
  created_at: Date;
  updated_at: Date;
  title: string;
  content: string;
  category: string;
  thumbnail: string;
  status: string;
  author: string;
}

interface Props {
  props: Topic;
}

// 메인 페이지의 NEW 토픽 카드 UI에서 해당 토픽의 내용을 일부분 미리보기로
// 유저가 볼 수 있게 하기 위해 Blocknote가 가진 Block[] 타입에서
// text 요소만 추출하여 UI 구조에 맞게 설정
function extractTextfromContent(content: string, maxChars = 200) {
  const parsed = typeof content === "string" ? JSON.parse(content) : content;

  if (!Array.isArray(parsed)) {
    console.warn("전달받은 Blocknote의 content 데이터 타입이 배열이 아닙니다.");
    return "";
  }

  let result = "";

  for (const block of parsed) {
    if (Array.isArray(block.content)) {
      for (const child of block.content) {
        if (child.text) {
          result += child.text + " "; // " " 이 코드의 의미는 띄워쓰기 => child.text가 띄워쓰기 없이 쭉 붙어서 출력됨을 방지

          if (result.length >= maxChars) {
            return result.slice(0, maxChars);
          }
        }
      }
    }
  }

  return result.trim();
}

function NewTopic({ props }: Props) {
  const navigate = useNavigate();
  return (
    <Card className="p-4 gap-4" onClick={() => navigate(`/topic/${props.id}`)}>
      <div className="h-fit flex items-center justify-between gap-4">
        <div className="h-full flex flex-col justify-between">
          {/* 제목 */}
          <div className="flex flex-col">
            <CaseSensitive size={20} className="text-neutral-400" />
            <p className="font-semibold text-base line-clamp-2">
              {/* NEW Topic 제목 */}
              {props.title}
            </p>
          </div>
          {/* 본문 */}
          <p className="text-neutral-400 line-clamp-3">
            {/* new topic 본문 조회 테스트 */}
            {extractTextfromContent(props.content)}
          </p>
        </div>
        <div className="w-35 min-w-35 bg-accent rounded-md">
          <img
            src={props.thumbnail}
            alt="@VITE"
            className="w-full m-h-35 bg-accent rounded-md object-cover"
          />
        </div>
      </div>
      <Separator />
      {/* 프로필 */}
      <div className="flex items-end justify-between">
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <BadgeCheck size={14} className="text-green-400 mb-0.5" />
            <p>개발자 9Diin</p>
          </div>
          <div className="flex items-center text-neutral-400 text-xs gap-2">
            <p>IT 및 기술분야</p>
            <Separator orientation="vertical" className="h-3!" />
            <p>소프트웨어 엔지니어</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <ChartNoAxesColumnIncreasing size={14} />
              <p>1</p>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircleMore size={14} />
              <p>1</p>
            </div>
          </div>
          <Separator orientation="vertical" className="h-3!" />
          <div className="flex items-center gap-1">
            <Heart size={15} className="text-red-400" />
            <p>1</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export { NewTopic };
