const editable = document.querySelector('.editable')
const editableInfo = document.querySelector('.editable-info');

editableInfo.onmouseenter = () => {
  console.log("Editable")
  document.querySelectorAll(".edit-btn").forEach(
    (edit) =>
      (edit.onclick) = (e) => {
        let text = e.target.value;

        if (e.target.classList.contains('.edit-btn')) {
          e.target.classList.replace('.edit-btn', '.save-btn');
          text.readOnly = false;
        } else {
          e.target.classList.replace('.save-btn', 'edit-btn');
          text.readOnly = true;
        }
      }
  )
}