function friend(friends) {
  // Return only names with exactly 4 letters
  if (!Array.isArray(friends)) return [];
  return friends.filter(name => typeof name === 'string' && name.length === 4);
}

// Keep this call for the hidden solution runner
try {
  const raw = typeof readline === 'function' ? readline() : undefined;
  const input = raw ? JSON.parse(raw) : [];
  console.log(friend(input));
} catch (e) {
  // ignore parse errors
}

module.exports = { friend };
