import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";
import { Typography } from "@/components/core/Typography";
import { HelpArticle, HelpArticleCategory } from "./ArticlesList";

interface ArticleProps extends HelpArticle {
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<HelpArticle | null>>;
}

export function Article({
  isExpanded,
  setIsExpanded,
  ...article
}: ArticleProps) {
  const { category, title, description } = article;
  const colorsByCategory: Record<HelpArticle["category"], string> = {
    [HelpArticleCategory.LISTINGS]: "bg-[#272D4F26]",
    [HelpArticleCategory.MY_ACCOUNT]: "bg-[#FF712526]",
    [HelpArticleCategory.WORKING_AS_A_TRADIE]: "bg-[#DC354526]",
  };
  return (
    <div className="rounded-[12px] border border-[#0000001A] overflow-hidden">
      <div className={`py-3 px-6 ${colorsByCategory[category]}`}>
        <Typography variant="16px/700/21.86px" className="text-black-4">
          {category}
        </Typography>
      </div>
      <div className="p-6 grid gap-5">
        <Typography variant="24px/800/32.78px" className="text-black-3">
          {title}
        </Typography>
        <Typography
          variant="14px/400/21px"
          className={cn("text-black-4", isExpanded ? "" : "truncate-lines-3")}
        >
          {description}
        </Typography>
        <Typography
          variant="16px/700/21.86px"
          className="text-black-1 cursor-pointer"
          onClick={() => setIsExpanded(isExpanded ? null : article)}
        >
          {isExpanded ? "Read less" : "Read more"}
        </Typography>
      </div>
    </div>
  );
}
