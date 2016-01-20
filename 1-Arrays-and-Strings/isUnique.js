//Input (String)
//Output (Bool) is string composed of unique letters

//version with no other datastructures
//slower since it uses indexOf (technically n^2)
String.prototype.isUnique = function () {
  var unique = true;
  for (var i = 0; i < this.length; i++) {
    if (this.indexOf(this[i]) !== this.lastIndexOf(this[i])) {
      unique = false;
    }
  }
  return unique;
}

//linear version using objects
String.prototype.isUniqueWithObj = function () {
  var unique = true;
  var obj = {};
  for (var i = 0; i < this.length; i++) {
    if(obj[this[i]] !== undefined) {
      unique = false;
    } else {
      obj[this[i]] = true;
    }
  }
  return unique
}
