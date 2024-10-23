
    function toggleProjectName(projectElement) {
        const projectTitle = projectElement.querySelector('.project-title');
        if (projectTitle.style.display === 'none' || projectTitle.style.display === '') {
            projectTitle.style.display = 'block';
        } else {
            projectTitle.style.display = 'none';
        }
    }

