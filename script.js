//your JS code here. If required.
<script>
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const ageInput = document.getElementById('age').value;
    const nameInput = document.getElementById('name').value;

    if (!ageInput || !nameInput) {
        alert('Please fill in all fields.');
        return;
    }

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (parseInt(ageInput) >= 18) {
                resolve(`Welcome, ${nameInput}. You can vote.`);
            } else {
                reject(`Oh sorry ${nameInput}. You aren't old enough.`);
            }
        }, 4000); // Resolves after 4 seconds
    });

    promise.then((message) => {
        alert(message);
    }).catch((errorMessage) => {
        alert(errorMessage);
    });
});
</script>
