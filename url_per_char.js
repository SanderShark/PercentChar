function encodeStringToHex(str) {
  return str.split('') // Split into individual characters
            .map(char => '%' + char.charCodeAt(0).toString(16).toUpperCase().padStart(2, '0')) // Encode and format
            .join(''); // Join back into a string
}
