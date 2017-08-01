var SPF = SPF || {};

(function (SPF) {
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
}(SPF));

if (typeof module !== 'undefined') {
    module.exports = SPF;
}