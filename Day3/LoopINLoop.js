// Practice Questions to dry run and understand the flow of Double loop or nested loop

// Que - 1
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log("i = " + i, " j " + j);
  }
}
// Que - 2
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < i; j++) {
    console.log("i :" + i, " j :" + j);
  }
}
// Que - 3
for (let i = 0; i < 3; i++) {
  for (let j = i; j > 0; j--) {
    console.log("i :" + i, " j :" + j);
  }
}
// Que - 4
for (let i = 5; i > 0; i--) {
  for (let j = 0; j < 0; j++) {
    console.log("i :" + i, " j :" + j);
  }
}
