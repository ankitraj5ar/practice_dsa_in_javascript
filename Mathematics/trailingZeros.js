process.stdin.setEncoding("utf-8");
let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  console.log("\n");
  input = parseInt(input);
  // let fact = 1;
  // for (let i = 2; i <= input; i++) {
  //   fact *= i;
  // }
  let res = 0;
  // console.log(fact);
  // while (fact % 10 === 0) {
  //   res++;
  //   fact = Math.floor(fact / 10);
  // }

  // a better approach in factorial 5 give you a zero

  for (let i = 5; i <= input; i *= 5) {
    res = res + Math.floor(input / i);
  }
  console.log(res);
});
