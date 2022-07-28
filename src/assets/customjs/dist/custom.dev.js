"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasClass = hasClass;
exports.GetReverseSort = GetReverseSort;
exports.GetSortOrder = GetSortOrder;
exports.activeloader = activeloader;
exports.removeloader = removeloader;

function hasClass(element, className) {
  return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}

function GetReverseSort(prop) {
  console.log("into getReverse");
  return function (a, b) {
    if (a[prop] < b[prop]) {
      return 1;
    } else if (a[prop] > b[prop]) {
      return -1;
    }

    return 0;
  };
}

function GetSortOrder(prop) {
  return function (a, b) {
    if (a[prop] > b[prop]) {
      return 1;
    } else if (a[prop] < b[prop]) {
      return -1;
    }

    return 0;
  };
}

function activeloader() {
  var maindiv = document.getElementById("loadingsection");
  maindiv.style.display = "block";
}

function removeloader() {
  var maindiv = document.getElementById("loadingsection");
  maindiv.style.display = "none";
}
//# sourceMappingURL=custom.dev.js.map
