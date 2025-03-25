const API_BASE_URL =  "http://localhost:8006";

export const API_ENDPOINTS = {
  EVENTS: `${API_BASE_URL}/aavishkaar/events?limit=50?offset=0`,
  EVENT_DETAIL: (id) => `${API_BASE_URL}/aavishkaar/event/${id}`,
  TEAMS: `${API_BASE_URL}/aavishkaar/teams`,
  REGISTER_TEAM: `${API_BASE_URL}/aavishkaar/teams/register`,
};
