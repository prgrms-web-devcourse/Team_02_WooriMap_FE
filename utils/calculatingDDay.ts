export function calculatingDDay(date: string) {
  const startingDate = new Date(date);
  const currentDate = new Date();

  return Math.floor(
    Math.abs(
      (currentDate.getTime() - startingDate.getTime()) / (1000 * 60 * 60 * 24),
    ),
  );
}
