// Script to ensure timeago keeps working when 
// used with mkdocs-material's instant loading feature 

if (
    typeof app !== "undefined" && 
    typeof app.document$ !== "undefined"
) {
    app.document$.subscribe(function() {
        var nodes = document.querySelectorAll('.timeago');
        var locale = nodes[0].getAttribute('locale');
        timeago.render(nodes, locale);
    })
} else {
    var nodes = document.querySelectorAll('.timeago');
    var locale = nodes[0].getAttribute('locale');
    timeago.render(nodes, locale);
}
