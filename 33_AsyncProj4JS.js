const insert = document.getElementById('insert');

window.addEventListener('keydown',(e) => {
    insert.innerHTML = `
        <div class = 'color'>
            <table>
                <tr>
                    <td>Key</td>
                    <td>KeyCode</td>
                    <td>Code</td>
                </tr>
                <tr>
                    <td>${e.key ===" "? "Space" : e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </table>
        </div>
    `
})