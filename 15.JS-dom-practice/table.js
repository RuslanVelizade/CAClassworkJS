const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems",
    },
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
      geo: {
        lat: "-71.4197",
        lng: "71.7478",
      },
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
      name: "Considine-Lockman",
      catchPhrase: "Synchronised bottom-line interface",
      bs: "e-enable innovative applications",
    },
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      geo: {
        lat: "24.8918",
        lng: "21.8984",
      },
    },
    phone: "210.067.6132",
    website: "elvis.io",
    company: {
      name: "Johns Group",
      catchPhrase: "Configurable multimedia task-force",
      bs: "generate enterprise e-tailers",
    },
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
      geo: {
        lat: "-14.3990",
        lng: "-120.7677",
      },
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: {
      name: "Abernathy Group",
      catchPhrase: "Implemented secondary concept",
      bs: "e-enable extensible e-tailers",
    },
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      geo: {
        lat: "24.6463",
        lng: "-168.8889",
      },
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
      name: "Yost and Sons",
      catchPhrase: "Switchable contextually-based project",
      bs: "aggregate real-time technologies",
    },
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
  },
];

const arr = [
  {
    id: 1,
    first_name: "Erda",
    last_name: "addingham",
    email: "ewaddingham0@mysql.com",
    gender: "Female",
  },
  {
    id: 2,
    first_name: "Bev",
    last_name: "Gavin",
    email: "bgavin1@archive.org",
    gender: "Female",
  },
  {
    id: 3,
    first_name: "Tabb",
    last_name: "Murphy",
    email: "tmurphy2@ameblo.jp",
    gender: "Male",
  },
  {
    id: 4,
    first_name: "Elberta",
    last_name: "Hansom",
    email: "ehansom3@infoseek.co.jp",
    gender: "Female",
  },
  {
    id: 5,
    first_name: "Chantalle",
    last_name: "Espinoza",
    email: "cespinoza4@t.co",
    gender: "Female",
  },
  {
    id: 6,
    first_name: "Chickie",
    last_name: "Bail",
    email: "cbail5@domainmarket.com",
    gender: "Male",
  },
  {
    id: 7,
    first_name: "Conney",
    last_name: "Soot",
    email: "csoot6@noaa.gov",
    gender: "Male",
  },
  {
    id: 8,
    first_name: "Emlynne",
    last_name: "Tabourier",
    email: "etabourier7@51.la",
    gender: "Female",
  },
  {
    id: 9,
    first_name: "Shadow",
    last_name: "Neicho",
    email: "sneicho8@nifty.com",
    gender: "Male",
  },
  {
    id: 10,
    first_name: "Caro",
    last_name: "Dunnan",
    email: "cdunnan9@biglobe.ne.jp",
    gender: "Female",
  },
  {
    id: 11,
    first_name: "Sissy",
    last_name: "Summergill",
    email: "ssummergilla@google.nl",
    gender: "Female",
  },
  {
    id: 12,
    first_name: "Gerda",
    last_name: "Hallex",
    email: "ghallexb@bloglovin.com",
    gender: "Female",
  },
  {
    id: 13,
    first_name: "Maurizia",
    last_name: "Vale",
    email: "mvalec@tuttocitta.it",
    gender: "Female",
  },
  {
    id: 14,
    first_name: "Benjie",
    last_name: "Gilbee",
    email: "bgilbeed@wp.com",
    gender: "Male",
  },
  {
    id: 15,
    first_name: "Prescott",
    last_name: "Ariss",
    email: "parisse@networksolutions.com",
    gender: "Male",
  },
  {
    id: 16,
    first_name: "Hazel",
    last_name: "Osbourn",
    email: "hosbournf@earthlink.net",
    gender: "Female",
  },
  {
    id: 17,
    first_name: "Courtnay",
    last_name: "McIlriach",
    email: "cmcilriachg@usa.gov",
    gender: "Male",
  },
  {
    id: 18,
    first_name: "Betta",
    last_name: "Bilby",
    email: "bbilbyh@miibeian.gov.cn",
    gender: "Female",
  },
  {
    id: 19,
    first_name: "Dalia",
    last_name: "Hanhardt",
    email: "dhanhardti@mozilla.org",
    gender: "Female",
  },
  {
    id: 20,
    first_name: "Andrey",
    last_name: "Costin",
    email: "acostinj@nydailynews.com",
    gender: "Male",
  },
  {
    id: 21,
    first_name: "Gilly",
    last_name: "Proven",
    email: "gprovenk@google.ca",
    gender: "Female",
  },
  {
    id: 22,
    first_name: "Tull",
    last_name: "Petch",
    email: "tpetchl@phpbb.com",
    gender: "Male",
  },
  {
    id: 23,
    first_name: "Ailsun",
    last_name: "Saltrese",
    email: "asaltresem@house.gov",
    gender: "Female",
  },
  {
    id: 24,
    first_name: "Kim",
    last_name: "Roseveare",
    email: "krosevearen@deliciousdays.com",
    gender: "Female",
  },
  {
    id: 25,
    first_name: "Kimmie",
    last_name: "Gallandre",
    email: "kgallandreo@hp.com",
    gender: "Genderfluid",
  },
  {
    id: 26,
    first_name: "Serena",
    last_name: "Blainey",
    email: "sblaineyp@constantcontact.com",
    gender: "Female",
  },
  {
    id: 27,
    first_name: "Harman",
    last_name: "Louys",
    email: "hlouysq@pagesperso-orange.fr",
    gender: "Male",
  },
  {
    id: 28,
    first_name: "Pepe",
    last_name: "McGaughey",
    email: "pmcgaugheyr@google.de",
    gender: "Genderfluid",
  },
  {
    id: 29,
    first_name: "Zeke",
    last_name: "Drews",
    email: "zdrewss@yellowpages.com",
    gender: "Male",
  },
  {
    id: 30,
    first_name: "Shirleen",
    last_name: "Dybbe",
    email: "sdybbet@jalbum.net",
    gender: "Female",
  },
  {
    id: 31,
    first_name: "Calvin",
    last_name: "Covill",
    email: "ccovillu@apache.org",
    gender: "Male",
  },
  {
    id: 32,
    first_name: "Arnoldo",
    last_name: "Stittle",
    email: "astittlev@domainmarket.com",
    gender: "Male",
  },
  {
    id: 33,
    first_name: "Horatius",
    last_name: "Stancliffe",
    email: "hstancliffew@nps.gov",
    gender: "Male",
  },
];
let tBody = document.querySelector("tbody");

function drawTable(data) {
  tBody.innerHTML = "";
  data.forEach((element) => {
    let trElement = document.createElement("tr");

    trElement.innerHTML = `
            <td>${element.id}</td>
            <td>${element.first_name} ${element.last_name}</td>
            <td>${element.email}</td>
            <td>${element.gender}</td>
        `;
    tBody.append(trElement);
  });
}

drawTable(arr);
let search = document.querySelector("#search");
search.addEventListener("keyup", function (param) {
  let filtered = arr.filter((item) =>
    `${item.email} , ${item.first_name}, ${item.last_name}`
      .toLocaleLowerCase()
      .includes(param.target.value)
  );

  drawTable(filtered);
});

let button1 = document.querySelector(".btn1");
let button2 = document.querySelector(".btn2");
let button3 = document.querySelector(".btn3");

button1.addEventListener("click", function () {
  let sortButton1 = arr.sort((a, b) => a.id - b.id);
  drawTable(sortButton1);
});
button2.addEventListener("click", function () {
  let sortButton2 = arr.sort((a, b) => b.id - a.id);
  drawTable(sortButton2);
});
button3.addEventListener("click", function () {
  let sortNameButton3 = arr.sort((a, b) =>
    a.first_name.localeCompare(b.first_name)
  );
  drawTable(sortNameButton3);
});
