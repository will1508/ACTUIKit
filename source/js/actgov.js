'use strict';

if (document.querySelector('.spf-body .spf-side-nav')) {
    SPF.isSideNav(document.querySelector('.spf-body .spf-side-nav'));
}

if (document.querySelector('.spf-body .spf-tabs')) {
    SPF.isTabElement(document.querySelector('.spf-body .spf-tabs'));
}
if (document.querySelector('.spf-top-nav-mobile')) {
    SPF.isTopNav(document.querySelector('.spf-top-nav-mobile'));
}

try {
    var accordionToggles = document.querySelectorAll('.accordion-toggle');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = accordionToggles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            elem = _step.value;

            elem.addEventListener('click', function (e) {
                UIKIT.accordion.Toggle(e.target);
            });
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
} catch (e) {}

try {
    var accordionToggles = document.querySelectorAll('.accordion-toggleSlow');
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = accordionToggles[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            elem = _step2.value;

            elem.addEventListener('click', function (e) {
                UIKIT.accordion.Toggle(e.target, 1000);
            });
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
} catch (e) {}

try {
    var accordionTogglesCallback = document.querySelectorAll('.accordion-toggleCallback');
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = accordionTogglesCallback[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            elem = _step3.value;

            elem.addEventListener('click', function (e) {
                UIKIT.accordion.Toggle(e.target, undefined, {
                    onOpen: function onOpen() {
                        console.log('This function will run when an accordion opens');
                    },
                    afterOpen: function afterOpen() {
                        console.log('This function will run after an accordion has opened');
                    },
                    onClose: function onClose() {
                        console.log('This function will run when an accordion closes');
                    },
                    afterClose: function afterClose() {
                        console.log('This function will run after an accordion has closed');
                    }
                });
            });
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }
} catch (e) {}

closeDropdown1 = function closeDropdown1() {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-1"),
        property: 'height',
        endSize: 0,
        speed: 500,
        callback: function callback() {
            console.log("end close #1");
        }
    });
};

openDropdown1 = function openDropdown1() {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-1"),
        property: "height",
        endSize: "auto",
        speed: 500,
        callback: function callback() {
            console.log("end open #1");
        }
    });
};

toggleDropdown1 = function toggleDropdown1() {
    UIKIT.animate.Toggle({
        element: document.getElementById("dropdown-1"),
        property: "height",
        speed: 500,
        prefunction: function prefunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("prefunction toggle #1");
        },
        postfunction: function postfunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("postfunction toggle #1");
        },
        callback: function callback(element, state) {
            console.log(element);
            console.log(state);
            console.log("callback toggle #1");
        }
    });
};

stopDropdown1 = function stopDropdown1() {
    UIKIT.animate.Stop(document.getElementById("dropdown-1"));
};

closeDropdown2 = function closeDropdown2() {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-2"),
        property: "width",
        endSize: 0,
        callback: function callback() {
            console.log("end close #2");
        }
    });
};

openDropdown2 = function openDropdown2() {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-2"),
        property: "width",
        endSize: "auto",
        callback: function callback() {
            console.log("end open #2");
        }
    });
};

toggleDropdown2 = function toggleDropdown2() {
    UIKIT.animate.Toggle({
        element: document.getElementById("dropdown-2"),
        property: "width",
        prefunction: function prefunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("prefunction toggle #2");
        },
        postfunction: function postfunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("postfunction toggle #2");
        },
        callback: function callback(element, state) {
            console.log(element);
            console.log(state);
            console.log("callback toggle #2");
        }
    });
};

stopDropdown2 = function stopDropdown2() {
    UIKIT.animate.Stop(document.getElementById("dropdown-2"));
};

removePadding = function removePadding() {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-padding1"),
        property: "padding",
        endSize: 0,
        callback: function callback() {
            console.log("end removing padding #3");
        }
    });
};

addPadding = function addPadding() {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-padding1"),
        property: "padding",
        endSize: 20,
        callback: function callback() {
            console.log("end add padding #3");
        }
    });
};

togglePadding = function togglePadding() {
    UIKIT.animate.Toggle({
        element: document.getElementById("dropdown-padding1"),
        property: "padding",
        closeSize: 0,
        openSize: 20,
        prefunction: function prefunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("prefunction toggle #3");
        },
        postfunction: function postfunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("postfunction toggle #3");
        },
        callback: function callback(element, state) {
            console.log(element);
            console.log(state);
            console.log("callback toggle #3");
        }
    });
};

stopPadding = function stopPadding() {
    UIKIT.animate.Stop(document.getElementById("dropdown-padding1"));
};

addMargin = function addMargin() {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-margin1"),
        property: "margin",
        endSize: 20,
        callback: function callback() {
            console.log("end margin add #4");
        }
    });
};

removeMargin = function removeMargin() {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-margin1"),
        property: "margin",
        endSize: 0,
        callback: function callback() {
            console.log("end remove margin #4");
        }
    });
};

toggleMargin = function toggleMargin() {
    UIKIT.animate.Toggle({
        element: document.getElementById("dropdown-margin1"),
        property: "margin",
        closeSize: 0,
        openSize: 20,
        prefunction: function prefunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("prefunction toggle #4");
        },
        postfunction: function postfunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("postfunction toggle #4");
        },
        callback: function callback(element, state) {
            console.log(element);
            console.log(state);
            console.log("callback toggle #4");
        }
    });
};

stopMargin = function stopMargin() {
    UIKIT.animate.Stop(document.getElementById("dropdown-margin1"));
};

animateBack = function animateBack() {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-position1"),
        property: "left",
        endSize: 0,
        speed: 1000,
        callback: function callback() {
            console.log("end position back #5");
        }
    });
};

animateForward = function animateForward() {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-position1"),
        property: "left",
        endSize: 100,
        speed: 1000,
        callback: function callback() {
            console.log("end position forward #5");
        }
    });
};

animateTogglePos = function animateTogglePos() {
    UIKIT.animate.Toggle({
        element: document.getElementById("dropdown-position1"),
        property: "left",
        closeSize: 0,
        openSize: 100,
        speed: 1000,
        prefunction: function prefunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("prefunction toggle #5");
        },
        postfunction: function postfunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("postfunction toggle #5");
        },
        callback: function callback(element, state) {
            console.log(element);
            console.log(state);
            console.log("callback toggle #5");
        }
    });
};

animateStopPos = function animateStopPos() {
    UIKIT.animate.Stop(document.getElementById("dropdown-position1"));
};

openDropdown3 = function openDropdown3() {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-3"),
        property: "height",
        endSize: 200,
        speed: 1000,
        callback: function callback() {
            console.log("end open #6");
        }
    });
};

closeDropdown3 = function closeDropdown3() {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-3"),
        property: "height",
        endSize: 50,
        speed: 1000,
        callback: function callback() {
            console.log("end close #6");
        }
    });
};

toggleDropdown3 = function toggleDropdown3() {
    UIKIT.animate.Toggle({
        element: document.getElementById("dropdown-3"),
        property: "height",
        openSize: 200,
        closeSize: 50,
        prefunction: function prefunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("prefunction toggle #6");
        },
        postfunction: function postfunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("postfunction toggle #6");
        },
        callback: function callback(element, state) {
            console.log(element);
            console.log(state);
            console.log("callback toggle #6");
        }
    });
};

stopDropdown3 = function stopDropdown3() {
    UIKIT.animate.Stop(document.getElementById("dropdown-3"));
};

openDropdown4 = function openDropdown4() {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-4"),
        property: "width",
        endSize: 200,
        speed: 1000,
        callback: function callback() {
            console.log("end open #7");
        }
    });
};

closeDropdown4 = function closeDropdown4() {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-4"),
        property: "width",
        endSize: 100,
        speed: 1000,
        callback: function callback() {
            console.log("end close #7");
        }
    });
};

toggleDropdown4 = function toggleDropdown4() {
    UIKIT.animate.Toggle({
        element: document.getElementById("dropdown-4"),
        property: "width",
        openSize: 200,
        closeSize: 100,
        prefunction: function prefunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("prefunction toggle #7");
        },
        postfunction: function postfunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("postfunction toggle #7");
        },
        callback: function callback(element, state) {
            console.log(element);
            console.log(state);
            console.log("callback toggle #7");
        }
    });
};

stopDropdown4 = function stopDropdown4() {
    UIKIT.animate.Stop(document.getElementById("dropdown-4"));
};

openDropdown5 = function openDropdown5() {
    UIKIT.animate.Run({
        element: document.querySelectorAll(".js-vertical-dropdown-group"),
        property: "height",
        endSize: "auto",
        speed: 1000,
        callback: function callback() {
            console.log("end open all #8");
        }
    });
};

closeDropdown5 = function closeDropdown5() {
    UIKIT.animate.Run({
        element: document.querySelectorAll(".js-vertical-dropdown-group"),
        property: "height",
        endSize: 0,
        speed: 1000,
        callback: function callback() {
            console.log("end close all #8");
        }
    });
};

toggleDropdown5 = function toggleDropdown5() {
    UIKIT.animate.Toggle({
        element: document.querySelectorAll(".js-vertical-dropdown-group"),
        property: "height",
        prefunction: function prefunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("prefunction toggle #8");
        },
        postfunction: function postfunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("postfunction toggle #8");
        },
        callback: function callback(element, state) {
            console.log(element);
            console.log(state);
            console.log("callback toggle #8");
        }
    });
};

openDropdown6 = function openDropdown6() {
    UIKIT.animate.Run({
        element: document.querySelectorAll(".js-horizontal-dropdown-group"),
        property: "width",
        endSize: "auto",
        speed: 1000,
        callback: function callback() {
            console.log("end open all #9");
        }
    });
};

closeDropdown6 = function closeDropdown6() {
    UIKIT.animate.Run({
        element: document.querySelectorAll(".js-horizontal-dropdown-group"),
        property: "width",
        endSize: 0,
        speed: 1000,
        callback: function callback() {
            console.log("end close all #9");
        }
    });
};

toggleDropdown6 = function toggleDropdown6() {
    UIKIT.animate.Toggle({
        element: document.querySelectorAll(".js-horizontal-dropdown-group"),
        property: "width",
        prefunction: function prefunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("prefunction toggle #9");
        },
        postfunction: function postfunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("postfunction toggle #9");
        },
        callback: function callback(element, state) {
            console.log(element);
            console.log(state);
            console.log("callback toggle #9");
        }
    });
};

openEdgeCase = function openEdgeCase() {
    UIKIT.animate.Run({
        element: document.getElementById("edgecase1"),
        property: "height",
        endSize: 3,
        speed: 4,
        callback: function callback() {
            console.log("end open #10");
        }
    });
};

closeEdgeCase = function closeEdgeCase() {
    UIKIT.animate.Run({
        element: document.getElementById("edgecase1"),
        property: "height",
        endSize: 0,
        speed: 4,
        callback: function callback() {
            console.log("end close #10");
        }
    });
};

toggleEdgeCase = function toggleEdgeCase() {
    UIKIT.animate.Toggle({
        element: document.getElementById("edgecase1"),
        property: "height",
        openSize: 3,
        closeSize: 0,
        speed: 4,
        prefunction: function prefunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("prefunction toggle #10");
        },
        postfunction: function postfunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("postfunction toggle #10");
        },
        callback: function callback(element, state) {
            console.log(element);
            console.log(state);
            console.log("callback toggle #10");
        }
    });
};

openEdgeCase2 = function openEdgeCase2() {
    UIKIT.animate.Run({
        element: document.getElementById("edgecase2"),
        property: "height",
        endSize: 200,
        speed: 473,
        callback: function callback() {
            console.log("end open #11");
        }
    });
};

closeEdgeCase2 = function closeEdgeCase2() {
    UIKIT.animate.Run({
        element: document.getElementById("edgecase2"),
        property: "height",
        endSize: 0,
        speed: 473,
        callback: function callback() {
            console.log("end close #11");
        }
    });
};

toggleEdgeCase2 = function toggleEdgeCase2() {
    UIKIT.animate.Toggle({
        element: document.getElementById("edgecase2"),
        property: "height",
        openSize: 200,
        closeSize: 0,
        speed: 473,
        prefunction: function prefunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("prefunction toggle #11");
        },
        postfunction: function postfunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("postfunction toggle #11");
        },
        callback: function callback(element, state) {
            console.log(element);
            console.log(state);
            console.log("callback toggle #11");
        }
    });
};
//# sourceMappingURL=actgov.js.map
