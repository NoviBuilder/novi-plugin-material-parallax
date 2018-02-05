const React = novi.react.React;
const Icon = novi.ui.icon;
const Icons = novi.ui.icons;
const Types = novi.types;
const messages = novi.language.getDataByKey("novi-plugin-material-parallax");
const EditorItem = {
    trigger: <Icon>{Icons.ICON_BG_IMAGE}</Icon>,
    tooltip: messages.editor.tooltip,
    closeIcon: "submit",
    title: messages.editor.title,
    onTriggerClick: onClick
};

export default EditorItem;


function onClick(element) {
    novi.media.choose({onSubmit: onSubmitCrop.bind(this,element), width: element.offsetWidth, height:element.offsetHeight, type: Types.mediaImage})
}

function onSubmitCrop(element, path) {
    const correctPath = path.replace(/['|"]/g, ``);

    novi.element.setAttribute(element, "data-parallax-img", correctPath);
    element.setAttribute("data-parallax-img", correctPath);

    element.style.backgroundImage = `url(${correctPath})`;

}