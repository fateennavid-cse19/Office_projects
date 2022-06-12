const text=[
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis est at tellus mollis vulputate. Nunc porta et elit id dictum.Phasellus vitae massa in lectus hendrerit molestie ut sed magna. Cras eu enim rhoncus, eleifend neque in, blandit mauris. Proin cursus nisl odio, condimentum aliquet mauris scelerisque non. Curabitur rutrum lacus vel egestas iaculis. Vivamus efficitur arcu eros, eget tristique lacus ullamcorper imperdiet. Phasellus venenatis laoreet arcu a tincidunt. Proin nisl magna, tempus id nisl a, molestie congue leo. Nulla luctus turpis id hendrerit euismod.',
    'Aenean id nunc dignissim, faucibus erat a, tincidunt lorem. Donec sollicitudin urna quam, ac porttitor enim vestibulum vel. Curabitur eu consequat neque. Curabitur auctor tellus nec commodo semper. Sed porta dui suscipit neque lacinia, suscipit varius enim volutpat. Sed eget nisi a sem elementum sollicitudin. Donec porttitor et justo id varius. Curabitur sodales, dolor eget iaculis sodales, nisl massa aliquet quam, quis mattis sem velit bibendum diam. Maecenas ut felis in arcu ultricies interdum. Ut at vulputate turpis. Donec sed condimentum sem. Etiam posuere bibendum mi vitae lobortis. Nulla gravida sodales risus eu pellentesque. Vestibulum mattis, nisl at vulputate auctor, nulla purus commodo neque, eu blandit felis ante aliquam erat. Proin augue eros, convallis eu scelerisque non, lacinia malesuada nulla.',
    'Ut nec maximus ligula. Nunc finibus nunc lacus, ac dapibus magna varius in. Morbi quis magna purus. Ut lorem quam, condimentum ac congue vitae, faucibus id mauris. Duis scelerisque pretium suscipit. Aenean tristique placerat eros eu pellentesque. Vestibulum faucibus at mauris vitae vehicula. Curabitur et sollicitudin urna. Proin condimentum, sem in porttitor rhoncus, purus nisl mattis ante, et eleifend diam felis non justo. Ut ultricies fermentum fringilla. Nunc tellus lacus, congue quis dolor dignissim, ultricies eleifend sapien.',
    'Donec non nisi pellentesque, eleifend ante non, cursus leo. Cras blandit vestibulum consectetur. Vestibulum a accumsan nisi. Suspendisse mattis et libero eget volutpat. Nam et lorem nunc. Duis blandit sagittis augue, in auctor ante pharetra a. Fusce erat odio, viverra quis mauris vel, blandit porta lectus.',
    'Vestibulum ac vehicula ex. Nullam ornare turpis ut eros volutpat tristique. Mauris eget ex venenatis, aliquet sem id, bibendum nulla. Quisque ornare imperdiet augue, a auctor neque. Sed vitae fermentum erat. Ut quis sapien in odio aliquam mollis. Proin facilisis metus at dolor congue tristique. Quisque condimentum elit quis leo congue mollis. Suspendisse dictum nunc vel lacus consequat ullamcorper. In fringilla pulvinar cursus.'
];

const form=document.querySelector(".loren-form");
const no_of_para=document.querySelector("numofpara");
const range=document.getElementById("amount");
const result=document.querySelector(".lorem-text");

function syncParaNumbers(e)
{
    const value=e.target.value;
    numofpara.value=value;
    numofpararange.value=value;
}

form.addEventListener('submit',e=>{

    e.preventDefault();
    const value= parseInt(amount.value);
    let tempText=text.slice(0,value);
    tempText = tempText.map(item => `<p class="result">${item}</p>`).join("");
    result.innerHTML=tempText;

})

    


numofpara.addEventListener('input',syncParaNumbers);
numofpararange.addEventListener('input',syncParaNumbers);