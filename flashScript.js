// Creating arrays of countries and corresponding capitals for all continents. The arrays are required to have the same order
// and length of at least 9 elements.
const euCountries = ("Albania,Andorra,Armenia,Austria,Azerbaijan,Belarus,Belgium,Bosnia and Herzegovina,Bulgaria,Croatia,Cyprus," +
    "Czech Republic,Denmark,Estonia,Finland,France,Georgia,Germany,Greece,Hungary,Iceland,Ireland,Italy,Latvia,Liechtenstein," +
    "Lithuania,Luxembourg,Macedonia,Malta,Moldova,Monaco,Montenegro,Netherlands,Norway,Poland,Portugal,Romania,San Marino,Serbia," +
    "Slovakia,Slovenia,Spain,Sweden,Switzerland,Ukraine,United Kingdom,Vatican City").split(",");

const euCapitals = ("Tirana,Andorra la Vella,Yerevan,Vienna,Baku,Minsk,Brussels,Sarajevo,Sofia,Zagreb,Nicosia,Prague,Copenhagen," +
    "Tallinn,Helsinki,Paris,Tbilisi,Berlin,Athens,Budapest,Reykjavik,Dublin,Rome,Riga,Vaduz,Vilnius,Luxembourg City,Skopje," +
    "Valletta,Chisinau,Monaco,Podgorica,Amsterdam,Oslo,Warsaw,Lisbon,Bucharest,San Marino,Belgrade,Bratislava,Ljubljana,Madrid," +
    "Stockholm,Bern,Kiev,London,Vatican City").split(",");

const asCountries =("Afghanistan,Bahrain,Bangladesh,Bhutan,Brunei,Myanmar (Burma),Cambodia,China,East Timor,India,Indonesia,Iran," +
    "Iraq,Israel,Japan,Jordan,Kazakhstan,North Korea,South Korea,Kuwait,Kyrgyzstan,Laos,Lebanon,Malaysia,Maldives,Mongolia,Nepal," +
    "Oman,Pakistan,Philippines,Qatar,Russian Federation (Russia),Saudi Arabia,Singapore,Sri Lanka,Syria,Tajikistan,Thailand," +
    "Turkey,Turkmenistan,United Arab Emirates,Uzbekistan,Vietnam,Yemen").split(",");

const asCapitals =("Kabul,Manama,Dhaka,Thimpu,Bandar Seri Begawan,Nay Pyi Taw,Phnom Penh,Beijing,Dili,New Delhi,Jakarta,Tehran," +
    "Baghdad,Jerusalem,Tokyo,Amman,Astana,Pyongyang,Seoul,Kuwait City,Bishkek,Vientiane,Beirut,Kuala Lumpur,Male (Maale)," +
    "Ulaanbaatar,Kathmandu,Muscat,Islamabad,Manila,Doha,Moscow,Riyadh,Singapore,Colombo,Damascus,Dushanbe,Bangkok,Ankara,Ashgabat," +
    "Abu Dhabi,Tashkent,Hanoi,Sanaa").split(",");

const afCountries =("Algeria,Angola,Botswana,Burundi,Cameroon,Cape Verde,Central African Republic,Chad,Congo," +
    "Democratic Republic of Congo,Egypt,Equatorial Guinea,Ethiopia,Gambia,Ghana,Guinea,Guinea-Bissau,Ivory Coast,Kenya,Libya," +
    "Madagascar,Mali,Mauritius,Morocco,Mozambique,Namibia,Niger,Nigeria,Rwanda,Seychelles,Sierra Leone,Somalia,South Africa," +
    "South Sudan,Sudan,Tanzania,Tunisia,Uganda,Zambia,Zimbabwe").split(",");

const afCapitals =("Algiers,Luanda,Gaborone,Bujumbura,Yaounde,Praia,Bangui,N'Djamena,Brazzaville,Kinshasa,Cairo,Malabo," +
    "Addis Ababa,Banjul,Accra,Conakry,Bissau,Yamoussoukro,Nairobi,Tripoli,Antananarivo,Bamako,Port Louis,Rabat,Maputo,Windhoek," +
    "Niamey,Abuja,Kigali,Victoria,Freetown,Mogadishu,Cape Town; Pretoria; Bloemfontein,Juba,Khartoum,Dodoma,Tunis,Kampala,Lusaka," +
    "Harare").split(",");

const naCountries =("Antigua and Barbuda,Bahamas,Barbados,Belize,Canada,Costa Rica,Cuba,Dominica,Dominican Republic,El Salvador," +
    "Grenada,Guatemala,Haiti,Honduras,Jamaica,Mexico,Nicaragua,Panama,Saint Kitts and Nevis,Saint Lucia," +
    "Saint Vincent and the Grenadines,Trinidad and Tobago,United States").split(",");

const naCapitals =("St. John's,Nassau,Bridgetown,Belmopan,Ottawa,San Jose,Havana,Roseau,Santo Domingo,San Salvador,St. George's," +
    "Guatemala City,Port-au-Prince,Tegucigalpa,Kingston,Mexico City,Managua,Panama City,Basseterre,Castries,Kingstown," +
    "Port of Spain,Washington D.C.").split(",");

const saCountries =("Argentina,Bolivia,Brazil,Chile,Colombia,Ecuador,Guyana,Paraguay,Peru,Suriname,Uruguay,Venezuela").split(",");

const saCapitals =("Buenos Aires,Sucre,Brasilia,Santiago,Bogota,Quito,Georgetown,Asuncion,Lima,Paramaribo,Montevideo,Caracas").split(",");

const aoCountries =("Australia,Fiji,Kiribati,Marshall Islands,Micronesia,Nauru,New Zealand,Palau,Papua New Guinea,Samoa," +
    "Solomon Islands,Tonga,Tuvalu,Vanuatu").split(",");

const aoCapitals =("Canberra,Suva,South Tarawa,Majuro,Palikir,Yaren (not official),Wellington,Ngerulmud,Port Moresby,Apia,Honiara," +
    "Nuku'alofa,Funafuti,Port Vila").split(",");

// Assigning buttons to corresponding region images. Each button gets and appropriate function to show the proper region on
// 'mouseover' event and hide it on 'mouseout'.
const buttons = document.getElementsByClassName('btn');
for (let i = 0; i < buttons.length; i++) {
    let region = buttons[i].id;
    let imgId;
    switch (region) {
        case 'eu':
            imgId = 'imgEu'
            break;
        case 'as':
            imgId = 'imgAs'
            break;
        case 'af':
            imgId = 'imgAf'
            break;
        case 'na':
            imgId = 'imgNa'
            break;
        case 'sa':
            imgId = 'imgSa'
            break;
        case 'ao':
            imgId = 'imgAo'
            break;
    }
    buttons[i].addEventListener('mouseover', function () {
        showRegion(imgId);
    });
    buttons[i].addEventListener('mouseout', function () {
        hideRegion(region, imgId);
    });
}

// Setting the initial animation of buttons.
let time = 0;
for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.animation = 'btnLoad 1s ' + time + 's forwards';
    time += 0.1;
}

// Functions used by button elements to show/hide continent images on 'mouseover'
function showRegion(imgId) {
    document.getElementById(imgId).style.opacity = '1';
}

function hideRegion(region, imgId) {
    let current = document.getElementById(region);
    if (! current.classList.contains('active')) {
        document.getElementById(imgId).style.opacity = '0';
    }
}

// The main function triggered on button 'click'. Draws a random set of 9 (country/capital) pairs for the selected continent.
// 1) Pick the proper arrays of countries, capitals and the continent image id.
function setRegion(continent) {
    let allCountries;
    let allCapitals;
    let image;
    switch (continent) {
        case 'eu':
            allCountries = euCountries;
            allCapitals = euCapitals;
            image = 'imgEu';
            break;
        case 'as':
            allCountries = asCountries;
            allCapitals = asCapitals;
            image = 'imgAs';
            break;
        case 'af':
            allCountries = afCountries;
            allCapitals = afCapitals;
            image = 'imgAf';
            break;
        case 'na':
            allCountries = naCountries;
            allCapitals = naCapitals;
            image = 'imgNa';
            break;
        case 'sa':
            allCountries = saCountries;
            allCapitals = saCapitals;
            image = 'imgSa';
            break;
        case 'ao':
            allCountries = aoCountries;
            allCapitals = aoCapitals;
            image = 'imgAo';
            break;
    }

    // Show the board area if it was hidden.
    const board = document.getElementsByClassName('board');
    board[0].style.opacity = '1';

    // 2) Add 'active' class to the clicked button and remove it from the others.
    for (let button of document.getElementsByClassName('btn')) {
        button.className = button.className.replace(' active', '');
    }
    document.getElementById(continent).className += ' active';

    // 3) Show only the selected continent.
    const bgImages = document.getElementsByClassName('region');
    for (let i = 0; i < bgImages.length; i++) {
        bgImages[i].style.opacity = '0';
    }
    document.getElementById(image).style.opacity = '1';

    // 4) Choose 9 random numbers from a range equal to countries array length.
    const countries = [];
    const capitals = [];
    const numbers = new Set();
    const len = allCountries.length;
    while (numbers.size < 9) {
        let pos = Math.floor(Math.random() * len);
        numbers.add(pos);
    }

    // 5) Pick 9 countries and capitals using chosen numbers as their indices.
    numbers.forEach(function (value) {
        countries.push(allCountries[value]);
        capitals.push(allCapitals[value]);
    });

    // 6) For each card element add a country to the front and a capital to the back side.
    const fronts = document.getElementsByClassName('front');
    const backs = document.getElementsByClassName('back');
    for (let i = 0; i < 9; i++) {
        fronts[i].firstChild.firstChild.nodeValue = countries[i];
        backs[i].firstChild.firstChild.nodeValue = capitals[i];
    }
}