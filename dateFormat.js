// convert a date into a day-month-year format

const formatter = new Intl.DateTimeFormat('en-GB', {
  year: 'numeric',
  month: 'long',
  day: '2-digit'
});

formatter.format(Date.parse(example.createdAt));