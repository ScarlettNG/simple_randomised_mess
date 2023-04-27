// Define arrays of message components
const starters = ['Life is', 'The universe is', 'The world is'];
const middles = ['full of possibilities', 'waiting for you', 'yours to explore'];
const endings = ['go out and make it yours', 'and the future is bright', 'just waiting for you to take the first step'];
const punctuations = ['!', '.', '...', '?'];

// Generate a random index for each array
const starterIndex = Math.floor(Math.random() * starters.length);
const middleIndex = Math.floor(Math.random() * middles.length);
const endingIndex = Math.floor(Math.random() * endings.length);
const punctuationIndex = Math.floor(Math.random() * punctuations.length);

// Combine the random message components into a single string
const message = `${starters[starterIndex]} ${middles[middleIndex]} ${endings[endingIndex]}${punctuations[punctuationIndex]}`;

// Print the message to the console
console.log(message);
