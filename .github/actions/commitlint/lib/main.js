"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const github_1 = require("@actions/github");
const exec = __importStar(require("@actions/exec"));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(' OH SHAZZZZAM @@@@@######################**********************');
            const GITHUB_TOKEN = core.getInput('githubToken');
            console.log('INPUTTTTS');
            console.log(GITHUB_TOKEN);
            const github = (0, github_1.getOctokit)(GITHUB_TOKEN);
            const pr = github_1.context.payload.pull_request;
            console.log('CONTEXT', github_1.context);
            if (!pr) {
                core.setFailed('This is not a PR');
                return;
            }
            const prParams = Object.assign(Object.assign({}, github_1.context.repo), { pull_number: pr.number });
            const commits = yield github.rest.pulls.listCommits(prParams);
            console.log('HERE BE COMMITS');
            console.log(commits);
            console.log('GETTTING PWD OUTPUT');
            console.log(yield exec.getExecOutput('pwd'));
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('ERRRRRRORRRR');
                core.setFailed(error.message);
            }
        }
    });
}
run();
