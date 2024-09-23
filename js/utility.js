// const blog = document.getElementById('blog-btn').addEventListener('click', function () {
//     location.href = "./blogs.html"

// });


// Common Function 

function getInputValueById(id) {
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
    // if (!isNaN(inputValue) || inputValue < 0) {
    // }
    // else {
    //     alert('Invalid Input')
    // }

};

function getTextValueById(id) {
    const textValue = parseFloat(document.getElementById(id).innerText);
    return textValue;
}