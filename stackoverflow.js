function recursiveFunction() {
  return recursiveFunction(); // Infinite recursive call
}

try {
  recursiveFunction();
} catch (error) {
  console.error("Stack Overflow detected:", error.message);
}