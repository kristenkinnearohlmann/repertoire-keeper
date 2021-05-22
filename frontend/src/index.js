const BASE_URL = "http://localhost:3000";
const orgNames = document.getElementById("org-names");
const mainMsg = document.getElementById("main-msg");
const mainMsgDefault = document.getElementById("main-msg-default");

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
    const pOrgDescrDetail = document.getElementById("org-descr-detail");

    if (!!pOrgDescrDetail) mainMsg.removeChild(pOrgDescrDetail);

    if (!!idValue) {
        fetch(`${BASE_URL}/organizations/${idValue}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            mainMsgDefault.classList.add("display-none");
            const org = new Organization(data);
            const orgDescr = org.renderDescription();
            mainMsg.appendChild(orgDescr);
        });
    } else {
        mainMsgDefault.classList.remove("display-none");
    }
};

// load page
init();
