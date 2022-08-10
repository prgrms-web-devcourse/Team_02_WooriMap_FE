export const countDateFromNow = ({ date }: { date: string }) => {
  const startDate = new Date(date);
  const currentDate = new Date();

  const differenceInTime = currentDate.getTime() - startDate.getTime();
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

  return differenceInDays;
};
