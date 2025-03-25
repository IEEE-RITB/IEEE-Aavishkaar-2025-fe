const API_BASE_URL = "https://aavishkaar2025-be.onrender.com" || "http://localhost:8000";

export const API_ENDPOINTS = {
  EVENTS: `${API_BASE_URL}/aavishkaar/events`,
  FEATURED_EVENTS: `${API_BASE_URL}/aavishkaar/getFeaturedEvents`,
  EVENT_DETAIL: (slug) => `${API_BASE_URL}/aavishkaar/event/${slug}`,
  TEAMS: `${API_BASE_URL}/aavishkaar/teams`,
  REGISTER_TEAM: `${API_BASE_URL}/aavishkaar/teams/register`,
};
