
const stringSize = (text) => {
return text.length;
}
const replaceCharacterE = (text) => {
return text.replace("e"," ")
}
const concatString = (text1, text2) => {
return text1.concat(text2)
}
const showChar5 = (text) => {
return text[4]
}
const showChar9 = (text) => {
return text.substring(0,9)
}
const toCapitals = (text) => {
return text.toUpperCase()
}
const toLowerCase = (text) => {
return text.toLowerCase()
}
const removeSpaces = (text) => {
return text.trim()
}
const IsString = (text) => {
    if (typeof text == 'string' || text instanceof String) {
        return true;
    } else {
        return false;
}
}

const getExtension = (text) => {
    var fileExtension = text.replace(/^.*\./, '');
return fileExtension;
}
const countSpaces = (text) => {
    var spaceCount = (text.split(" ").length - 1);
    return spaceCount
}
const InverseString = (text) => {
    return text.split("").reverse().join("")
}

const power = (x, y) => {
return Math.pow(x,y)
}
const absoluteValue = (num) => {
return Math.abs(num)
}
const absoluteValueArray = (array) => {
return array.map(Math.abs)
}   
const circleSurface = (radius) => {
    return Math.ceil(radius * radius * 3.14);
}
const hypothenuse = (ab, ac) => {
    return Math.hypot(ab, ac);
}
const BMI = (weight, height) => {
    return parseFloat((weight / (height * height)).toFixed(2));
}

const createLanguagesArray = () => {
var lang=["Html", "CSS", "Java", "PHP"]
return lang
}

const createNumbersArray = () => {
var numb=[0,1,2,3,4,5]
return numb
}

const replaceElement = (languages) => {
    languages.splice(2, 1, 'Javascript');
    return languages;
}

const addElement = (languages) => {
    languages.push('Ruby', 'Python');
    return languages;
}

const addNumberElement = (numbers) => {
    numbers.unshift(-2, -1);
    return numbers;
}

const removeFirst = (languages) => {
    languages.shift();
    return languages;
}

const removeLast = (languages) => {
    languages.pop();
    return languages;
}

const convertStrToArr = (social_arr) => {
    var array = social_arr.split(",");
    return array;
}

const convertArrToStr = (languages) => {
   languages.toString()
    languages.split(',');
return languages;
}

const sortArr = (social_arr) => {
return social_arr.sort()
}

const invertArr = (social_arr) => {
return social_arr.reverse()
}