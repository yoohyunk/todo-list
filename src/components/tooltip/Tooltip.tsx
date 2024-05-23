export const Tooltip = ({ tooltipText, isShown }: TooltipProps) => {
  if (!isShown) {
    return null;
  }

  return <div className="bg-black  ">{tooltipText}</div>;
};

type TooltipProps = {
  tooltipText: string;
  isShown: boolean;
};
