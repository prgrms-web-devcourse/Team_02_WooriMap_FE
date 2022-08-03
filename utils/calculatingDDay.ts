export function calculatingDDay(date: string) {
  const startingDate = new Date(date);
  const currentDate = new Date();

  const calculatedDay = Math.floor(
    (currentDate.getTime() - startingDate.getTime()) / (1000 * 60 * 60 * 24),
  );
  return calculatedDay;
}
