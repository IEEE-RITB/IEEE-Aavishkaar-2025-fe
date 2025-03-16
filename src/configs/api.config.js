const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export const API_ENDPOINTS = {
  EVENTS: `${API_BASE_URL}/aavishkaar/events`,
  EVENT_DETAIL: (id) => `${API_BASE_URL}/aavishkaar/event/${id}`,
  TEAMS: `${API_BASE_URL}/aavishkaar/teams`,
  REGISTER_TEAM: `${API_BASE_URL}/aavishkaar/teams/register`,
};
