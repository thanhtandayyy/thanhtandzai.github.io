// display_key.js
document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');

    const container = document.querySelector('.key-section.container');

    if (key) {
        const typewriterDiv = document.createElement('div');
        typewriterDiv.classList.add('typewriter');
        typewriterDiv.innerHTML = "<h1>Đây là key Tele của bạn, bạn nhấn nút Sao Chép để lấy key nhé!</h1>";

        const keyContainerDiv = document.createElement('div');
        keyContainerDiv.classList.add('key-container');
        keyContainerDiv.innerHTML = `
            <div class='key-display'><span id='key'>${key}</span></div>
            <button class='copy-btn' onclick='copyKey()'>📄</button>
        `;

        container.appendChild(typewriterDiv);
        container.appendChild(keyContainerDiv);
    } else {
        const typewriterDiv = document.createElement('div');
        typewriterDiv.classList.add('typewriter');
        typewriterDiv.innerHTML = "<h1>No key provided</h1>";
        container.appendChild(typewriterDiv);
    }
});

function copyKey() {
    const keyText = document.getElementById('key').innerText;
    navigator.clipboard.writeText(keyText).then(() => {
        alert('Key của bạn đã được sao chép thành công!');
    }).catch(err => {
        alert('Lỗi rồi bạn liên hệ Admin nhé!');
    });
}
