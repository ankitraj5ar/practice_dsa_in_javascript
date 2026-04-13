process.stdin.setEncoding("utf8");

let input = "";

process.stdin.on("data", (chunk) => {
  input += chunk;
});

process.stdin.on("end", () => {
  input = parseInt(input.trim());
  console.log("\n");
  // iterative approach
  //   let result = 1;
  //   for (let i = 1; i <= input; i++) {
  //     result *= i;
  //   }

  //   recursive approach
  function factorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }

  console.log(factorial(input));
});
