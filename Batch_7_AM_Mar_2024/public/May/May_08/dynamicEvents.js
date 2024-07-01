document.addEventListener("DOMContentLoaded", () => {
    // only after the complete drom structure gets crated
    document.querySelector("#container").addEventListener("click", () => {
        console.log("Click happend");
    });
})





var showMsg = () => {
    console.log("from span click");
}