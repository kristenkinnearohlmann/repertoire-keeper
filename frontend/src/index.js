const BASE_URL = "http://localhost:3000";
const orgNames = document.getElementById("org-names");
const mainBody = document.getElementById("main-body");
const mainMsg = document.getElementById("main-msg");
const mainCompList = document.getElementById("main-comp-list");
const mainCompListItems = [];
const mainMsgDefault = document.getElementById("main-msg-default");
const mainPerfList = document.getElementById("main-perf-list");

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
        fetch(`${BASE_URL}/organizations/${idValue}`)
        .then(response => response.json())
        .then(data => {
            mainMsgDefault.classList.add("display-none");
            const org = new Organization(data);
            const orgDescr = org.renderDescription();
            mainMsg.appendChild(orgDescr);
            // TODO: Main comp list for org once performance join table is ready
            renderOrgPerformances(idValue);
        });
    } else {
        mainPerfList.innerHTML = "";
        mainMsgDefault.classList.remove("display-none");
        mainCompList.classList.remove("display-none");
        renderCompList(mainCompListItems);
    }
};

const getCompositions = () => {
    fetch(`${BASE_URL}/compositions`)
        .then(response => response.json())
        .then(data => {
            const comps = compositionSort(data);

            for (let item in comps) {
                const comp = new Composition(comps[item]);
                const li = comp.renderCompositionListItem();
                mainCompListItems.push(li);
            }

            renderCompList(mainCompListItems);
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

function renderCompList(items) {
    mainCompList.querySelector("ul").innerHTML = "";
    for (let item of items) {
        mainCompList.querySelector("ul").appendChild(item);
    }
};

function renderOrgPerformances(idValue) {
    // mainCompList.querySelector("ul").innerHTML = "";
    mainCompList.classList.add("display-none");
    mainPerfList.innerHTML = "";

    fetch(`${BASE_URL}/organizations/${idValue}/performances/`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            for (let item of data) {
                let perf = new Performance(item);
                console.log(perf.performanceYear);
                console.log(perf.organizationName);
                mainPerfList.appendChild(perf.renderPerformanceData());
            }
        });
}

// load page
init();
