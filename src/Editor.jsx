const React = novi.react.React;
const Icon = novi.ui.icon;
const Icons = novi.ui.icons;

const EditorItem = {
    trigger: <Icon>{Icons.ICON_BG_IMAGE}</Icon>,
    tooltip: "Replace Background Image",
    closeIcon: "submit",
    title: "Replace Background Image",
    onTriggerClick: onClick
};

export default EditorItem;


function onClick(element) {
    let ratio = element.offsetWidth / element.offsetHeight;
    novi.media.choose({onSubmit: onSubmitCrop.bind(this,element), ratio})
}

function onSubmitCrop(element, path) {
    const correctPath = path.replace(/['|"]/g, ``);

    novi.element.setAttribute(element, "data-parallax-img", correctPath);
    element.setAttribute("data-parallax-img", correctPath);

    element.style.backgroundImage = `url(${correctPath})`;

}