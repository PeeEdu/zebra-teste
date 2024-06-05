
const vowelMap = {
  'A': '🐉1', 'E': '🐉2', 'I': '🐉3', 'O': '🐉4', 'U': '🐉5',
  'a': '🐉6', 'e': '🐉7', 'i': '🐉8', 'o': '🐉9', 'u': '🐉0'
};
  
const encodeCrypto = (string) => {
  return string.replace(/[AEIOUaeiou]/g, match => vowelMap[match]);
};

export { encodeCrypto };
  