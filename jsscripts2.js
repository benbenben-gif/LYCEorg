        const openSignup = document.getElementById('openSignup');
        const signupModal = document.getElementById('signupModal');
        const closeSignup = document.getElementById('closeSignup');

        openSignup.addEventListener('click', (e) => {
            e.preventDefault();
            signupModal.style.display = 'flex';
        });

        closeSignup.addEventListener('click', () => {
            signupModal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === signupModal) {
            signupModal.style.display = 'none';
            }
        });