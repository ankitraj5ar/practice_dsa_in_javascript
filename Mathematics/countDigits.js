process.stdin.setEncoding("utf8");

let input = "";

process.stdin.on("data", (chunk) => {
  input += chunk;
});

process.stdin.on("end", () => {
  console.log("\n");
  input = parseInt(input.trim());
  let count = 0;
  while (input > 0) {
    input = Math.floor(input / 10);
    count++;
  }
  console.log("count", count);
});
