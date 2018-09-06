#!/usr/bin/env node

if (process.argv[2] === "build") return require("./scripts/build");

//!!CHANGED!!
if (process.argv[2] === "test") return require("./scripts/test");

require("./scripts/start");
