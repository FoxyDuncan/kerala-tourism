function validate_email(slot){
    var mail=document.getElementById(slot);
    if (!mail.value.match()) {
        mail.style.border="2px solid #0607";
    }
    else {
        mail.style.border="2px solid #0f0";
    }
}
function validate_name(id){
    var name=document.getElementById(id);
    if (name.value==0) {
        name.style.border="2px solid #0507";
    }
    else if(name.value<6) {
        name.style.border="1px solid #0507";
    }
    else {
        name.style.border="2px solid #0f07"
    }
}
