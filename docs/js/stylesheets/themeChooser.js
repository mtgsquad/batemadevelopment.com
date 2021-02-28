function changeTheme() {
  var selTheme = document.getElementById("selTheme");
  var theme = selTheme.value;

  if (theme == "Light") {
    document.body.style.backgroundColor = "white";
    document.header.style.backgroundColor = "lightgray";
    document.header.style.color = "rgb(217, 217, 217)";
    document.footer.style.backgroundColor = "lightgray";
    document.footer.style.color = "rgb(217, 217, 217)";
    document.left.style.backgroundColor = "rgb(153, 153, 153)";
    document.right.style.backgroundColor = "rgb(179, 179, 179)";
    document.topnav.ul.style.backgroundColor = "rgb(102, 102, 102)";
    document.li.a.hover.not.active.style.backgroundColor = "rgb(217, 217, 217)";
    document.li.a.hover.not.active.style.color = "darkgray";
    document.dropdown.hover.not.active.dropbtn.style.backgroundColor = "rgb(217, 217, 217)";
    document.dropdown.hover.not.active.dropbtn.style.color = "darkgray";
    document.topnav.dropdown.content.a.hover.style.backgroundColor = "rgb(140, 140, 140)";
    document.topnav.dropdown.content.a.hover.style.color = "rgb(37, 37, 37)";
    document.topnav.active.style.backgroundColor = "rgb(37, 37, 37)";
    document.topnav.active.style.color = "rgb(99, 99 ,99)";
  } else if (theme == "Dark") {
    document.body.style.backgroundColor = "rgb(80, 77, 77)";
    document.header.style.backgroundColor = "black";
    document.header.style.color = "rgb(112, 103, 103)";
    document.footer.style.backgroundColor = "black";
    document.footer.style.color = "rgb(112, 103, 103)";
    document.left.style.backgroundColor = "rgb(97, 97, 100)";
    document.right.style.backgroundColor = "rgb(61, 61, 63)";
    document.topnav.ul.style.backgroundColor = "rgb(139, 137, 133)";
    document.li.a.hover.not.active.style.backgroundColor = "rgb(34, 34, 34)";
    document.li.a.hover.not.active.style.color = "rgb(115, 116, 115)";
    document.dropdown.hover.not.active.dropbtn.style.backgroundColor = "rgb(34, 34, 34)";
    document.dropdown.hover.not.active.dropbtn.style.color = "rgb(115, 116, 115)";
    document.topnav.dropdown.content.a.hover.style.backgroundColor = "rgb(99, 97, 99)";
    document.topnav.dropdown.content.a.hover.style.color = "rgb(37, 37, 37)";
    document.topnav.active.style.backgroundColor = "rgb(37, 37, 37)";
    document.topnav.active.style.color = "rgb(99, 99 ,99)";
  }
}
