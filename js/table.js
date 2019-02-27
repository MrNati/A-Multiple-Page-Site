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
  
  let labels1 = ['ID', 'Name']; 
  let objects1 = [
    {"id": "1", 'name': "Tanya Michelle Tangue"},
    {"id": "2", 'name': "Tina Michelle Martin"},
    {"id": "3", 'name': "Terry Odom"},
    {"id": "4", 'name': "Kendrick Brandley"},
    {"id": "5", 'name': "Jerrell Taylor"},
    {"id": "6", 'name': "Nathan Bliss"},
    {"id": "7", 'name': "Christina Martins"},
    {"id": "8", 'name': "Daniel Hope"},
    {"id": "9", 'name': "Thomas Wayne"},
    {"id": "10", 'name': "Martins Mantlo"},
    {"id": "11", 'name': "Anthony Marinda"},
    {"id": "12", 'name': "Ryan Aulich"},
    {"id": "13", 'name': "LaDonna C Washington"},
    {"id": "14", 'name': "Ashley Kaye"},
    {"id": "15", 'name': "Ayu Zenny Rosjidah"},
    {"id": "16", 'name': "Brandon Kendrick"},
    {"id": "17", 'name': "Eddie Graham"},
    {"id": "18", 'name': "Smith Sanpex"},
    {"id": "19", 'name': "Egbert Carr Arthur"},
    {"id": "20", 'name': "Stephen Hardy Robert"},
    {"id": "21", 'name': "Germaine Olawumi"},
    {"id": "22", 'name': "Derrick Lajames Jackson"},
    {"id": "23", 'name': "Arielle Rakel Webster"},
    {"id": "24", 'name': "Daniel Dotson K"},
    {"id": "25", 'name': "Todd Bruce Frierson"},
    {"id": "26", 'name': "Christopher Dobbins"},
    {"id": "27", 'name': "Christopher Wise"},
    {"id": "28", 'name': "Cory Duane Backlund"},
    {"id": "29", 'name': "Joseph Bradley Cohoon"},
    {"id": "30", 'name': "James Williams A"},
    {"id": "31", 'name': "John Travis Baker"},
    {"id": "32", 'name': "Evelyn Shreve"},
    {"id": "33", 'name': "Brandy Jean Wright"},
    {"id": "34", 'name': "Colleen Brianne Butler"},
    {"id": "35", 'name': "James Randall Hughes"},
    {"id": "36", 'name': "James Joseph Howard"},
    {"id": "37", 'name': "Charles Leanard Needham"},
    {"id": "38", 'name': "Jillmilya Levette Wade"},
    {"id": "39", 'name': "Michael Jerrolds"},
    {"id": "40", 'name': "Funzell Hollins"},
    {"id": "41", 'name': "John Woods"}
  ];
  
  buildTable(labels1, objects1, document.getElementById('a'));