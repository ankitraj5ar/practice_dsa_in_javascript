process.stdin.setEncoding("utf-8");
let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  console.log("\n");
  input = parseInt(input);
  // naive method to solve this
  console.log(isPrime(input));
  // efficient method
  console.log(isPrime(input));
  //more efficient method
  console.log(isPrime(input));
});

function isPrime(n) {
  if (n == 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// using the square root of n
function isPrime(n) {
  if (n == 1) {
    return false;
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// using the square root of n
// making more efficient by adding condition
function isPrime(n) {
  if (n == 1) {
    return false;
  }
  if (n == 2 || n == 3) {
    return true;
  }
  if (n % 2 == 0 || n % 3 == 0) {
    return false;
  }
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) == 0) {
      return false;
    }
  }
  return true;
}
