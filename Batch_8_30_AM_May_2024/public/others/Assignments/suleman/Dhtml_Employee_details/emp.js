var employeeDetails = [
  {
    name: "Raj",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.9iP5hfylm0iGQPmS8s1cOgHaE8&pid=Api&P=0&h=180",
    basicsal: "450000rs",
    gender: "Male",
    department: "It",
  },
  {
    name: "Rajni",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.FcmvMj1OjD4QTauYesb3aAHaFj&pid=Api&P=0&h=180",
    basicsal: "640000rs",
    gender: "Female",
    department: "Executive",
  },
  {
    name: "Rajesh",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.ocv4jX7yJmuAi0yAZWI1MQHaE8&pid=Api&P=0&h=180",
    basicsal: "900000rs",
    gender: "Male",
    department: "It",
  },
  {
    name: "John Doe",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.Jw1ij013jxt8j7XConLE_gHaE7&pid=Api&P=0&h=180",
    basicsal: "540000rs",
    gender: "Male",
    department: "Hr",
  },
  {
    name: "Doe John",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.9iP5hfylm0iGQPmS8s1cOgHaE8&pid=Api&P=0&h=180",
    basicsal: "450000rs",
    gender: "Male",
    department: "It",
  },
]

var loadEmployeeDetails = (eDetails) => {
  var mainLi = document.createElement("li")
  var ulTag = document.createElement("ul")
  ulTag.setAttribute("class", "edetails")

  var li2 = document.createElement("li")
  var img = document.createElement("img")
  img.setAttribute("src", eDetails.image)
  li2.append(img)
  ulTag.append(li2)

  var li1 = document.createElement("li")
  li1.innerText = "Name: " + eDetails.name
  ulTag.append(li1)

  var li3 = document.createElement("li")
  li3.innerText = "Salary: " + eDetails.basicsal
  ulTag.append(li3)

  var li4 = document.createElement("li")
  li4.innerText = "Gender: " + eDetails.gender
  ulTag.append(li4)

  var li5 = document.createElement("li")
  li5.innerText = "Department: " + eDetails.department
  ulTag.append(li5)

  mainLi.append(ulTag)

  document.querySelector(".mainEmployeeDetails").append(mainLi)
}

for (var i = 0; i < employeeDetails.length; i++) {
  loadEmployeeDetails(employeeDetails[i])
}
