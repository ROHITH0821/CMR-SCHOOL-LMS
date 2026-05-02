"use client";

import dynamic from "next/dynamic";

export const EventsCalendar = dynamic(
  () => import("./EventsCalendar").then((mod) => mod.EventsCalendar),
  {
    ssr: false,
    loading: () => <div className="w-full h-[560px] animate-pulse bg-gray-100 rounded-[2rem]" />,
  }
);
