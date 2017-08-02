if(document.querySelector('.spf-body .spf-side-nav')) {
    SPF.isSideNav(document.querySelector('.spf-body .spf-side-nav'));
}

if(document.querySelector('.spf-body .spf-tabs')) {
    SPF.isTabElement(document.querySelector('.spf-body .spf-tabs'));
}
try {
    var accordionToggles = document.querySelectorAll('.accordion-toggle');
    for (elem of accordionToggles) {
        elem.addEventListener('click', (e) => {
            UIKIT.accordion.Toggle(e.target);
        });
    }
} catch (e) { }

try {
    var accordionToggles = document.querySelectorAll('.accordion-toggleSlow');
    for (elem of accordionToggles) {
        elem.addEventListener('click', (e) => {
            UIKIT.accordion.Toggle(e.target, 1000);
        });
    }
} catch (e) { }

try {
    var accordionTogglesCallback = document.querySelectorAll('.accordion-toggleCallback');
    for (elem of accordionTogglesCallback) {
        elem.addEventListener('click', (e) => {
            UIKIT.accordion.Toggle(e.target, undefined, {
                onOpen: function () {
                    console.log('This function will run when an accordion opens');
                },
                afterOpen: function () {
                    console.log('This function will run after an accordion has opened');
                },
                onClose: function () {
                    console.log('This function will run when an accordion closes');
                },
                afterClose: function () {
                    console.log('This function will run after an accordion has closed');
                },
            })
        });
    }
} catch (e) { }

closeDropdown1 = () => {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-1"),
        property: 'height',
        endSize: 0,
        speed: 500,
        callback: function () {
            console.log("end close #1");
        },
    });
}

openDropdown1 = () => {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-1"),
        property: "height",
        endSize: "auto",
        speed: 500,
        callback: function () {
            console.log("end open #1");
        },
    })
}

toggleDropdown1 = () => {
    UIKIT.animate.Toggle({
        element: document.getElementById("dropdown-1"),
        property: "height",
        speed: 500,
        prefunction: function (element, state) {
            console.log(element);
            console.log(state);
            console.log("prefunction toggle #1");
        },
        postfunction: function (element, state) {
            console.log(element);
            console.log(state);
            console.log("postfunction toggle #1");
        },
        callback: function (element, state) {
            console.log(element);
            console.log(state);
            console.log("callback toggle #1");
        },
    })
}

stopDropdown1 = () => {
    UIKIT.animate.Stop(document.getElementById("dropdown-1"))
}

closeDropdown2 = () => {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-2"),
        property: "width",
        endSize: 0,
        callback: function () {
            console.log("end close #2");
        },
    })
}

openDropdown2 = () => {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-2"),
        property: "width",
        endSize: "auto",
        callback: function () {
            console.log("end open #2");
        },
    })
}

toggleDropdown2 = () => {
    UIKIT.animate.Toggle({
        element: document.getElementById("dropdown-2"),
        property: "width",
        prefunction: function (element, state) {
            console.log(element);
            console.log(state);
            console.log("prefunction toggle #2");
        },
        postfunction: function (element, state) {
            console.log(element);
            console.log(state);
            console.log("postfunction toggle #2");
        },
        callback: function (element, state) {
            console.log(element);
            console.log(state);
            console.log("callback toggle #2");
        },
    })
}

stopDropdown2 = () => {
    UIKIT.animate.Stop(document.getElementById("dropdown-2"))
}

removePadding = () => {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-padding1"),
        property: "padding",
        endSize: 0,
        callback: function () {
            console.log("end removing padding #3");
        },
    })
}

addPadding = () => {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-padding1"),
        property: "padding",
        endSize: 20,
        callback: function () {
            console.log("end add padding #3");
        },
    })
}

togglePadding = () => {
    UIKIT.animate.Toggle({
        element: document.getElementById("dropdown-padding1"),
        property: "padding",
        closeSize: 0,
        openSize: 20,
        prefunction: function (element, state) {
            console.log(element);
            console.log(state);
            console.log("prefunction toggle #3");
        },
        postfunction: function (element, state) {
            console.log(element);
            console.log(state);
            console.log("postfunction toggle #3");
        },
        callback: function (element, state) {
            console.log(element);
            console.log(state);
            console.log("callback toggle #3");
        },
    })
}

stopPadding = () => {
    UIKIT.animate.Stop(document.getElementById("dropdown-padding1"))
}

addMargin = () => {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-margin1"),
        property: "margin",
        endSize: 20,
        callback: function () {
            console.log("end margin add #4");
        },
    })
}

removeMargin = () => {
    UIKIT.animate.Run({
        element:
        document.getElementById("dropdown-margin1"),
        property: "margin",
        endSize: 0,
        callback: function () {
            console.log("end remove margin #4");
        },
    })
}

toggleMargin = () => {
    UIKIT.animate.Toggle({
        element:
        document.getElementById("dropdown-margin1"),
        property: "margin",
        closeSize: 0,
        openSize: 20,
        prefunction: function (element, state) {
            console.log(element);
            console.log(state);
            console.log("prefunction toggle #4");
        },
        postfunction: function (element, state) {
            console.log(element);
            console.log(state);
            console.log("postfunction toggle #4");
        },
        callback: function (element, state) {
            console.log(element);
            console.log(state);
            console.log("callback toggle #4");
        },
    })
}

stopMargin = () => {
    UIKIT.animate.Stop(document.getElementById("dropdown-margin1"))
}

animateBack = () => {
    UIKIT.animate.Run({
        element:
        document.getElementById("dropdown-position1"),
        property: "left",
        endSize: 0,
        speed: 1000,
        callback: function () {
            console.log("end position back #5");
        },
    })
}

animateForward = () => {
    UIKIT.animate.Run({
        element:
        document.getElementById("dropdown-position1"),
        property: "left",
        endSize: 100,
        speed: 1000,
        callback: function () {
            console.log("end position forward #5");
        },
    })
}

animateTogglePos = () => {
    UIKIT.animate.Toggle({
        element:
        document.getElementById("dropdown-position1"),
        property: "left",
        closeSize: 0,
        openSize: 100,
        speed: 1000,
        prefunction: function (element, state) {
            console.log(element);
            console.log(state);
            console.log("prefunction toggle #5");
        },
        postfunction: function (element, state) {
            console.log(element);
            console.log(state);
            console.log("postfunction toggle #5");
        },
        callback: function (element, state) {
            console.log(element);
            console.log(state);
            console.log("callback toggle #5");
        },
    })
}

animateStopPos = () => {
    UIKIT.animate.Stop(document.getElementById("dropdown-position1"))
}

openDropdown3 = () => {
    UIKIT.animate.Run({
        element:
        document.getElementById("dropdown-3"),
        property: "height",
        endSize: 200,
        speed: 1000,
        callback: function () {
            console.log("end open #6");
        },
    })
}

closeDropdown3 = () => {
    UIKIT.animate.Run({
        element:
        document.getElementById("dropdown-3"),
        property: "height",
        endSize: 50,
        speed: 1000,
        callback: function () {
            console.log("end close #6");
        },
    })
}

toggleDropdown3 = () => {
    UIKIT.animate.Toggle({
        element:
        document.getElementById("dropdown-3"),
        property: "height",
        openSize: 200,
        closeSize: 50,
        prefunction: function (element, state) {
            console.log(element);
            console.log(state);
            console.log("prefunction toggle #6");
        },
        postfunction: function (element, state) {
            console.log(element);
            console.log(state);
            console.log("postfunction toggle #6");
        },
        callback: function (element, state) {
            console.log(element);
            console.log(state);
            console.log("callback toggle #6");
        },
    })
}

stopDropdown3 = () => {
    UIKIT.animate.Stop(document.getElementById("dropdown-3"))
}

openDropdown4 = () => {
    UIKIT.animate.Run({
        element:
        document.getElementById("dropdown-4"),
        property: "width",
        endSize: 200,
        speed: 1000,
        callback: function () {
            console.log("end open #7");
        },
    })
}

closeDropdown4 = () => {
    UIKIT.animate.Run({
        element:
        document.getElementById("dropdown-4"),
        property: "width",
        endSize: 100,
        speed: 1000,
        callback: function () {
            console.log("end close #7");
        },
    })
}

toggleDropdown4 = () => {
    UIKIT.animate.Toggle({
        element:
        document.getElementById("dropdown-4"),
        property: "width",
        openSize: 200,
        closeSize: 100,
        prefunction: function (element, state) {
            console.log(element);
            console.log(state);
            console.log("prefunction toggle #7");
        },
        postfunction: function (element, state) {
            console.log(element);
            console.log(state);
            console.log("postfunction toggle #7");
        },
        callback: function (element, state) {
            console.log(element);
            console.log(state);
            console.log("callback toggle #7");
        },
    })
}

stopDropdown4 = () => {
    UIKIT.animate.Stop(document.getElementById("dropdown-4"))
}

openDropdown5 = () => {
    UIKIT.animate.Run({
        element:
        document.querySelectorAll(".js-vertical-dropdown-group"),
        property: "height",
        endSize: "auto",
        speed: 1000,
        callback: function () {
            console.log("end open all #8");
        },
    })
}

closeDropdown5 = () => {
    UIKIT.animate.Run({
        element:
        document.querySelectorAll(".js-vertical-dropdown-group"),
        property: "height",
        endSize: 0,
        speed: 1000,
        callback: function () {
            console.log("end close all #8");
        },
    })
}

toggleDropdown5 = () => {
    UIKIT.animate.Toggle({
        element:
        document.querySelectorAll(".js-vertical-dropdown-group"),
        property: "height",
        prefunction: function (element, state) {
            console.log(element);
            console.log(state);
            console.log("prefunction toggle #8");
        },
        postfunction: function (element, state) {
            console.log(element);
            console.log(state);
            console.log("postfunction toggle #8");
        },
        callback: function (element, state) {
            console.log(element);
            console.log(state);
            console.log("callback toggle #8");
        },
    })
}

openDropdown6 = () => {
    UIKIT.animate.Run({
        element:
        document.querySelectorAll(".js-horizontal-dropdown-group"),
        property: "width",
        endSize: "auto",
        speed: 1000,
        callback: function () {
            console.log("end open all #9");
        },
    })
}

closeDropdown6 = () => {
    UIKIT.animate.Run({
        element:
        document.querySelectorAll(".js-horizontal-dropdown-group"),
        property: "width",
        endSize: 0,
        speed: 1000,
        callback: function () {
            console.log("end close all #9");
        },
    })
}

toggleDropdown6 = () => {
    UIKIT.animate.Toggle({
        element:
        document.querySelectorAll(".js-horizontal-dropdown-group"),
        property: "width",
        prefunction: function (element, state) {
            console.log(element);
            console.log(state);
            console.log("prefunction toggle #9");
        },
        postfunction: function (element, state) {
            console.log(element);
            console.log(state);
            console.log("postfunction toggle #9");
        },
        callback: function (element, state) {
            console.log(element);
            console.log(state);
            console.log("callback toggle #9");
        },
    })
}

openEdgeCase = () => {
    UIKIT.animate.Run({
        element:
        document.getElementById("edgecase1"),
        property: "height",
        endSize: 3,
        speed: 4,
        callback: function () {
            console.log("end open #10");
        },
    })
}

closeEdgeCase = () => {
    UIKIT.animate.Run({
        element:
        document.getElementById("edgecase1"),
        property: "height",
        endSize: 0,
        speed: 4,
        callback: function () {
            console.log("end close #10");
        },
    })
}

toggleEdgeCase = () => {
    UIKIT.animate.Toggle({
        element:
        document.getElementById("edgecase1"),
        property: "height",
        openSize: 3,
        closeSize: 0,
        speed: 4,
        prefunction: function (element, state) {
            console.log(element);
            console.log(state);
            console.log("prefunction toggle #10");
        },
        postfunction: function (element, state) {
            console.log(element);
            console.log(state);
            console.log("postfunction toggle #10");
        },
        callback: function (element, state) {
            console.log(element);
            console.log(state);
            console.log("callback toggle #10");
        },
    })
}

openEdgeCase2 = () => {
    UIKIT.animate.Run({
        element:
        document.getElementById("edgecase2"),
        property: "height",
        endSize: 200,
        speed: 473,
        callback: function () {
            console.log("end open #11");
        },
    })
}

closeEdgeCase2 = () => {
    UIKIT.animate.Run({
        element:
        document.getElementById("edgecase2"),
        property: "height",
        endSize: 0,
        speed: 473,
        callback: function () {
            console.log("end close #11");
        },
    })
}

toggleEdgeCase2 = () => {
    UIKIT.animate.Toggle({
        element:
        document.getElementById("edgecase2"),
        property: "height",
        openSize: 200,
        closeSize: 0,
        speed: 473,
        prefunction: function (element, state) {
            console.log(element);
            console.log(state);
            console.log("prefunction toggle #11");
        },
        postfunction: function (element, state) {
            console.log(element);
            console.log(state);
            console.log("postfunction toggle #11");
        },
        callback: function (element, state) {
            console.log(element);
            console.log(state);
            console.log("callback toggle #11");
        },
    })
}