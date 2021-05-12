name_of_student_array = [];
function submit() {
    var name_1 = document.getElementById("student_1_name").value;
    var name_2 = document.getElementById("student_2_name").value;
    var name_3 = document.getElementById("student_3_name").value;
    var name_4 = document.getElementById("student_4_name").value;

    name_of_student_array.push(name_1);
    name_of_student_array.push(name_2);
    name_of_student_array.push(name_3);
    name_of_student_array.push(name_4);

    console.log (name_of_student_array);

    document.getElementById("buttonSubmit").style.display = "none";
    document.getElementById("displayName").innerHTML = name_of_student_array;
    document.getElementById("buttonSort").style.display= "inline-block";
}   
function sort() {
    name_of_student_array.sort();
    console.log (name_of_student_array);
    document.getElementById("displayName").innerHTML = name_of_student_array;
}