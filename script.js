function calculateAge() {
    // Get the birthdate from the input field
    const birthdateInput = document.getElementById('birthdate');
    const birthdateValue = birthdateInput.value;

    // Check if a birthdate is entered
    if (birthdateValue === '') {
      alert('Please enter your birthdate.');
      return;
    }

    // Create a Date object from the entered birthdate
    const birthdate = new Date(birthdateValue);

    // Get the current date
    const currentDate = new Date();

    // Calculate the age in years
    let ageYears = currentDate.getFullYear() - birthdate.getFullYear();

    // Adjust the age based on the month and day
    if (currentDate.getMonth() < birthdate.getMonth() ||
        (currentDate.getMonth() === birthdate.getMonth() && currentDate.getDate() < birthdate.getDate())) {
      ageYears--;
    }

    // Calculate the remaining days until the next birthday
    const nextBirthday = new Date(currentDate.getFullYear(), birthdate.getMonth(), birthdate.getDate());
    const daysUntilNextBirthday = Math.ceil((nextBirthday - currentDate) / (24 * 60 * 60 * 1000));

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Your age is ${ageYears} years and ${daysUntilNextBirthday} days until your next birthday.`;
  }