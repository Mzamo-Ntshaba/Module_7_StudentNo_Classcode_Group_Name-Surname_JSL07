document.addEventListener('DOMContentLoaded', function () {
  const cardForm = document.getElementById('cardForm');
  const modal = document.getElementById('modal');
  const certificateContent = document.getElementById('certificateContent');
  const closeModal = document.querySelector('.close');

  // Hide the modal initially
  modal.style.display = 'none';
  cardForm.style.display = 'block';

  cardForm.addEventListener('submit', function (e) {
    e.preventDefault(); // prevents form from submiting before info is filled

    // 🚨 Get input values
    const studentNameInput = document.getElementById('studentName');
    const personalMessageInput = document.getElementById('personalMessage');
    const courseNameInput = document.getElementById('courseName'); 

    const studentName = studentNameInput.value; 
    const personalMessage = personalMessageInput.value;
    const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input

    if (studentName.trim() === '' || personalMessage.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    // 🚨 Generate certificate content dynamically
    // const certHeading = document.createElement('h1');
    // certHeading.textContent = 'Certificate of Achievement';
    certificateContent.innerHTML = `
    <h1>Certificate of Achievement</h1>
    <p>This is to certify that</p>
    <h3>${studentName}</h3>
    <p>has almost completed the</p>
    <h3>${courseName}</h3>
    <p>with legendary perseverance and world-class bad-assery for never giving up 🏆</p>
    <img src ="/logo.png">
    <p>${personalMessage}</p>
    `;
    
    //  Display the modal
    modal.style.display = 'block';
    cardForm.style.display = 'none';

    // Clear the form inputs
    studentNameInput.value = '';
    personalMessageInput.value = '';
    courseNameInput.value = '';
  });

  //  🚨 Close the modal when the close button is clicked
  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
    cardForm.style.display = 'block';
  });
});
