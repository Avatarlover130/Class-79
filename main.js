Name_of_Student_array=[];
function Submit() {
    var name_1 = document.getElementById("Name_of_student_1").value;
    var name_2 = document.getElementById("Name_of_student_2").value;
    var name_3 = document.getElementById("Name_of_student_3").value;
    var name_4 = document.getElementById("Name_of_student_4").value;
    Name_of_Student_array.push(name_1);
    Name_of_Student_array.push(name_2);
    Name_of_Student_array.push(name_3);
    Name_of_Student_array.push(name_4);
    console.log (Name_of_Student_array);
    document.getElementById("Display_name").innerHTML= Name_of_Student_array;
    document.getElementById("Submit_Btn").style.display="none";
    document.getElementById("Sort_Btn").style.display="inline-block";
}

function Sort() {
    Name_of_Student_array.sort();
    console.log (Name_of_Student_array);
    document.getElementById("Display_name").innerHTML= Name_of_Student_array;
}