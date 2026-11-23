const prompt = require("prompt-sync")({ sigint: true });

// Create arrays: { name: "...", value: number }
let loot = [];
let finished = false;

// Collect loot until the user types "done" + at least one item exists
while (finished != true) {
  let name = prompt("Enter loot name (or type 'done' to finish): ").trim();

  if (name.toLowerCase() === "done") {
    if (loot.length === 0) {
      console.log("You must enter at least one loot item before finishing.");
    } else {
      finished = true;
    }
  } else if (name === "") {
    console.log("Loot name cannot be empty.");
  } else {
    // Ask for value until it is a valid positive number
    let value = 0;
    let validValue = false;
    while (validValue != true) {
      let input = prompt("Enter value for " + name + ": ");
      value = Number(input);
      if (input === "" || value <= 0) {
        console.log("Value must be a valid positive number.");
      } else {
        validValue = true;
      }
    }

    // Create the object and push it into the array
    loot.push({ name: name, value: value });
  }
}

// Display loot list
console.log("\nLoot Collected:\n");
for (let i = 0; i < loot.length; i++) {
  console.log("[" + (i + 1) + "] " + loot[i].name + " - " + loot[i].value);
}

// Calculate total value
let total = 0;
for (let i = 0; i < loot.length; i++) {
  total += loot[i].value;
}

console.log("\nTotal Loot Value: " + total + "\n");

prompt("Press any key to continue...");


