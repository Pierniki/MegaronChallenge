import {
  getEventsDurationSum,
  getLongestEvent,
  getTotalEventsDuration,
  getTotalEventsNumber,
  getTotalLongestEvent,
} from './event';

describe('events utility', () => {
  const shortEvent = { uuid: '1', title: 'short event', durationInMinutes: 1 };
  const midEvent = { uuid: '2', title: 'middle event', durationInMinutes: 50 };
  const longEvent = { uuid: '3', title: 'long event', durationInMinutes: 100 };

  const events = [midEvent, longEvent, shortEvent];
  describe('getLongestEvent function', () => {
    it('should return longest event', () => {
      const longestEvent = getLongestEvent(events);
      expect(longestEvent).toEqual(longEvent);
    });
  });
  describe('getEventsDurationSum', () => {
    it('should return correct sum of durations', () => {
      const sum =
        shortEvent.durationInMinutes +
        midEvent.durationInMinutes +
        longEvent.durationInMinutes;
      expect(getEventsDurationSum(events)).toEqual(sum);
    });
  });

  const allEvents = [[midEvent], [longEvent, shortEvent]];

  describe('getTotalEventsDuration', () => {
    it('should return correct sum of all durations', () => {
      const sum =
        allEvents[0][0].durationInMinutes +
        allEvents[1][0].durationInMinutes +
        allEvents[1][1].durationInMinutes;
      expect(getTotalEventsDuration(allEvents)).toEqual(sum);
    });
  });

  describe('getTotalEventsNumber', () => {
    it('should return corrent number of events', () => {
      const eventsInAllEvents = 3;
      expect(getTotalEventsNumber(allEvents)).toEqual(eventsInAllEvents);
    });
  });

  describe('getTotalLongestEvent', () => {
    it('should return longest event', () => {
      const longestEvent = getTotalLongestEvent(allEvents);
      expect(longestEvent).toEqual(longEvent);
    });
  });
});
