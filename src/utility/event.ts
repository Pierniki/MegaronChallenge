import { CalendarEvent } from '../api-client';

export const getTotalEventsNumber = (eventsArray: CalendarEvent[][]) => {
  return eventsArray.reduce((sum, currentEvents) => {
    return sum + currentEvents.length;
  }, 0);
};

export const getTotalEventsDuration = (eventsArray: CalendarEvent[][]) => {
  return eventsArray.reduce((sum, currentEvents) => {
    return sum + getEventsDurationSum(currentEvents);
  }, 0);
};

export const getTotalLongestEvent = (eventsArray: CalendarEvent[][]) => {
  return eventsArray.reduce(
    (longestEvent, currentEvents) => {
      const longestEventFromArray = getLongestEvent(currentEvents);
      return longestEvent.durationInMinutes >
        longestEventFromArray.durationInMinutes
        ? longestEvent
        : longestEventFromArray;
    },
    { durationInMinutes: 0 } as CalendarEvent
  );
};

export const getEventsDurationSum = (events: CalendarEvent[]) => {
  return events.reduce((eventsDurationSum, currentEvent) => {
    return eventsDurationSum + currentEvent.durationInMinutes;
  }, 0);
};

export const getLongestEvent = (events: CalendarEvent[]) => {
  return events.reduce((longestEvent, currentEvent) => {
    return longestEvent.durationInMinutes > currentEvent.durationInMinutes
      ? longestEvent
      : currentEvent;
  });
};
