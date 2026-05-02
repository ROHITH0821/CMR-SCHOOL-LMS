"use client";

import { useMemo, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import type { View } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = { "en-US": enUS };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: (date: Date) => startOfWeek(date, { locale: enUS }),
  getDay,
  locales,
});

const events = [
  {
    title: "PTM — Primary",
    start: new Date(2026, 3, 12, 9, 0),
    end: new Date(2026, 3, 12, 13, 0),
  },
  {
    title: "Science Fair setup",
    start: new Date(2026, 3, 18, 8, 0),
    end: new Date(2026, 3, 18, 14, 0),
  },
  {
    title: "Annual Day rehearsal",
    start: new Date(2026, 11, 1, 15, 0),
    end: new Date(2026, 11, 1, 18, 0),
  },
];

export function EventsCalendar() {
  const [view, setView] = useState<View>("month");
  const defaultDate = useMemo(() => new Date(2026, 3, 1), []);

  return (
    <div className="rbc-wrapper h-[560px] rounded-modal border border-border bg-white p-4 shadow-soft">
      <div className="mb-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setView("month")}
          className={`rounded-pill px-4 py-2 text-sm ${view === "month" ? "bg-primary text-white" : "bg-sectionAlt"}`}
        >
          Month
        </button>
        <button
          type="button"
          onClick={() => setView("week")}
          className={`rounded-pill px-4 py-2 text-sm ${view === "week" ? "bg-primary text-white" : "bg-sectionAlt"}`}
        >
          Week
        </button>
      </div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultDate={defaultDate}
        view={view}
        onView={setView}
        views={["month", "week"]}
        style={{ height: "460px" }}
      />
    </div>
  );
}
