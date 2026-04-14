function initMainMenuActions() {
    const mainMenu = document.getElementById('mainMenu');
    if (!mainMenu) return;

    mainMenu.addEventListener('click', (event) => {
        const trigger = event.target.closest('[data-menu-action]');
        if (!trigger) return;

        const action = trigger.dataset.menuAction;
        if (action === 'navigate') {
            const targetUrl = trigger.dataset.targetUrl;
            if (targetUrl) window.location.href = targetUrl;
            return;
        }

        if (action === 'subject') {
            const subject = trigger.dataset.subject;
            if (subject) showSubjectOptions(subject);
            return;
        }

        if (action === 'full-exam') {
            showFullExamTopicSelection();
            return;
        }

        if (action === 'local-exams') {
            showLocalExams();
            return;
        }

        if (action === 'short-exam') {
            showShortExamModal();
        }
    });
}

function initUserAreaActions() {
    const userArea = document.getElementById('userArea');
    if (!userArea) return;

    userArea.addEventListener('click', (event) => {
        const trigger = event.target.closest('[data-auth-action]');
        if (!trigger) return;

        const action = trigger.dataset.authAction;
        if (action === 'login') {
            openAuthModal('login');
            return;
        }

        if (action === 'register') {
            openAuthModal('register');
            return;
        }

        if (action === 'logout') {
            logoutUser();
        }
    });
}

function initModalActions() {
    document.addEventListener('click', (event) => {
        const trigger = event.target.closest('[data-modal-action]');
        if (!trigger) return;

        const action = trigger.dataset.modalAction;
        if (action === 'close-subject') {
            closeSubjectModal();
            return;
        }

        if (action === 'reload-subject-topics') {
            populateSubjectTopicCheckboxes(currentModalSubject);
            return;
        }

        if (action === 'export-subject-word') {
            exportSubjectToWord();
            return;
        }

        if (action === 'start-filtered-quiz') {
            startFilteredQuiz(currentModalSubject);
            return;
        }

        if (action === 'close-full-exam-topic') {
            closeFullExamTopicModal();
            return;
        }

        if (action === 'export-exam-word') {
            exportExamToWord();
            return;
        }

        if (action === 'start-full-exam-topics') {
            startFullExamWithTopics();
            return;
        }

        if (action === 'close-auth') {
            closeAuthModal();
            return;
        }

        if (action === 'switch-auth-register') {
            switchAuthMode('register');
            return;
        }

        if (action === 'auth-primary') {
            handleAuthPrimary();
            return;
        }

        if (action === 'close-local-exams') {
            closeLocalExamsModal();
            return;
        }

        if (action === 'close-short-exam') {
            closeShortExamModal();
            return;
        }

        if (action === 'export-short-exam-word') {
            exportShortExamToWord();
            return;
        }

        if (action === 'start-short-exam') {
            startShortExamFromModal();
        }
    });
}
