const buttons = document.getElementsByTagName("button");
const addIcon = "/assets/add-outline.svg";
const removeIcon = "/assets/remove-outline.svg";

for (var i = 0; i < buttons.length; i++) {
    const item = document.getElementById(`item-${i+1}`);
    const icon = document.getElementById(`img-${i+1}`);

    buttons.item(i).addEventListener("click", () => {
        if(item.classList.contains("hidden")) {
            item.classList.replace("hidden", "flex")
            icon.setAttribute("src", removeIcon)
        } else {
            item.classList.replace("flex", "hidden") 
            icon.setAttribute("src", addIcon)  
        }
    })
}