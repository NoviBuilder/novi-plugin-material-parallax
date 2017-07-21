const React = novi.react.React;
const Icon = novi.ui.icon;
const Icons = novi.ui.icons;
const modal = novi.modal; 
const acceptImages = novi.types.images;

const EditorItem = {
    trigger: <Icon>{Icons.ICON_BG_IMAGE}</Icon>,
    tooltip: "Replace Background Image",
    closeIcon: "submit",
    title: "Replace Background Image",
    onTriggerClick: onClick
};

export default EditorItem;


function onClick(element) {
    modal.fileUpload({
        path: novi.media.directory,
        accept: acceptImages,
        messages: {
            submit: "Upload Background Image",
            title: "Upload an image",
            body: 'Click on "Choose File" to upload your image.'
        },
        onSubmitClick: onSubmitClick.bind(this, element)
    })
}

function onSubmitClick(element, path) {
    const correctPath = path.replace(/['|"]/g, ``);
    // Set data-parallax-img
    novi.element.setAttribute(element, "data-parallax-img", correctPath);
    element.setAttribute("data-parallax-img", correctPath);

    // Set Background Image
    element.style.backgroundImage = `url(${correctPath})`;

}