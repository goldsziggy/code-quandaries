function likes (people) {
  if (people.length === 0) {
    return 'no one likes this'
  }
  if (people.length === 1) {
    return `${people[0]} likes this`
  }
  if (people.length === 2) {
    return `${people[0]} and ${people[1]} like this`
  }
  if (people.length === 3) {
    return `${people[0]}, ${people[1]} and ${people[2]} like this`
  }
  if (people.length >= 4) {
    return `${people[0]}, ${people[1]} and ${
      people.length - 2
    } others like this`
  }
}
