// 枚举
var Gender;
(function (Gender) {
    Gender["male"] = "\u7537";
    Gender["female"] = "\u5973";
})(Gender || (Gender = {}));
let gender;
gender = Gender.male;
gender = Gender.female;
console.log(gender);
