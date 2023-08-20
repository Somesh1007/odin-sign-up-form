const submitButton = document.querySelector('.create-account-button')
submitButton.addEventListener('click', handleFormSubmission)


function handleFormSubmission(event) {
    console.log(`Inside handleFormSubmission`);

    let passwordNode = document.querySelector('#password')
    let confirmPasswordNode = document.querySelector('#confirm_password')
    console.log(`Password Validity Check : ${event.target.checkValidity()}`);

    let password = passwordNode.value
    let confirmPassword = confirmPasswordNode.value

    console.log(`Password is: ${password}`);
    console.log(`Confirm Password is: ${confirmPassword}`);


}