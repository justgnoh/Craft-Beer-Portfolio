const getBtn = document.getElementById('get-btn');

const nameTag = document.getElementById('nameTag');
const websiteTag = document.getElementById('websiteTag');
const stateTag = document.getElementById('stateTag');
const cityTag = document.getElementById('cityTag');
const postalCodeTag = document.getElementById('postalCodeTag');

const anySelected = 'https://api.openbrewerydb.org/breweries';
const microSelected = 'https://api.openbrewerydb.org/breweries?by_type=micro';
const regionalSelected = 'https://api.openbrewerydb.org/breweries?by_type=regional';
const brewpubSelected = 'https://api.openbrewerydb.org/breweries?by_type=brewpub';
const contractSelected = 'https://api.openbrewerydb.org/breweries?by_type=contract';

const getRandomBrewery = (word) => {
    
    refreshData();

    // Generates random number 1-20
    const randomNumber = Math.floor( (Math.random() * 19) + 1);

    const fetchedData = axios.get(word)
    .then(data => {
        console.log(randomNumber);
        let selectedData = data.data[randomNumber];
        console.log(selectedData); 

        fetchedName = selectedData.name;
        fetchedType = selectedData.brewery_type;
        fetchedUrl = selectedData.website_url;
        fetchedState = selectedData.state;
        fetchedCity = selectedData.city;
        fetchedPostalCode = selectedData.postal_code;
        
        nameTag.innerHTML += fetchedName + ' (' + fetchedType + ')';
        
        let link = document.createElement('a');
        link.innerHTML = fetchedUrl;
        link.href = fetchedUrl;
        websiteTag.appendChild(link);
        
        stateTag.innerHTML = fetchedState; 

        cityTag.innerHTML += fetchedCity;
        postalCodeTag.innerHTML += fetchedPostalCode;

        nameTag.style.color= 'gold';
        stateTag.style.color= 'gold';
        cityTag.style.color= 'gold';
        postalCodeTag.style.color= 'gold';
    });
}

const refreshData = () => {
    nameTag.innerHTML = "";
    websiteTag.innerHTML = "";
    stateTag.innerHTML = "";
    cityTag.innerHTML = "";
    postalCodeTag.innerHTML = "";
    console.log("refreshed");
}

let any = document.getElementById('Any-box');
let micro = document.getElementById('Micro-box');
let regional = document.getElementById('Regional-box');
let brewpub = document.getElementById('Brewpub-box');
let contract = document.getElementById('Contract-box');

const handleSelect = (val) => {
    console.log("this.value = " + val);
    if(val == 1) {
        return anySelected;
    } else if(val == 2) {
        return microSelected;
    } else if(val == 3) {
        return regionalSelected;
    } else if(val == 4) {
        return brewpubSelected;
    } else if(val == 5) {
        return contractSelected;
    } else {
        return 0;
    }
}

    var rad = document.myForm.myRadios;
    var prev = null;
    var selector = 0;
    for (var i = 0; i < rad.length; i++) {
        rad[i].addEventListener('change', function() {
            if (this !== prev) {
                prev = this;
            }
        console.log(this.value);
        selector = handleSelect(this.value);
        console.log(selector);
        });
    }

getBtn.addEventListener('click', function() {
    getRandomBrewery(selector);
});
