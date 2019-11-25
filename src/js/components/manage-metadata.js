/**
 * Register the download component by inserting the edit icon
 */
export const registerManageMetadataComponent = (item, el, labelButtonEditMetadata, onManageMetadata) => {
    const info = el.querySelector('.filepond--file-info-main'),
          editIcon = getEditIcon(labelButtonEditMetadata);

    info.prepend(editIcon);
    editIcon.addEventListener("click", () => onManageMetadata(item));
}

/**
 * Generates the download icon
 */
export const getEditIcon = (labelButtonEditMetadata) => {
    let icon = document.createElement('span');
    icon.className = 'filepond--edit-icon';
    icon.title = labelButtonEditMetadata;
    return icon;
}
