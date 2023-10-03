export default function cleanSet(set, startString) {
  const match = [];

  if (typeof set !== 'object' || typeof startString !== 'string'
      || startString.length === 0
  ) {
    return '';
  }

  for (const item of set) {
    if (item && item.startsWith(startString)) {
      match.push(item.slice(startString.length));
    }
  }

  return match.join('-');
}
