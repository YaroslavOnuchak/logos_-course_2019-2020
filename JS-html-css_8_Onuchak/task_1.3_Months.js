let number = +prompt(`enter number`, '');
if (number == 12 || number <= 2 && number >= 1) {
    alert('winter');
} else if (number >= 3 && number <= 5) {
    alert('spring');
} else if (number >= 6 && number <= 8) {
    alert('summer');

} else if (number >= 9 && number <= 11) {
    alert('fall');
} else {
    alert('неможливо');

}