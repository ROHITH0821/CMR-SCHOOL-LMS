/**
 * ADMIN INSTRUCTIONS:
 * 1. To add a new event, copy an existing event block (between { and }).
 * 2. Change the 'id' to a unique number.
 * 3. Set 'title', 'date' (YYYY-MM-DD), 'category' (Exam, Holiday, Event, Activity), and 'description'.
 * 4. Save this file to update the website calendar automatically.
 */
export type EventCategory = "Exam" | "Holiday" | "Event" | "Activity";

export interface SchoolEvent {
  id: string;
  title: string;
  date: string; // ISO format YYYY-MM-DD
  category: EventCategory;
  description: string;
}

export const SCHOOL_EVENTS: SchoolEvent[] = [
  // MAY 2026
  { id: "1", title: "Summer Vacation Starts", date: "2026-05-01", category: "Holiday", description: "School closes for summer break." },
  
  // JUNE 2026
  { id: "2", title: "School Reopens", date: "2026-06-12", category: "Event", description: "First day of the new academic session." },
  { id: "3", title: "Orientation Day", date: "2026-06-15", category: "Activity", description: "Welcome program for new parents and students." },
  
  // JULY 2026
  { id: "4", title: "Investiture Ceremony", date: "2026-07-04", category: "Event", description: "Installation of the student council." },
  { id: "5", title: "Unit Test I Begins", date: "2026-07-20", category: "Exam", description: "Periodic assessment for all classes." },
  
  // AUGUST 2026
  { id: "6", title: "Independence Day", date: "2026-08-15", category: "Activity", description: "Flag hoisting and cultural program." },
  { id: "7", title: "Raksha Bandhan", date: "2026-08-28", category: "Holiday", description: "School holiday." },
  
  // SEPTEMBER 2026
  { id: "8", title: "Teacher's Day", date: "2026-09-05", category: "Activity", description: "Student-led celebrations for faculty." },
  { id: "9", title: "Term I Exams", date: "2026-09-15", category: "Exam", description: "Half-yearly examinations." },
  
  // OCTOBER 2026
  { id: "10", title: "Gandhi Jayanti", date: "2026-10-02", category: "Holiday", description: "School holiday." },
  { id: "11", title: "Dussehra Break", date: "2026-10-18", category: "Holiday", description: "Mid-term vacation." },
  
  // NOVEMBER 2026
  { id: "12", title: "Diwali Celebrations", date: "2026-11-01", category: "Activity", description: "Campus decoration and festivities." },
  { id: "13", title: "Children's Day", date: "2026-11-14", category: "Activity", description: "Fun fair and sports activities." },
];
