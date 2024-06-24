const selectType = document.querySelector('select[name="type"]');
const labelType = document.querySelector('label[for="type"]');


document.querySelector('.add_type').addEventListener('click', function (e) {

    // create quantity and recipe fields
    const inputType = document.createElement('input');
    inputType.type = 'text';
    inputType.name = `type`;
    inputType.placeholder = `new type`;

    // add them to a div
    labelType.appendChild(inputType);

    selectType.remove()
})
