let numUniqueEmails = function (emails) {
    let result = new Set();
    for (email of emails) {
        result.add(normalize(email));
    }
    return (result.size);
};
function normalize(email) {
    let at = email.indexOf("@");
    let local = email.slice(0, at);
    let rest = email.slice(at, email.length);
    let plus = email.indexOf("+");    //remove characters after plus
    let cutPlus = local.slice(plus);
    if (plus !== -1) local = local.replace(cutPlus, "")
    local = local.replace(/\./g, "")
    return (local + rest); //remove dots
}

