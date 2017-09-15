# Notes

## Todo
- extend base styles to form fields n buttons


## Process i followed to create these sites
- `npm run patternlab:build -- --theme=actgov` - this generates the files needed into the `dist` folder
- Created the html file and imported the CSS
- wrapped the body in the classes `spf-body uikit-body uikit-grid`
- created a row for the header, for the main content and for the footer(s)
- used the col-md-1 / col-md-10 / col-md-1 to give the page gutters
- within the col-md-10 section another row is used to then split up the content into columns again
- added patternlab elements as needed to create the page, and added images where needed


## Creating the Jobs Page

## Changed the `Link Text Sidebar` HTML

Changed from using `<p>` to separate text lines to <br> as there was too much margin below each `<p>`
```
<div class="spf-link-text-sidebar">
    <h2>Latest Jobs</h2>
    <div class="spf-link-text-block">
        <h3>
            <a href="#" title="title" class="">
                Title
            </a>
        </h3>
        <p>
            $79,824 - $91,356
            <br> 
            Full-time Permanent
            <br> 
            Closes: 05 October 2017
        </p>
    </div>
</div>
```

## Fixed the Banner background from overflowing
```
.spf-body .spf-text-banner.spf-text-banner--gradiant {
    width: auto;
    display: block;
}
```

## Fixed the text sitting next to the Article Card
```
.spf-body .spf-article-card>.spf-article-card--title {
    width: 60%;
    font-size: 0.7em;
}
```

## Fixed Search Box overlay issue
```
.spf-body .spf-input-group>.spf-group-element-wrapper input[type=text] {
    display: block;
}

#search-box{
    height: 16px;
}
```

## Fixing the base styling

### Text Inputs
Couldn't style inputs generically as they alway have a label attached to them so not styling the input doesn't remove the need to style the label.

Buttons couldn't be applied with a generic styling as not all buttons used the base class `uikit-btn`, like the button styled links