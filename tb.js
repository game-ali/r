// Success message for timetable generation
let genetShow = "Timetable has been generated successfully. "; 
let cn='CN: course name , CC: coursecode, T: time, V: venue, LN: lecturer name';


// Add event listener to the 'Generate Timetable' button
document.getElementById('generateTb').addEventListener('click', function () {
    // Display the success message
    const genetMessage = document.getElementById('genetMessage');
    genetMessage.innerText = genetShow;
    document.getElementById('cnL').innerText=cn;

    
    const tableContainer = document.getElementById('table-container');

    // Clear any existing content to avoid duplication
    tableContainer.innerHTML = "";

    // Create the table element
    const table = document.createElement('table');
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";

    // Create the table header
    const thead = document.createElement('thead');
    const headerRow1 = document.createElement('tr');
    const headerRow2 = document.createElement('tr');

    // First cell of the top header row (empty for periods)
    const emptyHeader = document.createElement('th');
    emptyHeader.rowSpan = 2; // Spans across two rows
    emptyHeader.style.border = "1px solid #ccc";
    emptyHeader.style.padding = "10px";
    headerRow1.appendChild(emptyHeader);

    // Days of the week (Monday to Friday)
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    days.forEach(day => {
        const dayHeader = document.createElement('th');
        dayHeader.textContent = day;
        dayHeader.colSpan = 5; // Spans across five columns
        dayHeader.style.border = "1px solid #ccc";
        dayHeader.style.padding = "10px";
        dayHeader.style.backgroundColor = "#f0f0f0";
        headerRow1.appendChild(dayHeader);
    });

    thead.appendChild(headerRow1);

    // Sub-header row (CN, CC, LN, T, V)
    days.forEach(() => {
        const subHeaders = ["CN", "CC", "LN", "T", "V"];
        subHeaders.forEach(subHeader => {
            const subHeaderCell = document.createElement('th');
            subHeaderCell.textContent = subHeader;
            subHeaderCell.style.border = "1px solid #ccc";
            subHeaderCell.style.padding = "10px";
            subHeaderCell.style.backgroundColor = "#e0e0e0";
            headerRow2.appendChild(subHeaderCell);
        });
    });

    thead.appendChild(headerRow2);
    table.appendChild(thead);

    // Create the table body
    const tbody = document.createElement('tbody');
    const periods = ["P1", "P2", "P3", "P4"];

    // Generate rows dynamically for each period
    periods.forEach(period => {
        const row = document.createElement('tr');

        // Add the period name (P1, P2, etc.) in the first column
        const periodCell = document.createElement('td');
        periodCell.textContent = period;
        periodCell.style.border = "1px solid #ccc";
        periodCell.style.padding = "10px";
        periodCell.style.backgroundColor = "#e0e0e0";
        row.appendChild(periodCell);

        // Create empty cells for each day (five columns per day)
        days.forEach(() => {
            for (let i = 0; i < 5; i++) {
                const cell = document.createElement('td');
                cell.style.border = "1px solid #ccc";
                cell.style.padding = "10px";
                cell.style.backgroundColor = "#f9f9f9";
                row.appendChild(cell);
            }
        });

        tbody.appendChild(row);
    });

    table.appendChild(tbody);

    // Append the dynamically created table to the container
    tableContainer.appendChild(table);
});
