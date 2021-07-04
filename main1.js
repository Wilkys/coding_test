let data = [
  "   + -- + - + -   ",
  "   + --- + - +   ",
  "   + -- + - + -   ",
  "   + - + - + - +   ",
];

for (var s in data) {
  console.log(s);
}

let s = "";

for (var s of data) {
  console.log(s.replace(/ /g, "").replace(/\+/g, "1").replace(/\-/g, "0"));
  console.log(
    parseInt(s.replace(/ /g, "").replace(/\+/g, "1").replace(/\-/g, "0"), 2)
  );
  console.log(
    (s += String.fromCharCode(
      parseInt(s.replace(/ /g, "").replace(/\+/g, "1").replace(/\-/g, "0"), 2)
    ))
  );
}
