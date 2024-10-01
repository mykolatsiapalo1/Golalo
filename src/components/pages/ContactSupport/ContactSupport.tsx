"use client";
import { z } from "zod";
import Link from "next/link";
import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from "@/components/ui/select";
import { ArrowIcon } from "@/icons";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Typography } from "@/components/core/Typography";
import { HelpArticleCategory } from "../Help/ArticlesList";

const FormSchema = z.object({
  about: z.string({
    required_error: "Please select about what your query is about.",
  }),
  subject: z.string({
    required_error: "Please type a subject for your query.",
  }),
  question: z.string({
    required_error: "Please write about your question or issue.",
  }),
});

export function ContactSupport() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      about: "",
      subject: "",
      question: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <div className="max-w-[1200px] w-full mx-auto py-12 px-8 relative">
      <div
        onClick={() => window.history.back()}
        className="flex items-center gap-1 absolute top-12 left-0 cursor-pointer"
      >
        <ArrowIcon />
        <Typography variant="18px/700/24.59px" className="text-black-5">
          Back
        </Typography>
      </div>
      <div className="grid gap-8 max-w-[481px] mx-auto">
        <Typography
          variant="32px/700/43.71px"
          className="text-black-1 text-center"
        >
          Contact Support
        </Typography>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
            <FormField
              control={form.control}
              name="about"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger smallLabel="What is your query about?">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.values(HelpArticleCategory).map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      smallLabel="Subject"
                      placeholder="Type a subject for your query"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      smallLabel="How can we help?"
                      placeholder="Write about your question or issue"
                      className="h-[245px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="mt-2">
              Contact Support
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
