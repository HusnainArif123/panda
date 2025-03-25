"use client";

import Image from "next/image";
import { Toaster, toast } from "react-hot-toast";

export default function Home() {
  const showToast = () => {
    toast.success("This is a test toast!");
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Toaster /> {/* Ensure this is included at the top level */}
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <button
          onClick={showToast}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Show Toast
        </button>
      </main>
    </div>
  );
}
