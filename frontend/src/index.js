const BASE_URL = "http://localhost:3000";
const orgNames = document.getElementById("org-names");
const mainMsg = document.getElementById("main-msg");
const mainMsgDefault = document.getElementById("main-msg-default");
const allCompositions = [];

// structure page for use
const init = () => {
    getOrgNames();
    getCompositions();
};


const getOrgNames = () => {
    fetch(`${BASE_URL}/organizations`)
        .then(response => response.json())
        .then(data => {
            for (const item of data) {
                const org = new Organization(item);
                const option = document.createElement("option");

                option.text = org.orgName;
                option.value = org.orgId;

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
        .then(response => response.json())
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

const getCompositions = () => {
    console.log("getCompositions");
    fetch(`${BASE_URL}/compositions`)
        .then(response => response.json())
        .then(data => {
            console.log("Handle composition data");
            console.log(data);
            allCompositions.push("b");
            allCompositions.push("a");
            allCompositions.push("c");
            console.log(allCompositions);
            console.log(allCompositions.sort());
            console.log(compositionSort(data));
            // console.log(data.sort((a,b) => {
            //     if (a.name < b.name) {
            //         return -1;
            //     }

            //     if (a.name > b.name) {
            //         return 1;
            //     }

            //     return 0;
            // }));
        });
};

function compositionSort(data) {
    return(data.sort((a,b) => {
        const aVals = `${a.composer_lastname.toLowerCase()} ${a.composer_firstname.toLowerCase()} ${a.name}`;
        const bVals = `${b.composer_lastname.toLowerCase()} ${b.composer_firstname.toLowerCase()} ${b.name}`;

        if (aVals < bVals) {
            return -1;
        }
    
        if (aVals > bVals) {
            return 1;
        }
    
        return 0;
    }));
}

// load page
init();
