const sentence = "hello there from lighthouse labs";
let y = 0;
for (const char of sentence) {
  y = y + 50;
  setTimeout(() => { process.stdout.write (char); }, y);
}
setTimeout(() => { console.log('\n'); }, sentence.split('').length * 50);