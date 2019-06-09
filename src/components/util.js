module.exports = {
  getEventDateString: (startDate, startTime, endDate, endTime) => {
    return startDate !== endDate
      ? `${startDate
          .split(',')[0]
          .replace(/\s0+/g, ' ')} at ${startTime.replace(
          ':00',
          ''
        )} to ${endDate
          .split(',')[0]
          .replace(/\s0+/g, ' ')} at ${endTime.replace(':00', '')}`
      : `${startDate
          .split(',')[0]
          .replace(/\s0+/g, ' ')} from ${startTime.replace(
          ':00',
          ''
        )} to ${endTime.replace(':00', '')}`
  },
  meetupDataToEventData: meetupData => {
    return {
      eventName: meetupData.name,
      description:
        new DOMParser().parseFromString(meetupData.description, 'text/html')
          .body.textContent || '',
      linkURL: meetupData.link,
      cost:
        meetupData.fee && meetupData.fee.amount
          ? meetupData.fee.amount.toString()
          : 'FREE',
      startDate: new Date(meetupData.local_date).toISOString(),
      startTime: timeToAmPm(meetupData.local_time),
      endDate: new Date(
        new Date(meetupData.time + meetupData.duration + meetupData.utc_offset)
          .toISOString()
          .split('T')[0]
      ).toISOString(),
      endTime: getAmPmFromTimestamp(
        meetupData.time + meetupData.duration + meetupData.utc_offset
      ),
      locationName: meetupData.venue.name,
      locationStreet: meetupData.venue.address_1 || '',
      locationCity: meetupData.venue.city,
      authorName: 'Meetup Group: '+meetupData.group.name,
    }
  },
  eventbriteDataToEventData: eventbriteData => {
    return {
      eventName: eventbriteData.name.text,
      description: eventbriteData.description.text,
      linkURL: eventbriteData.url,
      cost: {thing: ((tickets) => { 
        let cost = ''
        tickets.forEach(ticket => {
          if (ticket.free) {
            if (cost.includes('FREE')) {
              if (cost === '') {
                cost = 'FREE'
              } else {
                cost = 'FREE, ' + cost
              }
            }
          } else {}
        })
        return cost
      } )(eventbriteData.ticket_classes)},
      startDate: new Date(eventbriteData.start.local).toISOString(),
      startTime: timeToAmPm(eventbriteData.start.local),
      endDate: new Date(eventbriteData.end.local).toISOString(),
      endTime: timeToAmPm(eventbriteData.end.local),
      locationName: eventbriteData.venue.name,
      locationStreet: eventbriteData.venue.address_1 || '',
      locationCity: eventbriteData.venue.city,
      authorName: 'Eventbrite Org Id: ' + eventbriteData.organization_id
    }
  },
}

const timeToAmPm = time => {
  const hour = parseInt(time.split(':')[0])
  return (hour % 12) + ':' + time.split(':')[1] + (hour > 12 ? 'pm' : 'am')
}

const getAmPmFromTimestamp = timestamp => {
  const time = new Date(timestamp).toISOString().split('T')[1]
  return timeToAmPm(time.split(':')[0] + ':' + time.split(':')[1])
}
