"use client";
import { cn } from "@/lib/utils";
import { Article } from "./Article";
import { useMemo, useState } from "react";
import { ArrowPaginationIcon } from "@/icons";
import { styled } from "@mui/material/styles";
import usePagination from "@mui/material/usePagination";
import { Typography } from "@/components/core/Typography";

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  alignItems: "center",
  gap: "32px",
});

export enum HelpArticleCategory {
  LISTINGS = "Listings",
  MY_ACCOUNT = "My Account",
  WORKING_AS_A_TRADIE = "Working as a tradie",
}

export interface HelpArticle {
  title: string;
  description: string;
  category: HelpArticleCategory;
  id: number;
}

export function ArticlesList() {
  const helpArticles: HelpArticle[] = useMemo(
    () =>
      Array.from({ length: 90 }, (_, id) => ({
        title: "<Article Title>",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sem leo, suscipit eget elit porttitor, volutpat consequat turpis. In interdum mauris et urna maximus, sed tincidunt nulla porta. Maecenas congue risus enim. Quisque egestas augue sem, nec egestas leo mattis ut. Phasellus non sem eu massa finibus volutpat. Vestibulum condimentum augue odio, in dapibus erat vehicula ut. Praesent ac massa at urna dignissim iaculis egestas ut felis. Nullam pharetra, lorem non congue fringilla, nisl ex ullamcorper nibh, nec vehicula nulla libero id dui. Pellentesque bibendum pulvinar tempor. Fusce sodales tincidunt ex, non aliquet arcu consectetur posuere. Mauris suscipit auctor tempor. Phasellus a finibus felis, vel porta nibh. Ut laoreet purus sed enim feugiat, non bibendum nunc semper. Cras aliquam velit in tincidunt pulvinar. Morbi vitae dictum nibh.  Sed viverra nunc sit amet libero tincidunt euismod.",
        category:
          Object.values(HelpArticleCategory)[
            Math.floor(
              Math.random() * Object.values(HelpArticleCategory).length
            )
          ],
        id,
      })),
    []
  );
  const [expandedArticle, setExpandedArticle] = useState<HelpArticle | null>(
    null
  );

  const [page, setPage] = useState(1);

  const { items } = usePagination({
    count: Math.ceil(helpArticles.length / 9),
    page,
    onChange: (_, page) => setPage(page),
  });
  return (
    <div className="py-12 px-8">
      <div className="max-w-[1200px] mx-auto grid gap-8">
        <div className="grid gap-6 grid-cols-3 items-start">
          {helpArticles.slice((page - 1) * 9, page * 9).map((article) => (
            <Article
              key={article.id}
              {...article}
              isExpanded={expandedArticle?.id === article.id}
              setIsExpanded={setExpandedArticle}
            />
          ))}
        </div>
        <nav className="mx-auto">
          <List>
            {items.map(({ page, type, selected, ...item }, index) => {
              let children = null;

              if (type === "start-ellipsis" || type === "end-ellipsis") {
                children = "…";
              } else if (type === "page") {
                children = (
                  <button type="button" {...item}>
                    <Typography
                      variant={
                        selected ? "16px/700/21.86px" : "16px/400/21.86px"
                      }
                      className={cn("text-black-5", selected && "text-accent")}
                    >
                      {page}
                    </Typography>
                  </button>
                );
              } else {
                children = (
                  <button
                    type="button"
                    className="[&:disabled_>_div]:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
                    {...item}
                  >
                    <div className="p-1 rounded-[8px] bg-accent">
                      {type === "previous" ? (
                        <ArrowPaginationIcon direction="left" />
                      ) : (
                        <ArrowPaginationIcon />
                      )}
                    </div>
                  </button>
                );
              }

              return (
                <li key={index} className="grid items-center">
                  {children}
                </li>
              );
            })}
          </List>
        </nav>
      </div>
    </div>
  );
}
