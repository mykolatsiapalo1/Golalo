"use client";
import { HelpSearch } from "./HelpSearch";
import { ArticlesList } from "./ArticlesList";
import { ContactSupport } from "./ContactSupport";

export function Help() {
  return (
    <>
      <HelpSearch />
      <ArticlesList />
      <ContactSupport />
    </>
  );
}
