"Strict";

function buildTable(labels, objects, container) {
    let table = document.getElementById('table');
    let thead = document.getElementById('thead');
    let tbody = document.getElementById('tbody');

    let theadTr = document.getElementById('tr');
    for (let i = 0; i < labels.length; i++) {
        let theadTh = document.createElement('th');
        theadTh.innerHTML = labels[i];
        theadTr.appendChild(theadTh);
    }
    thead.appendChild(theadTr);
    table.appendChild(thead);

    for (let j = 0; j < objects.length; j++) {
        let tbodyTr = document.createElement('tr');
        for (let k = 0; k < labels.length; k++) {
        let tbodyTd = document.createElement('td');
        tbodyTd.innerHTML = objects[j][labels[k].toLowerCase()];
        tbodyTr.appendChild(tbodyTd);
        }
        tbody.appendChild(tbodyTr);
    }
    table.appendChild(tbody);

    container.appendChild(table);
}