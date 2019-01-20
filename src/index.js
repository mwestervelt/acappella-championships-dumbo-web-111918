document.addEventListener('DOMContentLoaded', init)

function init(){
  getAllGroups().then(iterateGroups)

}

function iterateGroups(groupsArray){
  groupsArray.forEach(group => putGroupsInTable(group))
}

function putGroupsInTable(group){
  const groupTable = document.querySelector("#table-body")
  groupTable.innerHTML += `<tr class="group-row"><td>${group.college.name}</td>
  <td>${group.name}</td>
  <td>${group.membership}</td>
  <td>${group.college.division}</td>
  <td><img class="crown" src='./assets/trophy.png' data-id='${group.id}'/></td>
  <td><button class="delete" style="text-align: center">❌</tr>`

  const crown = document.querySelectorAll(".crown")
  groupTable.addEventListener("click", delegateClicks)

}



function delegateClicks(event){
  if (event.target.classList.contains("crown")){
  let winnerCollege = event.target.parentNode.parentNode.childNodes[0].innerText;
  let winnerGroup = event.target.parentNode.parentNode.childNodes[2].innerText
  let winnerRow = event.target.parentNode.parentNode
    const winner = document.querySelector("#winner")
    winner.innerText = ""
    winner.innerText = "Winner: " + winnerCollege + " " + winnerGroup
    winnerRow.remove()
    getAllGroups()

  } else {
    event.target.classList === "delete"
    let winnerRow = event.target.parentNode.parentNode
    winnerRow.remove()
  }
}



// fetch
const groupsURL = `http://localhost:3000/a_cappella_groups`

function getAllGroups(){
  return fetch(groupsURL)
    .then(response => response.json())
}
