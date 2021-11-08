/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    // duration: 2000
    duration:1800,
    reset: true
});

// sr.reveal(`.row , .points , .owe , .footer-sec , .pew , .flex-container`, {
//     // interval: 200
//     interval:50
// });
sr.reveal(`header , #about , #services , #portfolio , #contact , #footer `, {
    // interval: 200
    interval:50
});