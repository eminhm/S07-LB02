function caesarChiffre() {

  var charsLow, charsUp,
    teilung = function(a, b) { return (+a % (b = +b) + b) % b; };

  // Alphabet
  charsUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  charsLow = 'abcdefghijklmnopqrstuvwxyz';

  // Verschlüsselung
  String.prototype.verschiebung = function(shift) {
    var c, i, result;
    result = '';
    i = 0;
    while (i < this.length) {
      c = this.charCodeAt(i);
      if (c >= 65 && c <= 90) {
        result += charsUp[teilung(c - 65 + shift, 26)];
      } else if (c >= 97 && c <= 122) {
        result += charsLow[teilung(c - 97 + shift, 26)];
      } else {
        result += this.charAt(i);
      }
      i++;
    }
    return result;
  };

  // Button: Verschlüsseln
  $('.btn-encrypt').click(function() {
    var cipher, shift, text;
    shift = teilung($('.shift-l').val(), 26);
    text = $('#plaintext').val();
    cipher = text.verschiebung(shift);
    // shift the plaintext
    $('#ciphertext').val(cipher);
  });

  // Button: Entschlüsseln
  $('.btn-decrypt').click(function() {
    var plaintext, shift, text;
    shift = teilung($('.shift-r').val(), 26);
    text = $('#ciphertext').val();
    plaintext = text.verschiebung(-shift);
    // shift the plaintext
    $('#plaintext').val(plaintext);
  });

}

// Run
caesarChiffre();