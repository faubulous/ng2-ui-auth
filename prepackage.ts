// Source: https://newbedev.com/how-to-npm-publish-specific-folder-but-as-package-root
import * as fs from "fs";

// DO NOT DELETE THIS FILE
// This file is used by build system to build a clean npm package with the compiled 
// js files in the root of the package. It will not be included in the npm package.

function main() {
    const source = fs.readFileSync(__dirname + "/package.json").toString('utf-8');
    const sourceObj = JSON.parse(source);
    sourceObj.scripts = {};
    sourceObj.devDependencies = {};

    if (sourceObj.main.startsWith("dist/")) {
        sourceObj.main = sourceObj.main.slice(5);
    }

    const targetdir = __dirname + "/dist/ng2-ui-auth";

    fs.writeFileSync(targetdir + "/package.json", Buffer.from(JSON.stringify(sourceObj, null, 2), "utf-8") );
    fs.writeFileSync(targetdir + "/version.txt", Buffer.from(sourceObj.version, "utf-8") );
}

main();