#!/usr/bin/env node

if (process.argv[2] === "build") return require("./scripts/build");

require("./scripts/start");
