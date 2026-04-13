process.stdin.setEncoding("utf8");

let input = "";

process.stdin.on("data", (chunk) => {
  input += chunk;
});

process.stdin.on("end", () => {
  input = parseInt(input.trim());
  console.log("\n");
  let rev = 0;
  let x = input;
  while (x != 0) {
    let ld = x % 10;
    rev = rev * 10 + ld;
    x = Math.floor(x / 10);
  }
  if (input === rev) {
    console.log("yes");
  } else {
    console.log("no");
  }
});
