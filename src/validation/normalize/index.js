export const captialize = (value) =>
  value && value.charAt(0).toUpperCase() + value.slice(1);

export const upper = (value) => value && value.toUpperCase();
export const mobile = (value) => value.replace(/[^\d]/g, '').slice(0, 10);
