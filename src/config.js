export const config = {
  "topic": "string",
    "type": 1,
    "start_time": "string [date-time]",
    "duration": 120,
    "schedule_for": "ijisrael42@gmail.com",
    "timezone": "string",
    "password": "string",
    "agenda": "string",
    "recurrence": {
      "type": 1,
      "repeat_interval": 1,
      "weekly_days": "string",
      "monthly_day": 1,
      "monthly_week": 1,
      "monthly_week_day": 1,
      "end_times": 1,
      "end_date_time": "string [date-time]"
    },
    "settings": {
      "host_video": true,
      "participant_video": true,
      "cn_meeting": true,
      "in_meeting": true,
      "join_before_host": true,
      "mute_upon_entry": true,
      "watermark": true,
      "use_pmi": true,
      "approval_type": 1,
      "registration_type": 1,
      "audio": "string",
      "auto_recording": "string"
    }
};
