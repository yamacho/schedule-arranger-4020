'use strict';

import $ from 'jquery';

$('.availability-toggle-button').each((i, e) => {
  const button = $(e);

  button.click(() => {
    const scheduleId = button.data('schedule-id');
    const userId = button.data('user-id');
    const candidateId = button.data('candidate-id');
    const availability = parseInt(button.data('availability'));
    const nextAvailability = (availability + 1) % 3;

    $.post(`/schedules/${scheduleId}/users/${userId}/candidates/${candidateId}`,
      { availability: nextAvailability },
      (data) => {
        button.data('availability', data.availability);
        
        const availabilityLabes = ['欠', '？', '出'];

        button.text(availabilityLabes[data.availability]);
      });
  });
});
