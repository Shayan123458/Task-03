var personName = "Shayan Ahmed";
//lower Case
console.log("lowercase:", personName.toLowerCase());
//upper case
console.log("upper case:", personName.toLocaleUpperCase());
//Title case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
