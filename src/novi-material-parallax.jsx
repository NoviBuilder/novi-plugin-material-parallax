const React = novi.react.React;
import * as ExcerptFunction from "./ExcerptFunction";
import Editor from "./Editor";
import Settings from "./Settings";

const Plugin = {
    name: "novi-plugin-material-parallax",
    title: "Novi Material Parallax Plugin",
    description: "Novi Material Parallax Plugin description",
    version: "1.0.1",
    dependencies: {
    },
    defaults: {
        querySelector: '.parallax-container'
    },
    ui: {
        editor: [Editor],
        settings: <Settings />,
    },
    excerpt : ExcerptFunction.isValidParallax
};

novi.plugins.register(Plugin);