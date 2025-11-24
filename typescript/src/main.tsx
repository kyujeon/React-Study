import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";
import App from "./App.tsx"; // 메인페이지
import SignUp from "./pages/auth/sign-up.tsx"; // 회원가입 페이지
import SignIn from "./pages/auth/sign-in.tsx"; // 로그인 페이지
import CreateTopic from "./pages/topic/creat-topic.tsx"; // 토픽 작성 페이지
import DetailTopic from "./pages/topic/detail-topic.tsx"; // 토픽 조회 페이지
import UpdateTopic from "./pages/topic/update-topic.tsx"; // 토픽 수정 페이지
import RootLayout from "./pages/layout.tsx";
import { UserProfile } from "./pages/user/profile.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* ROOT */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<App />} />
          {/* AUTH */}
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          {/* USER */}
          <Route path="/user/:user_id/profile" element={<UserProfile />} />
          {/* TOPIC */}
          <Route path="/topic/:topic_id/create" element={<CreateTopic />} />
          <Route path="/topic/:topic_id" element={<DetailTopic />} />
          <Route path="/topic/:topic_id/edit" element={<UpdateTopic />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
