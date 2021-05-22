const BASE_URL = "http://localhost:3000";
const orgNames = document.getElementById("org-names");
const mainBody = document.getElementById("main-body");
const mainMsg = document.getElementById("main-msg");
const mainCompList = document.getElementById("main-comp-list");
const mainCompListItems = [];
const mainMsgDefault = document.getElementById("main-msg-default");

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

    if (!!pOrgDescrDetail) {
        mainMsg.removeChild(pOrgDescrDetail);
    }

    if (!!idValue) {
        clearMainCompList();

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
    fetch(`${BASE_URL}/compositions`)
        .then(response => response.json())
        .then(data => {
            console.log("Handle composition data");
            const ul = document.createElement("ul");
            const comps = compositionSort(data);

            for (let item in comps) {
                const comp = new Composition(comps[item]);
                const li = comp.renderCompositionListItem();
                ul.appendChild(li);
                mainCompListItems.push(li);
            }

            mainCompList.appendChild(ul);
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

function clearMainCompList() {
    console.log(mainCompList);
};

// load page
init();
