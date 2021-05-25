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

    resetMainDetail();

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
        resetMainDefault();
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

function editPerformance(event) {
    const item = event.target;
    const btns = item.parentElement.querySelectorAll('button');

    toggleDetailEditBtns();
    btns.forEach(btn => {
        if (!btn.id.includes('edit')) {
            btn.classList.remove("display-none");
        }
    });
};

function deletePerformanceComposition(event) {
    const item = event.target.parentElement;
    const itemParent = item.parentElement;
    const compId = getDbIdFromId(event.target.id);
    const perfId = getDbIdFromId(event.target.parentElement.parentElement.id);

    fetch(`${BASE_URL}/performances/${perfId}/performance_compositions`)
        .then(response => response.json())
        .then(data => {
            const perfComps = data.map(element => new PerformanceComposition(element));
            const targetPerfComp = perfComps.find(element => element.compositionId === compId);

            if (targetPerfComp) {
                const configObj = {
                    method: "DELETE",
                    header: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    }
                }

                fetch(`${BASE_URL}/performance_compositions/${targetPerfComp.id}`,configObj)
                    .then(response => {
                        itemParent.removeChild(item);
                        cancelEditPerformance();
                    })
                    .catch(error => {
                        // TODO: Implement visible error msg
                        console.log(error.message);
                    });
            } else {
                // TODO: Implement visible error msg
                console.log("Not found");
            }
        });
};

function addPerformanceComposition(event) {
    console.log("Add performance composition");
    const btns = getMainBodyBtns();

    btns.forEach(btn => {
        if (btn.id.includes('dele')) {
            btn.classList.add("display-none");
        }

        if (btn.id.includes('add')) {
            btn.disabled = "true";
        }
    })
    const addForm = document.getElementById(`perf-${getDbIdFromId(event.target.id)}-add-comp`);
    addForm.classList.remove("display-none");
};

function addCompositionToPerformance(event) {
    event.preventDefault();
    const compForm = event.target;
    console.log(compForm);
    console.log(compForm.performance_id.value);
    console.log(compForm.comp_name.value);
    console.log(compForm.comp_composer_firstname.value);
    console.log(compForm.comp_composer_lastname.value);
    console.log(compForm.comp_year_composed.value);
};

function cancelEditPerformance(event) {
    const btns = getMainBodyBtns();
    const addFormDivs = document.querySelectorAll(".perf-add-comp");

    toggleDetailEditBtns();
    btns.forEach(btn => {
        if (!btn.id.includes('edit')) {
            btn.classList.add("display-none");
        }
        if (btn.id.includes('add')) {
            btn.disabled = false;
        }
    });

    addFormDivs.forEach(div => {
        div.classList.add("display-none");
        div.querySelector("form").reset();
    })
};

// Helper functions
function resetMainDefault() {
    mainBodyDefault.classList.remove("display-none");
    renderCompList(mainCompListItems);
};

function resetMainDetail() {
    detailPerfList.innerHTML = "";
    detailMsg.innerHTML = "";
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

function toggleDetailEditBtns() {
    const btns = getMainBodyBtns();

    btns.forEach(btn => {
        if (btn.id.includes('edit') && btn.disabled) {
            btn.disabled = false;
        } else if (btn.id.includes('edit') && !btn.disabled) {
            btn.disabled = true;
        }
    });
};

function getDbIdFromId(idVal) {
    return parseInt(idVal.split('-').find(element => Number.isInteger(parseInt(element,10))),10);
};

function getMainBodyBtns() {
    return document.getElementById('main-body').querySelectorAll('button');
};

// Left panel buttons
document.getElementById('btn-left-main').addEventListener('click', () => {
    resetMainDetail();
    resetMainDefault();
    orgNames.parentElement.reset();
})

// load page
init();
