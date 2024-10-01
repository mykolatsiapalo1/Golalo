import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/core/Typography";

export function ContactSupport() {
  return (
    <div className="pb-12">
      <div className="max-w-[1200px] w-full mx-auto bg-white-2 rounded-[12px] py-12 px-[120px] grid gap-8">
        <Typography
          variant="32px/700/43.71px"
          className="text-black-3 text-center"
        >
          Didn’t find what you were looking for?
          <br />
          We’re here to help
        </Typography>
        <Link href="/contact-support" className=" mx-auto">
          <Button className="w-fit py-3 px-6" variant="secondary">
            Contact Support
          </Button>
        </Link>
      </div>
    </div>
  );
}
