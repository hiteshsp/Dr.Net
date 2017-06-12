YUI().use(
  'aui-scheduler',
  function(Y) {
    var events = [
      {
        content: 'Event1',
        endDate: new Date(2013, 1, 4, 5),
        startDate: new Date(2013, 1, 4, 1)
      }
    ];

    var eventRecorder = new Y.SchedulerEventRecorder();
    var monthView = new Y.SchedulerMonthView();
    var weekView = new Y.SchedulerWeekView();
    var agendaView = new Y.SchedulerAgendaView();
    var dayView = new Y.SchedulerDayView();
    var date = new Date();
    new Y.Scheduler(
      {
        boundingBox: '#myScheduler',
        date: new Date(date),
        eventRecorder: eventRecorder,
        items: events,
        render: true,
        views: [monthView,weekView,agendaView,dayView]
      }
    );
  }
);