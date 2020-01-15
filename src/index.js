import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilka!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
var crypto = require("crypto"),
  key = "your secret key 1here",
  plaintext = "Text to be encrypted",
  cipher = crypto.createCipher("aes-256-cbc", key),
  decipher = crypto.createDecipher("aes-256-cbc", key);

var encryptedPassword = cipher.update(plaintext, "utf8", "base64");
encryptedPassword += cipher.final("base64");

var decryptedPassword = decipher.update(encryptedPassword, "base64", "utf8");
decryptedPassword += decipher.final("utf8");

console.log("original  :", plaintext);
console.log("encrypted :", encryptedPassword);
console.log("decrypted :", decryptedPassword);
