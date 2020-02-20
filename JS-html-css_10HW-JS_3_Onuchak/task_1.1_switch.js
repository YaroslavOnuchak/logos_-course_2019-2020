let month = +prompt(`enter number of month `)
switch (month) {
    case 12:
    case 1:
    case 2:
        alert('winter')
        break;
    case 3:
    case 4:
    case 5:
        alert('spring')
        break;
    case 6:
    case 7:
    case 8:
        alert('summer')
        break;
    case 9:
    case 10:
    case 11:
        alert('fall')
        break;
    default:
        alert('impossible')
        break;

}