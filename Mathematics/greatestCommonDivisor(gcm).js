process.stdin.setEncoding("utf-8");
let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  console.log("\n");
  let [a, b] = input.trim().split(" ").map(Number);
  //   naive approach
  //   let res = Math.min(a, b);
  //   while (res > 0) {
  //     if (a % res === 0 && b % res === 0) {
  //       break;
  //     }
  //     res--;
  //   }

  //   euclidean algorithm
  //   while (a != b) {
  //     if (a > b) {
  //       a = a - b;
  //     } else {
  //       b = b - a;
  //     }
  //   }

  //   optimized of euclidean algorithm
  console.log(gcd(a, b));
});
function gcd(a, b) {
  if (b == 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}
