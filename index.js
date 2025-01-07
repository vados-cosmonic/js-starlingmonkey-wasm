import { fileURLToPath } from "node:url";
import { readFile } from "node:fs/promises";

const STARLING = fileURLToPath(new URL("../starling-monkey.wasm", import.meta.url));
const STARLING_WEVAL = fileURLToPath(new URL("../starling-monkey.weval.wasm", import.meta.url));
const STARLING_ASYNC_OPT = fileURLToPath(new URL("../starling-monkey.async-opt.wasm", import.meta.url));
const STARLING_WEVAL_ASYNC_OPT = fileURLToPath(new URL("../starling-monkey.async-opt.weval.wasm", import.meta.url));

/** StarlingMonkey WASM build */
export const jit = async () => {
  return await readFile(STARLING);
};

/** StarlingMonkey WASM build with AoT via Weval */
export const aot = async () => {
  return await readFile(STARLING_WEVAL);
};

/** StarlingMonkey WASM build, pre-optimized for async */
export const jitAsyncOpt = async () => {
  return await readFile(STARLING_ASYNC_OPT);
};

/** StarlingMonkey WASM build with AoT via Weval, pre-optimized for async */
export const aotAsyncOpt = async () => {
  return await readFile(STARLING_WEVAL_ASYNC_OPT);
};
