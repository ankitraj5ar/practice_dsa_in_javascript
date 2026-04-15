process.stdin.setEncoding("utf8");

let input = "";

process.stdin.on("data", (chunk) => {
  input += chunk;
});

process.stdin.on("end", () => {
  console.log("\n");
  input = parseInt(input.trim());
  printDivisor(input);
});

function printDivisor(n) {
  let i;
  for (i = 1; i * i < n; i++) {
    if (n % i == 0) {
      console.log(i);
    }
  }
  for (; i > 1; i--) {
    if (n % i == 0) {
      console.log(Math.floor(n / i));
    }
  }
}
