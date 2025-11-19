import { AppFooter, AppHeader } from "@/components/common";
import { Outlet } from "react-router";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui";

function RootLayout() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-full h-screen flex flex-col">
        <AppHeader />
        <main className="w-full mt-12 flex-1 flex justify-center">
          <Outlet />
        </main>

        <AppFooter />
        <Toaster position="top-center" richColors />
      </div>
    </ThemeProvider>
  );
}

export default RootLayout;
