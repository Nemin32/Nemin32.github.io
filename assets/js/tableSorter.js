function getCol(table, colNum) {
  const rows = [...table.querySelectorAll("tbody tr")];
  const columns = rows.map(
    (row) => row.querySelectorAll("td")[colNum]?.innerText,
  );
  return columns;
}

function sortIndexes(array) {
  let indexes = array.map((val, i) => i);
  indexes.sort((a, b) => {
    const val1 = array[a];
    const val2 = array[b];

    const num1 = parseFloat(val1);
    const num2 = parseFloat(val2);

    if (!Number.isNaN(num1) && !Number.isNaN(num2)) {
      return num1 - num2;
    }

    if (val1 < val2) return -1;
    if (val1 > val2) return 1;
    return 0;
  });

  return indexes;
}

function sortTable(table, colNum, reversed) {
  const rows = [...table.querySelectorAll("tbody tr")];
  const indexes = sortIndexes(getCol(table, colNum));

  if (reversed) {
    indexes.reverse();
  }

  const newRowOrder = indexes.map((val) =>
    [...rows[val].querySelectorAll("td")].map((td) => [
      td.innerText,
      td.style.background,
    ]),
  );

  newRowOrder.forEach((newRow, i) => {
    const currCols = rows[i].querySelectorAll("td");
    newRow.forEach((col, o) => {
      currCols[o].innerText = col[0];
      currCols[o].style.background = col[1];
    });
  });
}

const tables = [...document.querySelectorAll("table")];
tables.forEach((table) => {
  // Necessary for Lowest/Highest table
  const headers = [...table.querySelectorAll("thead tr")]
    .splice(-1)[0]
    .querySelectorAll("th");
  let previd = -1;

  headers.forEach((header, i) => {
    header.style.cursor = "pointer";
    header.style.userSelect = "none";

    header.addEventListener("click", (e) => {
      e.preventDefault();

      sortTable(table, i, previd === i);

      if (previd === i) {
        previd = -1;
      } else {
        previd = i;
      }
    });
  });
});
