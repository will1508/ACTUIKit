var SPF = SPF || {};

(function (SPF) {

    // --------------Side navigation functions
    SPF.isSideNav = function (element) {
        var firstElemetns = element.querySelectorAll('.spf-side-nav--first');
        if (!firstElemetns) return;

        for (i = 0; i < firstElemetns.length; i++) {
            var thisElement = firstElemetns[i];
            var ariaControl = thisElement.getAttribute('aria-controls');
            var secondLevelNav = document.getElementById(ariaControl);

            if (secondLevelNav) {
                thisElement.querySelector('a').addEventListener('click', function (e) {
                    SPF.toggleClassnames(e.currentTarget);
                })
            }
        }

    }

    SPF.toggleClassnames = function (element) {
        element = element.parentElement;

        if (element.classList.contains('close')) {
            element.classList.remove('close');
            element.classList.add('open');
        } else if (element.classList.contains('open')) {
            element.classList.remove('open');
            element.classList.add('close');
        }
    }

    // End of - Side navigation functions------------

    // --------------Tabs functions
    SPF.isTabElement = function (element) {
        var tabMenuItems = element.querySelectorAll(' ul.uikit-link-list > li');
        for (i = 0; i < tabMenuItems.length; i++) {
            var thisMenuClickableItem = tabMenuItems[i].querySelector('a');
            thisMenuClickableItem.addEventListener('click', function (e) {
                SPF.toggleTab(e.currentTarget, element);
            });
        }
    }

    SPF.toggleTab = function (clickedMenuItem, tabsElement) {
        var tabMenuItems = tabsElement.querySelectorAll('ul > li');
        var tabId = clickedMenuItem.getAttribute('aria-controls');
        var tabsContentElements = tabsElement.querySelectorAll('.spf-tabs-content .spf-tab-item');
        for (i = 0; i < tabsContentElements.length; i++) {
            var thisTabElement = tabsContentElements[i];
            var menuItem = tabMenuItems.find(function (item) {
                return item.getAttribute('aria-controls') === thisTabElement.getAttribute('id');
            });
            if (thisTabElement.getAttribute('id') !== tabId) {
                thisTabElement.classList.remove('active');
                menuItem.classList.remove('active');
            } else {
                thisTabElement.classList.add('active');
            }
        }
    };
    // End of - Tabs functions------------

}(SPF));

if (typeof module !== 'undefined') {
    module.exports = SPF;
}