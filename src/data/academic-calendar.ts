export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  startDate: string;
  endDate?: string;
  category: 'academic' | 'holiday' | 'exam' | 'event' | 'enrollment';
  location?: string;
}

export interface Semester {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  events: CalendarEvent[];
}

export interface AcademicYear {
  year: string;
  semesters: Semester[];
}

// Example academic calendar data
export const academicCalendar: AcademicYear = {
  year: "2024-2025",
  semesters: [
    {
      id: "1st-sem-2024",
      name: "First Semester",
      startDate: "2024-08-15",
      endDate: "2024-12-20",
      events: [
        {
          id: "enrollment-1",
          title: "Enrollment Period",
          description: "Regular enrollment for first semester",
          startDate: "2024-07-15",
          endDate: "2024-08-14",
          category: "enrollment"
        },
        {
          id: "orientation-1",
          title: "Student Orientation",
          description: "New student orientation and campus tour",
          startDate: "2024-08-15",
          category: "academic"
        },
        {
          id: "prelim-exam-1",
          title: "Preliminary Examinations",
          startDate: "2024-09-20",
          endDate: "2024-09-24",
          category: "exam"
        },
        {
          id: "midterm-exam-1",
          title: "Midterm Examinations",
          startDate: "2024-10-25",
          endDate: "2024-10-29",
          category: "exam"
        },
        {
          id: "finals-1",
          title: "Final Examinations",
          startDate: "2024-12-15",
          endDate: "2024-12-19",
          category: "exam"
        }
      ]
    },
    {
      id: "2nd-sem-2025",
      name: "Second Semester",
      startDate: "2025-01-06",
      endDate: "2025-05-15",
      events: [
        {
          id: "enrollment-2",
          title: "Enrollment Period",
          description: "Regular enrollment for second semester",
          startDate: "2024-12-27",
          endDate: "2025-01-05",
          category: "enrollment"
        },
        {
          id: "foundation-day",
          title: "Foundation Day Celebration",
          description: "School-wide celebration and activities",
          startDate: "2025-02-14",
          category: "event",
          location: "Main Campus"
        },
        {
          id: "prelim-exam-2",
          title: "Preliminary Examinations",
          startDate: "2025-02-20",
          endDate: "2025-02-24",
          category: "exam"
        },
        {
          id: "midterm-exam-2",
          title: "Midterm Examinations",
          startDate: "2025-03-25",
          endDate: "2025-03-29",
          category: "exam"
        },
        {
          id: "finals-2",
          title: "Final Examinations",
          startDate: "2025-05-10",
          endDate: "2025-05-14",
          category: "exam"
        }
      ]
    }
  ]
};
