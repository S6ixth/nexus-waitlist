// Fallback waitlist service using Formspree
export const waitlistService = {
  async addToWaitlist(email: string, userType: string) {
    try {
      // Use Formspree as a fallback service
      const response = await fetch('https://formspree.io/f/xdkogkqw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          user_type: userType,
          timestamp: new Date().toISOString(),
          source: 'nexus-waitlist'
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return { success: true };
    } catch (error) {
      console.error('Formspree error:', error);
      throw new Error('Failed to join waitlist. Please try again.');
    }
  }
};