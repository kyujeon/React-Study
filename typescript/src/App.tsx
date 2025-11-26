import {
  ChartNoAxesCombined,
  ChevronDown,
  CodeXml,
  DraftingCompass,
  Footprints,
  Goal,
  Lightbulb,
  List,
  PencilLine,
  Rocket,
  Search,
} from "lucide-react";
import { Button, Input } from "./components/ui";
import { HotTopic, NewTopic } from "./components/topic";
import { useNavigate, useSearchParams } from "react-router";
import { toast } from "sonner";
import { UseAuthStore } from "./pages/store/auth";
import supabase from "./utils/supabase";
import { useEffect, useState } from "react";
import type { Topic } from "./types";

const CATEGORIES = [
  { icon: List, label: "전체", value: "" },
  { icon: Lightbulb, label: "인문학", value: "humidity" },
  { icon: Rocket, label: "스타트업", value: "start-up" },
  { icon: CodeXml, label: "IT·프로그래밍", value: "progamming" },
  { icon: Goal, label: "서비스·전략 기획", value: "planning" },
  { icon: ChartNoAxesCombined, label: "마케팅", value: "marketing" },
  { icon: DraftingCompass, label: "디자인·일러스트", value: "desing" },
  { icon: Footprints, label: "자기개발", value: "self-development" },
];

function App() {
  const navigate = useNavigate();
  const user = UseAuthStore((state) => state.user);

  const [topics, setTopics] = useState<Topic[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") || "";
  const [searchValue, setSearchValue] = useState<string>("");

  // 1. 전체 항목을 클릭했을 경우, "전체"라는 항목의 value 값을 어떻게 할것인가? default
  // 2. 이미 선택된 항목에 대해, 선택된 항목 재선택시 어떻게 할 것인가? 취소하고 다시
  // 3. 도메인 URL에 카테고리 value 값을 보여줄 것인가? no
  // 4. supabase Read의 Filtering 기능 사용할 때 어떻게 할 것인가?
  // 5. 검색 기능과의 차별점을 둘 것인가? (선택사항)

  const handleCategoryChange = (value: string) => {
    // http://localhost:5173/?category=start-up
    if (value === category) return; // => 선택한 항목 재선택한 것이므로 무시
    else if (value === "") setSearchParams({});
    else setSearchParams({ category: value });
  };

  const handleSearch = () => {
    fetchTopics(searchValue);
  };

  const movetoPage = async () => {
    // 1. 로그인 여부 체크
    if (!user) {
      toast.warning("토픽 작성은 로그인 후 이용 가능합니다.");
      return;
    }

    // 토픽 작성하기 버튼 클릭 시, (빈)토픽 생성
    const { data, error } = await supabase
      .from("topics")
      .insert([
        {
          author: user.id,
          title: null,
          category: null,
          thumbnail: null,
          content: null,
          status: "TEMP",
        },
      ])
      .select();

    if (error) {
      console.log(error);
      toast.error(error.message);
      return;
    }

    if (data) {
      navigate(`/topic/${data[0].id}/create`);
    }
  };

  const fetchTopics = async (searchValue?: string) => {
    try {
      const query = supabase.from("topics").select("*").eq("status", "PUBLISH");

      if (searchValue && searchValue.trim() !== "") {
        query.like("title", `%${searchValue}%`);
      }

      if (category && category.trim() !== "") {
        query.eq("category", category);
      }

      const { data, error } = await query;

      if (error) {
        toast.error(error.message);
        return;
      }

      if (data) {
        setTopics(data);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  useEffect(() => {
    fetchTopics();
  }, [category]);

  //소셜 로그인 헤더에 표기 => display name 으로 설정하고 싶은데 잘 모르겠습니다.
  useEffect(() => {
    const restoreUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data.user) {
        UseAuthStore.getState().setUser({
          id: data.user.id,
          email: data.user.email,
          role: data.user.role,
        });
      }
    };

    restoreUser();
  }, []);

  return (
    <div className="w-full max-w-[1328px] h-full flex items-start py-6 gap-4">
      {/* 사이드 카테고리 */}
      <aside className="sticky top-18 w-60 min-w-60 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">카테고리</p>
          <ChevronDown />
        </div>
        <div className="flex flex-col gap-2">
          {CATEGORIES.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = item.value === category;

            return (
              <Button
                key={index}
                className={`${
                  isActive && "pl-6! text-white! bg-card!"
                } flex justify-start text-neutral-500 bg-transparent hover:bg-card hover:text-white hover:pl-6 duration-500`}
                onClick={() => handleCategoryChange(item.value)}
              >
                <IconComponent />
                {item.label}
              </Button>
            );
          })}
        </div>
      </aside>

      <div className="min-h-screen flex-1 flex flex-col gap-12">
        {/* 검색창 */}
        <section className="w-full flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <img src="/gif/heart.gif" alt="@HEART" className="w-8" />
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                지식과 인사이트를 모아,
              </h3>
            </div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              토픽으로 깊이 있게 나누세요.
            </h3>
          </div>
          <div className="w-full max-w-lg flex items-center gap-2 border py-3 pl-4 pr-3 rounded-full">
            <Search size={24} className="text-neutral-500 -mr-2" />
            <Input
              placeholder="관심 있는 클래스, 토픽 주제를 검색하세요."
              onChange={(event) => setSearchValue(event.target.value)}
              className="border-none bg-transparent! focus-visible:ring-0 placeholder:text-base"
            />
            <Button
              variant={"secondary"}
              className="rounded-full"
              onClick={handleSearch}
            >
              검색
            </Button>
          </div>
        </section>
        {/* HOT 토픽 */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <img
                src="/gif/writing-hand.gif"
                alt="@WRITING-HAND"
                className="w-7 mb-1"
              />
              <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                HOT 토픽
              </h4>
            </div>
            <p className="text-neutral-400 text-base">
              지금 가장 주목받는 주제들을 살펴보고, 다양한 관점의 인사이트를
              찾아보세요.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-6">
            <HotTopic />
            <HotTopic />
            <HotTopic />
            <HotTopic />
          </div>
        </section>
        {/* NEW 토픽 */}
        <section className="flex-1 flex flex-col gap-6 pb-8">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <img
                src="/gif/writing-hand.gif"
                alt="@WRITING-HAND"
                className="w-7 mb-1"
              />
              <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                NEW 토픽
              </h4>
            </div>
            <p className="text-neutral-400 text-base">
              새로운 시선으로, 새로운 이야기를 시작하세요. 지금 바로 당신만의
              토픽을 작성해보세요.
            </p>
          </div>
          {topics.length === 0 ? (
            <div className="w-full flex-1 flex items-center justify-center">
              {" "}
              <p className="text-neutral-400/50">
                😢 조회 가능한 데이터가 없습니다.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-6">
              {/* {topics
                .sort(
                  (a, b) =>
                    new Date(b.created_at).getTime() -
                    new Date(a.created_at).getTime()
                )
                .map((topic) => (
                  <NewTopic props={topic} />
                ))} */}
              {[...topics].reverse().map((topic) => (
                <NewTopic props={topic} />
              ))}
            </div>
          )}
        </section>
      </div>
      <Button
        variant={"destructive"}
        className="fixed bottom-6 left-1/2 -translate-1/2 p-3! rounded-lg opacity-60 hover:opacity-100 duration-200"
        onClick={movetoPage}
      >
        <PencilLine />
        토픽 작성하기
      </Button>
    </div>
  );
}

export default App;
