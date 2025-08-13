// Utility functions

/**
 * Generate BEM class names
 * @param {string} block - The block name
 * @param {string} element - The element name (optional)
 * @param {string} modifier - The modifier name (optional)
 * @returns {string} - BEM class name
 */
export const bem = (block, element = '', modifier = '') => {
  let className = block;
  
  if (element) {
    className += `__${element}`;
  }
  
  if (modifier) {
    className += `--${modifier}`;
  }
  
  return className;
};

/**
 * Combine multiple class names
 * @param {...string} classes - Class names to combine
 * @returns {string} - Combined class names
 */
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Format phone number for display
 * @param {string} phone - Phone number
 * @returns {string} - Formatted phone number
 */
export const formatPhone = (phone) => {
  return phone.replace(/(\+\d{2})\s(\d{3})\s(\d{3})\s(\d{4})/, '$1 $2 $3 $4');
};

/**
 * Validate email format
 * @param {string} email - Email address
 * @returns {boolean} - Whether email is valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};