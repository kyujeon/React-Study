import { Webhook } from "lucide-react";
import { Separator } from "../ui/separator";

function AppCompanyLink() {
  return (
    <div className="w-full h-[34px] flex items-center gap-3 px-8">
      <Webhook size={16} className="text-neutral-400" />
      <Separator orientation="vertical" className="h-3!" />
      <p className="font-semibold text-sm">notefolio</p>
      <Separator orientation="vertical" className="h-3!" />
      <p className="font-extrabold text-xs text-neutral-400">LOUD</p>
    </div>
  );
}

export { AppCompanyLink };
