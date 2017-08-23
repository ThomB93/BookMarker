function addBookmark() {
    console.log("clicked btn");
        var sitename = $("#siteNameInput").val();
        var siteurl = $("#siteUrlInput").val();
        var selectedCategory = $('#categorySelectList').find(":selected").text();
        console.log(sitename, siteurl, selectedCategory);

        if (selectedCategory == "Primary Bookmarks") {
            $("#primaryBookmarks").append("<a href='" + siteurl + "'><button type='button' class='list-group-item list-group-item-action'>" + sitename + "</button></a>");
            $("#collapseOne").addClass("show");
        }
        else if (selectedCategory == "Other Bookmarks") {
            $("#otherBookmarks").append("<a href='" + siteurl + "'><button type='button' class='list-group-item list-group-item-action'>" + sitename + "</button></a>");
            $("#collapseTwo").addClass("show");
        }
    }