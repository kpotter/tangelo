@LOADER_PREAMBLE@

// Grab the script tag this script is contained in.
tangelo.scripts = document.getElementsByTagName("script");
tangelo.point = tangelo.scripts[tangelo.scripts.length - 1];

// Grab a reference to this script element.
tangelo.me = tangelo.whoami();

// Load the dependencies of Tangelo, followed by Tangelo itself.
tangelo.newScript("/js/loader/load-jquery.js");
tangelo.newScript("/js/loader/load-d3.js");
tangelo.newScript("/js/lib/bootstrap.js");
tangelo.newScript("/js/tangelo.js");

// Remove this script element from the DOM.
tangelo.kill(tangelo.me);
