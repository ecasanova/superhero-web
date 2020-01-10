export function formatDate(date) {
  const monthNames = [
    'January', 'February', 'March',
    'April', 'May', 'June', 'July',
    'August', 'September', 'October',
    'November', 'December'
  ];
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${monthNames[monthIndex]} ${day},` + ` ${year}`;
}

export function formatDateForPatch(date) {
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  return `${monthIndex}/${day}/${year}`;
}

export function parseDate(input) {
  const parts = input.split('-');
  // new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]])
  return new Date(parts[0] - 2, parts[1] + 1, parts[2]); // Note: months are 0-based
}

export function inchesToFeet(inchesIn) {
  const feet = Math.floor(inchesIn / 12);
  const inches = inchesIn % 12;

  return {
    feet,
    inches
  };
}

export function formatPhoneNumber(phoneNumberString) {
  const cleaned = (`${phoneNumberString}`).replace(/\D/g, '');
  const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    const intlCode = (match[1] ? '+1 ' : '');
    return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
  }
  return null;
}
