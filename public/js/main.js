/*

console.log("Hello World");

let test = '{"name": "abc","id": 21,"class": "S2123"}'

let result = JSON.parse(test)

console.log("String version of test: ", test);
console.log("JSON version of test: ", result);

let newTest = {"name": "abc","id": 21,"class": "S2123"};
console.log("JSON version of newTest: ", newTest);

let resultString = JSON.stringify(newTest);
console.log("String version of newTest: ", resultString); 

*/

async function getRecords(data){
    const fetchedData = await fetch('../data/data.json')
    const result = await fetchedData.json();
    console.log('Result: ', result);

    const navHolder = document.querySelector('#navLinks')
    
    result.mainnav.forEach(item => {
        // console.log("Inside foreach: ", item);

        // Create new list item
        let listItem = document.createElement('li')

        // Add link in the li
        listItem.innerHTML = `<a href="${item.url}">${item.text}</a>`

        // Append the new li to the menu variable
        navHolder.appendChild(listItem);
    });
}

getRecords();