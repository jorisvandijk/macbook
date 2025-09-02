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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = __importStar(require("vscode"));
//
const locale = 'nl';
//
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    const vscodeSpellCheckerExtension = 'streetsidesoftware.code-spell-checker';
    const configLocation = context.asAbsolutePath('./cspell-ext.json');
    const extension = vscode.extensions.getExtension(vscodeSpellCheckerExtension);
    if (extension) {
        extension.activate().then((ext) => {
            // We need to register the dictionary configuration with the Code Spell Checker Extension
            ext?.registerConfig?.(configLocation);
        });
    }
    //
    function enable(isGlobal) {
        extension &&
            extension.activate().then((ext) => {
                ext?.enableLocale?.(isGlobal, locale);
            });
    }
    function disable(isGlobal) {
        extension &&
            extension.activate().then((ext) => {
                ext?.disableLocale?.(isGlobal, locale);
            });
    }
    // Push the disposable to the context's subscriptions so that the
    // client can be deactivated on extension deactivation
    context.subscriptions.push(vscode.commands.registerCommand('cSpellExt_dutch.enable', () => enable(true)), vscode.commands.registerCommand('cSpellExt_dutch.disable', () => disable(true)), vscode.commands.registerCommand('cSpellExt_dutch.enableWorkspace', () => enable(false)), vscode.commands.registerCommand('cSpellExt_dutch.disableWorkspace', () => disable(false)), 
    // legacy commands:
    vscode.commands.registerCommand('cSpellExt_dutch.enableDutch', () => enable(true)), vscode.commands.registerCommand('cSpellExt_dutch.disableDutch', () => disable(true)), vscode.commands.registerCommand('cSpellExt_dutch.enableDutchWorkspace', () => enable(false)), vscode.commands.registerCommand('cSpellExt_dutch.disableDutchWorkspace', () => disable(false)));
    //
}
// this method is called when your extension is deactivated
function deactivate() { }
//# sourceMappingURL=extension.js.map