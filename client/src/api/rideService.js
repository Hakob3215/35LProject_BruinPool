const API_BASE_URL = '/api'; // Adjust this to your actual API base URL

export const rideService = {
  fetchRides: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/rides`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include the token for authenticated endpoints
        },
      });
      if (!response.ok) throw new Error('Failed to fetch rides');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch rides error:', error);
      throw error;
    }
  },

  postRideOffer: async (rideDetails) => {
    try {
      const response = await fetch(`${API_BASE_URL}/rides/offer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(rideDetails),
      });
      if (!response.ok) throw new Error('Failed to post ride offer');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Post ride offer error:', error);
      throw error;
    }
  },

  // Additional methods like requestRide, cancelRide, etc., can be added here
};
