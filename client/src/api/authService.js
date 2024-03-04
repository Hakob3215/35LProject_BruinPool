const API_BASE_URL = '/api'; // Adjust this to your actual API base URL

export const authService = {
  signIn: async (username, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) throw new Error('Failed to sign in');
      const data = await response.json();
      // Store the token in localStorage or handle it as needed
      localStorage.setItem('token', data.token);
      return data;
    } catch (error) {
      console.error('SignIn error:', error);
      throw error;
    }
  },

  signOut: () => {
    // Clear the token from localStorage or handle sign out as needed
    localStorage.removeItem('token');
  },

  // Additional methods like signUp, checkAuthStatus, etc., can be added here
};
