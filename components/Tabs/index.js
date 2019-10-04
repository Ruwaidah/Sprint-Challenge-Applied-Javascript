// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let divTopics = document.querySelector(".topics"); // select the div container for the topics 


axios.get("https://lambda-times-backend.herokuapp.com/topics")

    .then(response => {
        let topicsArray = response.data.topics;
        let length = topicsArray.length;
        topicsArray.forEach(item => {
            divTopics.appendChild(topics(item));
        })
        

    });




//  Create a Function to make a div for each topic and return it with the data inside 

function topics(item) {
    const tab = document.createElement("div");
        tab.classList.add("tab", item);
        tab.textContent = item;
        console.log(tab)
    return tab
            
    }