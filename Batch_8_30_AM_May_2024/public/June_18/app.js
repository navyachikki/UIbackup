  var spanTag = document.createElement("span");
            spanTag.innerText = 'NEw Content'
            spanTag.setAttribute("class", "childelement");
            spanTag.addEventListener("click", () => {
                alert("test")
            })

              //click, mouseover, foucs, change, 
            document.addEventListener("DOMContentLoaded", () => {
              document.querySelector("#container").append(spanTag);



            })
            