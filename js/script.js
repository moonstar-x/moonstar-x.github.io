// Calculate age from a date.
function calculateAge(birthdate) {
  var diff = Date.now() - birthdate.getTime();
  var ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}