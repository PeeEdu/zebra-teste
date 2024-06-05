const keyForVowelMap = {
    '🐉1': 'A', '🐉2': 'E', '🐉3': 'I', '🐉4': 'O', '🐉5': 'U',
    '🐉6': 'a', '🐉7': 'e', '🐉8': 'i', '🐉9': 'o', '🐉0': 'u'
  };

const decodeCrypto = (string) => {
    return string.replace(/🐉[0-9]/g, match => keyForVowelMap[match]);
};

export {decodeCrypto}