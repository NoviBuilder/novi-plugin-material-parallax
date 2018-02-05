const React = novi.react.React;
import * as ExcerptFunction from "./ExcerptFunction";
import Editor from "./Editor";
import Settings from "./Settings";
const Language = novi.language;
const Plugin = {
    name: "novi-plugin-material-parallax",
    title: "Novi Material Parallax Plugin",
    description: "Novi Material Parallax Plugin description",
    version: "1.0.4",
    dependencies: {
        novi: "0.9.0"
    },
    defaults: {
        querySelector: '.parallax-container'
    },
    ui: {
        editor: [Editor],
        settings: <Settings />,
    },
    excerpt : ExcerptFunction.isValidParallax,
    onLanguageChange: onLanguageChange
};
function onLanguageChange(plugin){
    let messages = Language.getDataByKey("novi-plugin-material-parallax");
    plugin.ui.editor[0].title = messages.editor.title;
    plugin.ui.editor[0].tooltip = messages.editor.tooltip;
    return plugin;
}
novi.plugins.register(Plugin);