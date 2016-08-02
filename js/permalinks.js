// Add permalinks to the documentation headings

$(document).ready(function() {
    [".outline-2 h2", ".outline-3 h3", ".outline-4 h4", ".outline-5 h5"].forEach(function(i) {
        $(i).each(function() {
                var page_url = window.location.pathname;
                var node = $(this).attr("id");
                var full_url = page_url + "#" + node;
                $(this).contents().last().after('<span id="permalink"><a href="'
                                                + full_url + '">¶</a></span>');
        });
    });
});
