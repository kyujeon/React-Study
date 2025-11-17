import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Label,
  Separator,
} from "@/components/ui";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ChevronRight, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import { z } from "zod";

const formSchema = z
  .object({
    email: z.email("올바른 형식의 이메일 주소를 입력해주세요."),
    password: z
      .string()
      .min(8, { message: "비밀번호는 최소 8자 이상으로 작성해주세요." }),
    verifyPassword: z.string(),

    // 필수동의
    termsService: z.boolean().refine((val) => val === true, {
      message: "서비스 이용약관에 동의해주세요.",
    }),
    termsPrivacy: z.boolean().refine((val) => val === true, {
      message: "개인정보 수집 및 이용에 동의해주세요.",
    }),

    // 선택 동의
    termsMarketing: z.boolean().optional(),
  })
  .refine((data) => data.password === data.verifyPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["verifyPassword"],
  });

function SignUp() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      verifyPassword: "",
      termsService: false,
      termsPrivacy: false,
      termsMarketing: false,
    },
  });

  // 로그인
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  return (
    <div className="w-full max-w-[1328px] h-full flex items-center justify-center">
      <Card className="w-full max-w-sm border-0 bg-transparent">
        <CardHeader className="gap-0">
          <CardTitle className="text-lg">회원가입</CardTitle>
          <CardDescription>
            회원가입을을 위한 정보를 입력해주세요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="before:content-['*'] before:ml-1 before:text-red-500">
                      이메일
                    </FormLabel>
                    <div className="flex gap-2">
                      <FormControl>
                        <Input placeholder="이메일을 입력하세요." {...field} />
                      </FormControl>
                      <Button variant="outline">본인인증</Button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel className="before:content-['*'] before:ml-1 before:text-red-500">
                        비밀번호
                      </FormLabel>
                    </div>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={show ? "text" : "password"}
                          placeholder="비밀번호를 입력하세요."
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={() => setShow(!show)}
                          className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                        >
                          {show ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="verifyPassword"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel className="before:content-['*'] before:ml-1 before:text-red-500">
                        비밀번호 확인
                      </FormLabel>
                    </div>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={show ? "text" : "password"}
                          placeholder="비밀번호 확인을 입력하세요."
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={() => setShow(!show)}
                          className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                        >
                          {show ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="termsService"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center pb-2">
                      <FormLabel className="before:content-['*'] before:ml-1 before:text-red-500">
                        필수 동의항목
                      </FormLabel>
                    </div>
                    <FormControl>
                      <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                          <Checkbox
                            id="termsService"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                          <div className="w-full flex justify-between">
                            <Label htmlFor="termsService" className="text-xs">
                              서비스 이용약관 동의
                            </Label>
                            <NavLink
                              to={"/sign-up"}
                              className="text-xs flex items-center"
                            >
                              자세히
                              <ChevronRight className="w-4" />
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="termsPrivacy"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                          <Checkbox
                            id="termsPrivacy"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                          <div className="w-full flex justify-between">
                            <Label htmlFor="termsPrivacy" className="text-xs">
                              개인정보 수집 및 이용동의
                            </Label>
                            <NavLink
                              to={"/sign-up"}
                              className="text-xs flex items-center"
                            >
                              자세히
                              <ChevronRight className="w-4" />
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Separator />
              <FormField
                control={form.control}
                name="termsMarketing"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center py-2">
                      <FormLabel>산택 동의항목</FormLabel>
                    </div>
                    <FormControl>
                      <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                          <Checkbox
                            id="termsMarketing"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                          <div className="w-full flex justify-between">
                            <Label htmlFor="termsMarketing" className="text-xs">
                              마케팅 및 광고 수신 동의
                            </Label>
                            <NavLink
                              to={"/sign-up"}
                              className="text-xs flex items-center"
                            >
                              자세히
                              <ChevronRight className="w-4" />
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="w-full flex items-center gap-2">
                <Button
                  variant={"outline"}
                  size="icon"
                  onClick={() => navigate("/sign-in")}
                >
                  <ArrowLeft />
                </Button>
                <Button type="submit" className="flex-1 bg-blue-950 text-white">
                  로그인
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <div className="w-full flex items-center justify-center gap-2 -mt-3">
            <p>이미 계정이 있으신가요?</p>

            <NavLink to={"/sign-in"} className="underline underline-offset-4">
              로그인
            </NavLink>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default SignUp;
