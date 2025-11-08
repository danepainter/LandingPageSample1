// Form validation utilities

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Validates email format
 */
export const validateEmail = (email: string): ValidationResult => {
  if (!email.trim()) {
    return { isValid: false, error: 'Email is required' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }

  return { isValid: true };
};

/**
 * Validates name (at least 2 characters, letters and spaces only)
 */
export const validateName = (name: string): ValidationResult => {
  if (!name.trim()) {
    return { isValid: false, error: 'Name is required' };
  }

  if (name.trim().length < 2) {
    return { isValid: false, error: 'Name must be at least 2 characters' };
  }

  const nameRegex = /^[a-zA-Z\s'-]+$/;
  if (!nameRegex.test(name)) {
    return { isValid: false, error: 'Name can only contain letters, spaces, hyphens, and apostrophes' };
  }

  return { isValid: true };
};

/**
 * Validates message (minimum 10 characters)
 */
export const validateMessage = (message: string): ValidationResult => {
  if (!message.trim()) {
    return { isValid: false, error: 'Message is required' };
  }

  if (message.trim().length < 10) {
    return { isValid: false, error: 'Message must be at least 10 characters' };
  }

  if (message.trim().length > 1000) {
    return { isValid: false, error: 'Message must not exceed 1000 characters' };
  }

  return { isValid: true };
};

/**
 * Validates consent checkbox
 */
export const validateConsent = (consent: boolean): ValidationResult => {
  if (!consent) {
    return { isValid: false, error: 'You must agree to continue' };
  }

  return { isValid: true };
};

