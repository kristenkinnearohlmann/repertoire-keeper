const BASE_URL = "http://localhost:3000";
const orgNames = document.getElementById("org-names");
const mainBodyDefault = document.getElementById("main-body-default");
const detailMsg = document.getElementById("detail-msg");
const mainCompList = document.getElementById("main-comp-list");
const mainCompListItems = [];
const detailPerfList = document.getElementById("main-perf-list");

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

    detailPerfList.innerHTML = "";
    detailMsg.innerHTML = "";

    if (!!idValue) {
        fetch(`${BASE_URL}/organizations/${idValue}`)
        .then(response => response.json())
        .then(data => {
            mainBodyDefault.classList.add("display-none");

            const org = new Organization(data);
            const orgDescr = org.renderDescription();

            detailMsg.appendChild(orgDescr);
            renderOrgPerformances(idValue);
        });
    } else {
        mainBodyDefault.classList.remove("display-none");
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
    detailPerfList.innerHTML = "";

    fetch(`${BASE_URL}/organizations/${idValue}/performances/`)
        .then(response => response.json())
        .then(data => {
            performanceYearReverseSort(data);
            for (let item of data) {
                let perf = new Performance(item);
                detailPerfList.appendChild(perf.renderPerformanceData());
            }
        });
};

function performanceYearReverseSort(data) {
    return(data.sort((a,b) => {
        if (a.performance_year < b.performance_year) {
            return 1;
        }
    
        if (a.performance_year > b.performance_year) {
            return -1;
        }
    
        return 0;
    }));
};

function editPerformance(event) {
    const item = event.target;
    console.log(item.getAttribute('data-btn-perf-id'));
}

// load page
init();
