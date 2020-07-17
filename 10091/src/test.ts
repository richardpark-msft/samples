// this is coming from core-http (inlined for simplicity)
/// <reference types="node" />

// Shouldn't this resolve the setTimeout() definition from "DOM"
// since I'm "ignoring" all types via tsconfig.json?
const t: number = setTimeout(() => { }, 1000);
console.log(t);
