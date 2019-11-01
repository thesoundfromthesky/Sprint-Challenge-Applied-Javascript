"use strict";
// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const [topics] = document.getElementsByClassName("topics");
axios.get("https://lambda-times-backend.herokuapp.com/topics").then(res => {
  console.log(res);
  res.data.topics.forEach(e => topics.appendChild(createTab(e)));
});

function createTab(insert) {
  const tab = document.createElement("div");
  tab.classList.add("tab");
  tab.textContent = insert;

  return tab;
}
