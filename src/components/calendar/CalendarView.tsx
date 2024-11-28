import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import type { CalendarEvent, AcademicYear } from '../../data/academic-calendar';

interface Props {
  academicYear: AcademicYear;
  selectedCategory: string;
}

export default function CalendarView({ academicYear, selectedCategory }: Props) {
  const [currentView, setCurrentView] = useState('dayGridMonth');

  // Transform our events to FullCalendar format
  const events = academicYear.semesters.flatMap(semester =>
    semester.events.map(event => ({
      id: event.id,
      title: event.title,
      start: event.startDate,
      end: event.endDate || event.startDate,
      description: event.description,
      location: event.location,
      classNames: [
        'calendar-event',
        `event-${event.category}`,
      ],
      display: selectedCategory === 'all' || selectedCategory === event.category ? 'auto' : 'none',
      extendedProps: {
        category: event.category
      }
    }))
  );

  const categoryColors = {
    academic: '#93c5fd', // blue-300
    holiday: '#fca5a5', // red-300
    exam: '#d8b4fe', // purple-300
    event: '#86efac', // green-300
    enrollment: '#fdba74', // orange-300
  };

  const handleEventClick = (info: any) => {
    const event = info.event;
    // Show event details in a modal or tooltip
    alert(`
      ${event.title}
      ${event.extendedProps.description || ''}
      ${event.start.toLocaleDateString()} ${event.end ? `- ${event.end.toLocaleDateString()}` : ''}
      ${event.extendedProps.location || ''}
    `);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <style>
        {`
          .fc-event {
            cursor: pointer;
            transition: transform 0.2s;
          }
          .fc-event:hover {
            transform: scale(1.02);
          }
          .event-academic { background-color: ${categoryColors.academic}; border-color: ${categoryColors.academic}; }
          .event-holiday { background-color: ${categoryColors.holiday}; border-color: ${categoryColors.holiday}; }
          .event-exam { background-color: ${categoryColors.exam}; border-color: ${categoryColors.exam}; }
          .event-event { background-color: ${categoryColors.event}; border-color: ${categoryColors.event}; }
          .event-enrollment { background-color: ${categoryColors.enrollment}; border-color: ${categoryColors.enrollment}; }
        `}
      </style>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={currentView}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek'
        }}
        events={events}
        eventClick={handleEventClick}
        height="auto"
        eventDisplay="block"
        eventTimeFormat={{
          hour: 'numeric',
          minute: '2-digit',
          meridiem: 'short'
        }}
        firstDay={1}
        weekends={true}
        navLinks={true}
        dayMaxEvents={true}
        views={{
          dayGridMonth: {
            dayMaxEvents: 3,
          }
        }}
      />
    </div>
  );
}
