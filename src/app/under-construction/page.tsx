import Link from "next/link";

import { Button } from "@/components/ui/button";

function UnderConstruction() {
  return (
    <div className="container min-h-full flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold text-center">
          Under Construction
        </h1>
        <p className="text-lg text-stone-600 text-center mt-4">
          Website decided to take a ☕ break – we&apos;ll be back before you can
          finish your cup!
        </p>

        <Link href="/">
          <Button
            variant="outline"
            className="bg-transparent rounded-full font-semibold text-lg mt-8 px-8 py-6 w-full md:w-fit"
          >
            back to home
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default UnderConstruction;
