import { siteMetadata } from '../../data/siteMetadata'

export const formatDate = (date) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    // Post dates are calendar dates, not instants. They are stored as UTC
    // midnight, so formatting in local time would show the previous day for
    // any reader behind UTC.
    timeZone: 'UTC'
  }
  return new Date(date).toLocaleDateString(siteMetadata.locale, options)
}

export const getCurrentDayName = () => {
  const date = new Date()
  // Deliberately local: this greets the reader with their own day.
  return date.toLocaleDateString(siteMetadata.locale, { weekday: 'long' })
}
