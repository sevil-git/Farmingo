function viewDetails() {
  var Details = document.getElementById("Basic-Detail");
  var upload = document.getElementById("Documents");
  if (Details.style.display == "none") {
    Details.style.display = "block";
    upload.style.display = "none";
  }
}

function viewDocument() {
  var upload = document.getElementById("Documents");
  var Details = document.getElementById("Basic-Detail");

  if (upload.style.display == "none") {
    upload.style.display = "block";
    Details.style.display = "none";
  }
}
