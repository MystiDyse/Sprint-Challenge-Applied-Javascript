// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// const tab = document.getElementByClassName(".tab")

// const axios = require('axios')

// const topicsUrl= 'https://lambda-times-backend.herokuapp.com';

// const getTopics = async () => {
//   try {
//     const res = await axios.get(`${topicsUrl}/topics`);

//     const topics = res.data;

//     console.log(topics);

//     return topics;
//   } catch (e) {
//     console.error(e);
//   }
// };

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(res => {
        const topics = res.data.topics
       topics.map(topic => {
           const topicDiv = document.querySelector('.topics')
        topicDiv.appendChild(newTab(topic))
       })
    } 
    )
    
    .catch(err => console.log(err))

function newTab(tab) {
    // //    <div class="tab">topic here</div>
    const divTab = document.createElement('div')
    divTab.classList.add('tab')
    divTab.textContent = tab

    return divTab
}

// const tabContainer = newTab()
// document.querySelector('.topics').appendChild(tabContainer)