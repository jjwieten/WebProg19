function titleChange(pageTitle) {
    if (pageTitle === 'Assignment 1') {
        document.title = "Webprogramming (LIX019P05) - Index"
    }
    else if (pageTitle === "Second Page") {
        document.title = "Webprogramming (LIX019P05) - Second"
    }
}
function addArticle(pageTitle) {
    if (pageTitle === 'Assignment 1') {
        var content = document.getElementsByClassName('container')[0];
        content.innerHTML = '<div class="row"><div class="col-md-12"><article><h1>This is my first article</h1>' +
            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget eros ultrices, dapibus lacus ultrices, ' +
            'ultrices tortor. Nam tincidunt blandit neque, at ornare sapien ultricies ut. Integer eget ultricies velit. ' +
            'Cras eu tellus ex. Integer bibendum nisi neque, sed auctor odio blandit sit amet. Aenean augue tellus, ' +
            'tincidunt vel commodo bibendum, rutrum nec augue. Donec pulvinar sem in purus congue sodales. Nam magna urna, ' +
            'maximus ut eros vel, rutrum semper sem. Duis a efficitur mauris. Nunc a aliquam nisi, vel iaculis justo. ' +
            'Donec lacus nulla, sollicitudin vitae lectus vel, tempus vestibulum ipsum. In dignissim consequat pellentesque. ' +
            'Pellentesque eget eleifend velit. Aenean aliquam auctor nibh vitae tristique. ' +
            'Nulla facilisi.</p></article><article><h1>This is a second paragraph</h1><p>' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget eros ultrices, dapibus lacus ultrices, ' +
            'ultrices tortor. Nam tincidunt blandit neque, at ornare sapien ultricies ut. Integer eget ultricies velit. ' +
            'Cras eu tellus ex. Integer bibendum nisi neque, sed auctor odio blandit sit amet. Aenean augue tellus, ' +
            'tincidunt vel commodo bibendum, rutrum nec augue. Donec pulvinar sem in purus congue sodales. Nam magna urna, ' +
            'maximus ut eros vel, rutrum semper sem. Duis a efficitur mauris. Nunc a aliquam nisi, vel iaculis justo. ' +
            'Donec lacus nulla, sollicitudin vitae lectus vel, tempus vestibulum ipsum. In dignissim consequat pellentesque. ' +
            'Pellentesque eget eleifend velit. Aenean aliquam auctor nibh vitae tristique. ' +
            'Nulla facilisi.</p></article></div></div>';
    }
}
function changeListElement() {
    var footerList = document.getElementById('links');
    footerList.firstElementChild.lastElementChild.previousSibling.previousSibling.firstChild.href='https://google.com';
}
function addTargetAtt() {
    var footerList = document.getElementById('links');
    footerList.firstElementChild.lastElementChild.previousSibling.previousSibling.firstChild.target='_blank';
}
function redNavItem() {
    var navitems = document.getElementsByClassName('nav-item');
    for (var i = 0; i < navitems.length; i++) {
        navitems[i].style.color = 'red'
    }
}
function addSidebar(pageTitle) {
    if (pageTitle === 'Second Page') {
        var content = document.getElementsByClassName('container')[0];
        content.innerHTML= '<div class="col-md-8"><article><h1>Second page</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
            'In eget eros ultrices, dapibus lacus ultrices, ultrices tortor. Nam tincidunt blandit neque, at ornare sapien ultricies ut. ' +
            'Integer eget ultricies velit. Cras eu tellus ex. Integer bibendum nisi neque, sed auctor odio blandit sit amet. ' +
            'Aenean augue tellus, tincidunt vel commodo bibendum, rutrum nec augue. Donec pulvinar sem in purus congue sodales. ' +
            'Nam magna urna, maximus ut eros vel, rutrum semper sem. Duis a efficitur mauris. Nunc a aliquam nisi, vel iaculis justo. ' +
            'Donec lacus nulla, sollicitudin vitae lectus vel, tempus vestibulum ipsum. In dignissim consequat pellentesque. ' +
            'Pellentesque eget eleifend velit. Aenean aliquam auctor nibh vitae tristique. Nulla facilisi.</p> </article><article> ' +
            '<h1>Article 2</h1> ' +
            '<p>Etiam ultrices felis in convallis laoreet. Cras gravida enim ut scelerisque vulputate. Nam scelerisque eros vitae nibh facilisis,' +
            'a accumsan ipsum ornare. Phasellus eu justo sit amet odio tempor iaculis vel nec eros. Cras sed sem vel mauris luctus condimentum a eget justo. ' +
            'In elit mi, finibus non pulvinar in, suscipit eget mi. Morbi interdum lorem mauris, sed iaculis ex vulputate id.' +
            'Suspendisse rhoncus magna vel metus placerat tincidunt. Nulla nec tincidunt orci, vitae ornare mauris. Cras tincidunt' +
            'rutrum arcu eget ultrices. Nulla vitae lacinia dui. Nullam bibendum ultrices elit. Donec sollicitudin ultricies' +
            'tortor sit amet pharetra. Curabitur dignissim mi id sodales faucibus. In efficitur massa malesuada turpis finibus,' +
            'eget finibus arcu molestie. Etiam mollis nec ipsum id accumsan.</p>' +
            '<h2>Subheading</h2> ' +
            '<p>Morbi maximus, arcu at cursus gravida, urna diam posuere dui, non scelerisque ex ipsum non urna. Duis sed magna egestas, rutrum nisi vel,' +
            'elementum sapien. Nunc ac quam ac mauris interdum hendrerit. Mauris rutrum malesuada porta. Nulla tempor nisi sit amet ultrices scelerisque.' +
            'In imperdiet luctus tortor, sed pulvinar ligula tempor ut. Ut porta diam non orci fermentum eleifend. Quisque sollicitudin urna ut aliquam porta.' +
            'Donec vitae varius nulla, et sodales massa. Donec sed lacus luctus, bibendum neque in, egestas ligula.</p> </article></div> ' +
            '<div class="col-md-4"><h1>Sidebar</h1></div>'
    }
}
function main() {
    var pageTitle = document.getElementsByClassName('nav-item active')[0].firstElementChild.textContent;
    titleChange(pageTitle);
    addArticle(pageTitle);
    addSidebar(pageTitle);
    changeListElement();
    addTargetAtt();
    redNavItem();
}
main();