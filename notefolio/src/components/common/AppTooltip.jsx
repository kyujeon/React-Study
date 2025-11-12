import { Tooltip, TooltipContent, TooltipTrigger } from "../ui";

function AppTooltip({ children, description }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent>
        <p>{description}</p>
      </TooltipContent>
    </Tooltip>
  );
}

export { AppTooltip };
