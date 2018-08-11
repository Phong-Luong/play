#!/usr/bin/env node

// process.env.REACT_APP_ALL_PROP_TYPES = {};
if (process.argv[2] === "build") return require("./scripts/build");

require("./scripts/start");
