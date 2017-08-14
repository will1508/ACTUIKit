try {
    var accordionToggles = document.querySelectorAll('.accordion-toggle');
    for (i = 0; i < accordionToggles.length; i++) {
        var elem=accordionToggles[i];
        elem.addEventListener('click', (e) => {
            UIKIT.accordion.Toggle(e.target);
        });
    }
} catch (e) {
    console.log(e) 
}

try {
    var accordionToggles = document.querySelectorAll('.accordion-toggleSlow');
    for (i = 0; i < accordionToggles.length; i++) {
        var elem=accordionToggles[i];
        elem.addEventListener('click', (e) => {
            UIKIT.accordion.Toggle(e.target, 1000);
        });
    }
} catch (e) { }

try {
    var accordionTogglesCallback = document.querySelectorAll('.accordion-toggleCallback');
    for (i = 0; i < accordionTogglesCallback.length; i++) {
        var elem=accordionTogglesCallback[i];
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
