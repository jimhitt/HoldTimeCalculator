// Data table with medication names and their hold times
const holdTimes = [
    { name: "Apixaban (Eliquis) 2.5 mg BID - 5 mg BID", hours: 72 },
    { name: "Betrixaban (Bevyxxa) 80 mg daily", hours: 72 },
    { name: "Clopidogrel (Plavix)", hours: 168 },
    { name: "Dabigatran (Pradaxa) 75-150 mg BID: normal renal function", hours: 72 },
    { name: "Dabigatran (Pradaxa) 75-150 mg BID: reduced renal function", hours: 120 },
    { name: "Dalteparin (Fragmin)", hours: "CONTRAINDICATED" },
    { name: "Edoxaban (Savaysa) 30-60 mg daily", hours: 72 },
    { name: "Enoxaparin (Lovenox) 1.5 mg/kg SQ daily or 1 mg/kg SQ q12h", hours: 24 },
    { name: "Enoxaparin (Lovenox) 30 mg SQ q12h", hours: 12 },
    { name: "Enoxaparin (Lovenox) 40 mg SQ daily", hours: 12 },
    { name: "Fondaparinux (Arixtra)", hours: 36 },
    { name: "Heparin 5000 units SQ q8h or q12h", hours: 4 },
    { name: "Heparin 7500 units SQ q8h or q12h", hours: 12 },
    { name: "Heparin IV infusion", hours: 4 },
    { name: "Prasugrel (Effient)", hours: 120 },
    { name: "Rivaroxaban (Xarelto) 15-20 mg daily", hours: 72 },
    { name: "Ticagrelor (Brilinta)", hours: 72 },
    { name: "Warfarin (Coumadin)", hours: 120 }
];

// Get the container for the anticoagulant options
const anticoagulantOptionsContainer = document.getElementById('anticoagulantOptions');

// Iterate over the holdTimes array and create radio buttons for each medication
holdTimes.forEach(drug => {
    const label = document.createElement('label'); // Create a label element
    const input = document.createElement('input'); // Create an input element for the radio button
    input.type = 'checkbox';
    input.name = 'anticoagulant';
    input.value = drug.name;
    label.appendChild(input); // Append the radio button to the label

    // Create text for the label including the hold time
    const text = document.createTextNode(` ${drug.name} (${drug.hours === 'CONTRAINDICATED' ? 'CONTRAINDICATED' : `${drug.hours} hours / ${Math.floor(drug.hours / 24)} days`})`);
    label.appendChild(text); // Append the text to the label

    anticoagulantOptionsContainer.appendChild(label); // Append the label to the container
});

function calculateHoldTime() {
    // Get all selected anticoagulants
    const selectedAnticoagulants = document.querySelectorAll('input[name="anticoagulant"]:checked');
    const procedureDateTime = document.getElementById('procedureDateTime').value;

    // Validate the input
    if (!procedureDateTime) {
        document.getElementById('result').innerText = "Please enter a valid procedure date and time.";
        return;
    }

    // Initialize result text
    let resultText = '';

    // Loop through selected anticoagulants and calculate hold times
    selectedAnticoagulants.forEach(checkbox => {
        const anticoagulant = checkbox.value;
        const holdTime = holdTimes.find(drug => drug.name === anticoagulant).hours;

        if (holdTime === "CONTRAINDICATED") {
            resultText += `${anticoagulant} is contraindicated for the procedure.\n`;
        } else {
            const procedureDate = new Date(procedureDateTime);
            const holdDurationMs = holdTime * 60 * 60 * 1000;
            const holdStartDateTime = new Date(procedureDate.getTime() - holdDurationMs);
            resultText += `Hold ${anticoagulant} from: ${holdStartDateTime.toLocaleString()}\n`;
        }
    });

    // Display the result
    document.getElementById('result').innerText = resultText.trim();
}
