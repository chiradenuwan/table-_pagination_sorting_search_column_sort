import {Component, OnInit} from '@angular/core';
import {Person} from "../../dto/person";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  person: Person[] = [];
  page: number;
  pageSize: number;
  searchText: any;
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
  col6: string;
  col7: string;


  constructor() {
  }

  ngOnInit(): void {
    this.page = 1;
    this.pageSize = 8;
    this.person = [
      {
        id: "1", name: "Aaron 2Moore", position: "Regional Configuration Producer", office: "Edinburgh1",
        age: "1", startdate: "2011/04/25", salary: "$120,800"
      },
      {
        id: "2", name: "Yvonne Conroy Mrs.", position: "Global Mobility Orchestrator", office: "Edinburgh2",
        age: "2",
        startdate: "2011/04/25",
        salary: "$220,800"
      },
      {
        id: "3", name: "Laron Padberg", position: "Senior Directives Supervisor", office: "Edinburgh3",
        age: "3",
        startdate: "2011/04/25",
        salary: "$320,800"
      },
      {
        id: "4", name: "Dr. Maryam Spinka", position: "Dynamic Mobility Associate", office: "Edinburgh4",
        age: "4",
        startdate: "2011/04/25",
        salary: "$420,800"
      },
      {
        id: "5", name: "Kiley Baumbach", position: "Principal Metrics Orchestrator", office: "Edinburgh5",
        age: "5",
        startdate: "2011/04/25",
        salary: "$520,800"
      },
      {
        id: "6", name: "Hollis MacGyver", position: "Direct Markets Assistant", office: "Edinburgh6",
        age: "6",
        startdate: "2011/04/25",
        salary: "$620,800"
      },
      {
        id: "7", name: "Axel McLaughlin", position: "Forward Mobility Architect", office: "Edinburgh7",
        age: "7",
        startdate: "2011/04/25",
        salary: "$720,800"
      },
      {
        id: "8", name: "Ricardo Botsford", position: "Direct Quality Consultant", office: "Edinburgh8",
        age: "8",
        startdate: "2011/04/25",
        salary: "$820,800"
      },
      {
        id: "10", name: "Corbin Funk Mrs.", position: "Human Configuration Manager", office: "9Edinburgh",
        age: "10",
        startdate: "2011/04/25",
        salary: "$920,800"
      },
      {
        id: "11", name: "Rosalind Paucek", position: "Future Creative Supervisor", office: "10Edinburgh",
        age: "11",
        startdate: "2011/04/25",
        salary: "$100,800"
      },
      {
        id: "12", name: "Henderson Moore", position: "Internal Accountability Director", office: "11Edinburgh",
        age: "12",
        startdate: "2011/04/25",
        salary: "$110,800"
      },
      {
        id: "13", name: "Kelli Schoen", position: "National Accountability Architect", office: "12Edinburgh",
        age: "13",
        startdate: "2011/04/25",
        salary: "$120,800"
      },
      {
        id: "14", name: "Kenna Fritsch", position: "Legacy Response Administrator", office: "13Edinburgh",
        age: "14",
        startdate: "2011/04/25",
        salary: "$130,800"
      },
      {
        id: "15", name: "Judge Marquardt", position: "Human Program Specialist", office: "14Edinburgh",
        age: "15",
        startdate: "2011/04/25",
        salary: "$140,800"
      },
      {
        id: "16", name: "Kurtis Hane", position: "International Optimization Director", office: "15Edinburgh",
        age: "16",
        startdate: "2011/04/25",
        salary: "$150,800"
      },
      {
        id: "17", name: "Nicolette Lind", position: "Legacy Marketing Facilitator", office: "16Edinburgh",
        age: "17",
        startdate: "2011/04/25",
        salary: "$160,800"
      },
      {
        id: "18", name: "Idella Green", position: "Dynamic Division Orchestrator", office: "17Edinburgh",
        age: "18",
        startdate: "2011/04/25",
        salary: "$170,800"
      },
      {
        id: "19", name: "Mackenzie Bartell", position: "National Directives Associate", office: "18Edinburgh",
        age: "19",
        startdate: "2011/04/25",
        salary: "$180,800"
      },
      {
        id: "20", name: "Mose Kohler", position: "Lead Implementation Executive", office: "19Edinburgh",
        age: "20",
        startdate: "2011/04/25",
        salary: "$190,800"
      },
      {
        id: "21", name: "Cielo Kuphal", position: "Dynamic Division Analyst", office: "20Edinburgh",
        age: "61",
        startdate: "2011/04/25",
        salary: "$200,800"
      },
      {
        id: "22", name: "Haleigh Stokes", position: "Global Intranet Executive", office: "21Edinburgh",
        age: "22",
        startdate: "2011/04/25",
        salary: "$210,800"
      },
      {
        id: "23", name: "Tyrese Walter", position: "Senior Web Liason", office: "22Edinburgh",
        age: "23",
        startdate: "2011/04/25",
        salary: "$220,800"
      },
      {
        id: "24", name: "Barney Shields", position: "District Web Administrator", office: "23Edinburgh",
        age: "24",
        startdate: "2011/04/25",
        salary: "$230,800"
      },
      {
        id: "25", name: "Favian Abbott Miss", position: "Lead Implementation Facilitator", office: "24Edinburgh",
        age: "25",
        startdate: "2011/04/25",
        salary: "$240,800"
      },
      {
        id: "26", name: "Carissa Kunze", position: "Regional Division Technician", office: "25Edinburgh",
        age: "26",
        startdate: "2011/04/25",
        salary: "$250,800"
      }
    ]
  }

  sortTable(n: number) {
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable2");
    switching = true;
    dir = "asc";
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount++;
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

  remove(event) {
    switch (event.target.checked) {
      case true:
        switch (event.target.defaultValue) {
          case 'col1':
            this.col1 = 'col1';
            break;
          case 'col2':
            this.col2 = 'col2';
            break;
          case 'col3':
            this.col3 = 'col3';
            break;
          case 'col4':
            this.col4 = 'col4';
            break;
          case 'col5':
            this.col5 = 'col5';
            break;
          case 'col6':
            this.col6 = 'col6';
            break;
          case 'col7':
            this.col7 = 'col7';
            break;
        }
        break;
      case false:
        switch (event.target.defaultValue) {
          case 'col1':
            this.col1 = 'display';
            break;
          case 'col2':
            this.col2 = 'display';
            break;
          case 'col3':
            this.col3 = 'display';
            break;
          case 'col4':
            this.col4 = 'display';
            break;
          case 'col5':
            this.col5 = 'display';
            break;
          case 'col6':
            this.col6 = 'display';
            break;
          case 'col7':
            this.col7 = 'display';
            break;
        }
        break;
    }
  }


}
