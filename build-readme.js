// note: this is a nodejs script file

let fs = require("fs");

let { keys } = require("./print-events-export.json");
let lines = fs.readFileSync("./README.md", "utf8").split("\n");

let newReadme = [];

let inList = false;

for (let line of lines) {
    if (line == "<!--begin:event-list-->") {
        inList = true;
        newReadme.push(line);
        newReadme = newReadme.concat(keys.map((k) => `- ${k}`));
    } else if (line == "<!--end:event-list-->") {
        inList = false;
        newReadme.push(line);
    } else if (!inList) {
        newReadme.push(line);
    }
}

fs.writeFileSync("./README.md", newReadme.join("\n"));
