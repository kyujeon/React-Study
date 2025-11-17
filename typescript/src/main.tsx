import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";
import App from "./App.tsx"; // 메인페이지
import SignUp from "./pages/auth/sign-up.tsx"; // 회원가입 페이지
import SignIn from "./pages/auth/sign-in.tsx"; // 로그인 페이지
import CreateTopic from "./pages/topic/creat-topic.tsx"; // 토픽 작성 페이지
import ReadTopic from "./pages/topic/read-topic.tsx"; // 토픽 조회 페이지
import UpdateTopic from "./pages/topic/update-topic.tsx"; // 토픽 수정 페이지
import RootLayout from "./pages/layout.tsx";

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
          {/* TOPIC */}
          <Route path="/create-topic" element={<CreateTopic />} />
          <Route path="/topics/:id" element={<ReadTopic />} />
          <Route path="/topics/:id/edit" element={<UpdateTopic />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
