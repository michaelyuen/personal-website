# Personal Website

My Porfolio Website

## Directory Layout

```
app   --> the angular js application
    assets/
        css/              --> CSS files compiled from less
        font              --> Font/Icon assets
        img/              --> Image assets
        js/               --> Javascript assets
        less/             --> Less files
    components/           --> all app specific modules (servies, directives, etc.)
    views/                --> folder containing all app views (html and js)
        view1/                --> view1 view template and logic
            view1.html            --> the partial template
            view1.js              --> the controller logic
            view1_test.js         --> tests of the controller
        view2/                --> the view2 view template and logic
            view2.html            --> the partial template
            view2.js              --> the controller logic
            view2_test.js         --> tests of the controller
    app.js                --> main application module
    index.html            --> app layout file (the main html template file of the app)
```