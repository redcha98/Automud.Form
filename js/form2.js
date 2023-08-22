//  Costanti
const licensePlateApiUrl = "https://localhost:7231/api/cars/licensePlates/";

//  Elementi UI
const licensePlateInput = document.getElementById('input-1');
const nextStep1Button = document.getElementById('ns-1');
const versionSelect = document.getElementById('versione');

//  Elementi nascosti UI
const euroTaxCodeInput = document.getElementById("euroTaxCodeInput");

const OnNextStep1Clicked = async function (event)
{
    if (versionSelect.options.length > 1)
        return;
    
    const licensePlate = licensePlateInput.value;
    let response = await fetch(licensePlateApiUrl + licensePlate);
    if (response.ok)
    {
        let capJson = await response.json();
        const make = capJson.make;
        const versionsJson = capJson.versions;
        versionsJson.forEach(version => {
            let text = `${make} ${version.description}`;
            let value = version.euroTaxCode;
            let option = new Option(text, value);
            versionSelect.add(option);
        });
        licensePlateInput.readOnly = true;
        return;
    }
    
    //todo aggiungere gestione servizio non disponibile
    alert("HTTP-Error: " + response.status);
}
const OnVersionSelectChanged = function (event)
{
    euroTaxCodeInput.value = versionSelect.value;
    console.log(euroTaxCodeInput.value);
}

const AspEnumRadioClick = function(radio, aspInputId) {
    const radioValue = radio.value;
    const aspInput = document.getElementById(aspInputId);
    aspInput.value = radioValue;
    console.log(aspInput.value);
}

//  Eventi UI
nextStep1Button.addEventListener('click', OnNextStep1Clicked);
versionSelect.addEventListener('change', OnVersionSelectChanged);