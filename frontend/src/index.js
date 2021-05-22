const BASE_URL = "http://localhost:3000";
const orgNames = document.getElementById("org-names");
const mainMsg = document.getElementById("main-msg");

// structure page for use
const init = () => {
    getOrgNames();
};


const getOrgNames = () => {
    fetch(`${BASE_URL}/organizations`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            for (const org of data) {
                const { name, id } = org;
                const option = document.createElement("option");
                option.text = name;
                option.value = id;
                orgNames.add(option);
            }
        })

        orgNames.addEventListener('change', displaySelectedOrgInfo);
};

function displaySelectedOrgInfo(event) {
    const idValue = parseInt(event.target.value);
    console.log(idValue);
    if (!!idValue) {
        fetch(`${BASE_URL}/organizations/${idValue}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            mainMsg.classList.add("display-none");
        });
    } else {
        mainMsg.classList.remove("display-none");
    }
};

// load page
init();
