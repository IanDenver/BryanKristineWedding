const envelope = document.getElementById('envelope');
const rsvpBtn = document.getElementById('rsvp-btn');

// Trigger the elegant opening animation
envelope.addEventListener('click', function () {
    if (!envelope.classList.contains('open')) {
        envelope.classList.add('open');
    }
});

// Handle the RSVP button click
rsvpBtn.addEventListener('click', function (event) {
    // Prevents the click from bubbling up and interfering with the envelope
    event.stopPropagation();

    // Navigate to the main details page
    window.location.href = "details.html";
});