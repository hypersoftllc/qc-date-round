/**
 * @param {Date|number} dateIn - The date to be rounded. This date is not mutated.
 * @param {number} interval - The time interval to round to. Must be between 1 and
 *   86400000, inclusive.
 *
 * @returns {Date} A new date rounded to the nearest interval.
 */
exports.round = function round (timeIn, interval) {
  if (interval < 1) {
    throw TypeError('`interval` must be greater than or equal to 1.')
  }
  if (interval > 86400000) {
    throw TypeError('`interval` must be less than or equal to 86400000.')
  }
  let dateIn = timeIn
  if (typeof timeIn === 'number' && !Number.isNaN(timeIn)) {
    dateIn = new Date(timeIn)
  }
  const dateOut = new Date(timeIn)

  /*
  IMPLEMENTATION NOTE:
  This implementation relies upon the fact that the setters of a date object
  rollover its value to the next larger time unit.
  */
  let hhBorrowed = false
  let mmBorrowed = false
  let ssBorrowed = false
  let ms = dateIn.getMilliseconds()
  if (ms < interval) {
    ssBorrowed = true
    ms += (dateIn.getSeconds() * 1000)
  }
  if (ms < interval) {
    mmBorrowed = true
    ms += (dateIn.getMinutes() * 1000 * 60)
  }
  if (ms < interval) {
    hhBorrowed = true
    ms += (dateIn.getHours() * 1000 * 60 * 60)
  }

  if (ssBorrowed) {
    dateOut.setSeconds(0)
  }
  if (mmBorrowed) {
    dateOut.setMinutes(0)
  }
  if (hhBorrowed) {
    dateOut.setHours(0)
  }
  dateOut.setMilliseconds(Math.round(ms / interval) * interval)
  return dateOut
}
