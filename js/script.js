// Top-level array so loot persists between button clicks
let loot = [];

// Add up every value in the array
function getTotal() {
  let total = 0;
  for (let i = 0; i < loot.length; i++) {
    total += loot[i].value;
  }
  return total;
}

// Rebuild the list and the total from the array
function renderLoot() {
  let listHtml = "";
  for (let i = 0; i < loot.length; i++) {
    listHtml += `<li>${loot[i].name} - ${loot[i].value.toFixed(2)}</li>`;
  }
  document.getElementById("lootList").innerHTML = listHtml;
  let total = getTotal();
  document.getElementById("listTotal").textContent = total.toFixed(2);
}

function addLoot() {
  let name = document.getElementById("lootName").value.trim();
  let valueText = document.getElementById("lootValue").value;
  let value = Number(valueText);
  let message = document.getElementById("message");

  if (name === "") {
    message.textContent = "Loot name cannot be empty.";
    return;
  }
  if (valueText === "" || isNaN(value)) {
    message.textContent = "Loot value must be a valid number.";
    return;
  }
  if (value < 0) {
    message.textContent = "Loot value cannot be negative.";
    return;
  }

  message.textContent = "";
  loot.push({ name: name, value: value });
  renderLoot();
}

function splitLoot() {
  let partyText = document.getElementById("partySize").value;
  let party = Number(partyText);
  let message = document.getElementById("message");

  if (partyText === "" || isNaN(party) || party % 1 !== 0 || party < 1) {
    message.textContent = "Number of party members must be a whole number of 1 or more.";
    return;
  }
  if (loot.length === 0) {
    message.textContent = "Add some loot before splitting.";
    return;
  }

  message.textContent = "";
  let total = getTotal();
  document.getElementById("splitTotal").textContent = total.toFixed(2);
  document.getElementById("perMember").textContent = (total / party).toFixed(2);
}

document.getElementById("addLoot").addEventListener("click", addLoot);
document.getElementById("splitLoot").addEventListener("click", splitLoot);
