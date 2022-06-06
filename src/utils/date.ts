const UNIX_EPOCH_YEAR = 1970;

export const getAge = (birthday: Date): number => {
  const diff = Date.now() - birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - UNIX_EPOCH_YEAR);
};
