"use client";

import Image from "next/image";
import Link from "next/link";

export const HomePage = () => {
  return (
    <main>
      <p>Page content</p>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <Link href="about">
        <p className="text-xl text-red-500">Go to About page</p>
      </Link>
      <Image src="/favicon.svg" alt="Logo" width={100} height={24} priority />
    </main>
  );
};
