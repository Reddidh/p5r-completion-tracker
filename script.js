// Laadib Compendium andmed ja täidab tabeli
async function loadCompendium() {
  try {
    const response = await fetch('P5R compendium.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    populateCompendiumTable(data);
  } catch (error) {
    console.error('Viga Compendium andmete laadimisel:', error);
    document.getElementById('compendium-tbody').innerHTML = 
      '<tr><td colspan="4">Viga andmete laadimisel</td></tr>';
  }
}

// Laadib Mementos Requests andmed ja täidab tabeli
async function loadMementosRequests() {
  try {
    const response = await fetch('Mementos requests.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    populateMementosTable(data);
  } catch (error) {
    console.error('Viga Mementos Requests andmete laadimisel:', error);
    document.getElementById('mementos-tbody').innerHTML = 
      '<tr><td colspan="4">Viga andmete laadimisel</td></tr>';
  }
}

// Täidab Compendium tabeli andmetega
function populateCompendiumTable(data) {
  const tbody = document.getElementById('compendium-tbody');
  tbody.innerHTML = ''; // Tühjendame tabeli

  data.forEach(item => {
    const row = document.createElement('tr');
    
    // Checkbox
    const checkboxCell = document.createElement('td');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'compendium-select';
    checkbox.value = item.Persona;
    checkboxCell.appendChild(checkbox);
    row.appendChild(checkboxCell);
    
    // LVL
    const lvlCell = document.createElement('td');
    lvlCell.textContent = item.LVL || '';
    row.appendChild(lvlCell);
    
    // Persona
    const personaCell = document.createElement('td');
    personaCell.textContent = item.Persona || '';
    row.appendChild(personaCell);
    
    // Arcana
    const arcanaCell = document.createElement('td');
    arcanaCell.textContent = item.Arcana || '';
    row.appendChild(arcanaCell);
    
    tbody.appendChild(row);
  });
}

// Täidab Mementos Requests tabeli andmetega
function populateMementosTable(data) {
  const tbody = document.getElementById('mementos-tbody');
  tbody.innerHTML = ''; // Tühjendame tabeli

  data.forEach(item => {
    const row = document.createElement('tr');
    
    // Checkbox
    const checkboxCell = document.createElement('td');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'mementos-select';
    checkbox.value = item.Request;
    checkboxCell.appendChild(checkbox);
    row.appendChild(checkboxCell);
    
    // Path
    const pathCell = document.createElement('td');
    pathCell.textContent = item.Path || '';
    row.appendChild(pathCell);
    
    // Request
    const requestCell = document.createElement('td');
    requestCell.textContent = item.Request || '';
    row.appendChild(requestCell);
    
    // Unlock conditions
    const unlockCell = document.createElement('td');
    unlockCell.textContent = item.Unlock || '';
    row.appendChild(unlockCell);
    
    tbody.appendChild(row);
  });
}

// Laadib andmed lehe laadimisel
document.addEventListener('DOMContentLoaded', function() {
  loadCompendium();
  loadMementosRequests();
});
