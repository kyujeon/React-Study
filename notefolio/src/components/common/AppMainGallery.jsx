import { Skeleton } from "../ui/skeleton";

function AppMainGallery() {
  const gallery = ["", "", "", "", ""];
  return (
    <section className="flex items-center gap-6 mt-10 mb-16 overflow-x-scroll">
      {gallery.map(() => (
        <Skeleton className="min-w-[520px] w-[520px] h-80 " />
      ))}
    </section>
  );
}

export { AppMainGallery };
