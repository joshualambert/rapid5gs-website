function copyCommand() {
    const command = document.querySelector('.install-command');
    const textToCopy = command.textContent.trim().replace('📋', '');
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        const copyButton = command.querySelector('.copy-button');
        const originalText = copyButton.textContent;
        copyButton.textContent = '✓';
        setTimeout(() => {
            copyButton.textContent = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
} 