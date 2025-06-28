const input = document.createElement('input');
input.value; // OK
input.onchange = function() {
    this.value; // Error
}