export function formatDate(date = new Date()) {
  const today = date;

  const year = today.getFullYear();
  const month = `0${today.getMonth() + 1}`.slice(-2);
  const day = `0${today.getDate()}`.slice(-2);

  const dateString = `${year}-${month}-${day}`;

  return dateString;
}
