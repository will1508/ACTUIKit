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
