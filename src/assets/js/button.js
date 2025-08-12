function filter(evt,Name) {
  var i;
  var x = document.getElementsByClassName("picture-group");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none" ;
    if (Name == "all") {
        x[i].style.display = "block" ;
    };
  }
  if (Name != "all") {
    document.getElementById(Name).style.display = "block";
  }

  var tablinks = document.getElementsByClassName("filter-button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  evt.currentTarget.className += " active";
}

