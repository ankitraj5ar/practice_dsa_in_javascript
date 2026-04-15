process.stdin.setEncoding("utf-8");
let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  console.log("\n");
  let [a, b] = input.trim().split(" ").map(Number);

  // naive approach
  //   let res = Math.max(a, b);
  //   while (true) {
  //     if (a % res === 0 && b % res === 0) {
  //       break;
  //     }
  //     res++;
  //   }
  // using formula
  //   a*b = gcd(a,b)*lcm(a,b);
  // so  for lcm(a,b) = a*b/gcd(a,b);

  console.log((a * b) / gcd(a, b));
});
function gcd(a, b) {
  if (b == 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}
