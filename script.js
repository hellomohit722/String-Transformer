const input = document.querySelector(".input-container");
const Lower_case = document.querySelector(".Lower-Case");
const Upper_case = document.querySelector(".Upper-Case");
const Camel_case = document.querySelector(".Camel-Case");
const Pascal_case = document.querySelector(".Pascal-Case");
const Snake_case = document.querySelector(".Snake-Case");
const Kebab_case = document.querySelector(".Kebab-Case");
const Trim = document.querySelector(".Trim");


function update()
{
    Lower_case.innerHTML = input.value.toLowerCase();
        Upper_case.innerHTML = input.value.toUpperCase();
        Camel_case.innerHTML = convertToCamelCase(input.value);
        Pascal_case.innerHTML = convertToPascalCase(input.value);
        Snake_case.innerHTML = convertToSnakeCase(input.value);
        Kebab_case.innerHTML = convertToKebabCase(input.value);
        Trim.innerHTML = convertToTrimCase(input.value)
}

update();

input.addEventListener("input",update);

function capitalizeString(str)
{
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function convertToCamelCase(str){
    const LowerCaseString = str.toLowerCase();
    const wordsArray = LowerCaseString.split(' ');      //spit the string into words array
    const camelCase = wordsArray.map((word, index) => {  //here map function is used which take word and index as argument and return the word in camel case
        if(index === 0)
            return word;
        return capitalizeString(word);
    })
    return camelCase.join("");
}

function convertToPascalCase(str){
    const LowerCaseString = str.toLowerCase();
    const wordsArray = LowerCaseString.split(' ');      //spit the string into words array
    const camelCase = wordsArray.map((word) => {  //here map function is used which take word argument and return the words in camel case
        return capitalizeString(word);
    })
    return camelCase.join("");
}

function convertToSnakeCase(str){      
    return str.replaceAll(" ", "_");
}

function convertToKebabCase(str){
    const wordsArray = str.split(' ');      //spit the string into words array
    return wordsArray.join("-");
}

function convertToTrimCase(str){
    const wordsArray = str.split(' ');      //spit the string into words array
    return wordsArray.join("");
}