export function pushEvent(event) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ ...event });
}

export const events = {
  onClickJoinEvent: (source, event_name) => ({
    event: 'onclick_join',
    source,
    event_name
  }),
  onClickSocial: (social_tool) => ({
    event: 'onclick_social',
    social_tool
  }),
  onClickSaveToSaveCalendar: (source) => ({
    event: 'onclick_save_calendar',
    source
  }),
  onClickPrivacy: () => ({
    event: 'onclick_privacy'
  })
};
