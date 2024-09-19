export const initialData = {
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
</head>
<body>
    <div class="container">
        <h1>Welcome to the MiEditor!</h1>
        <button id="counterButton">Click Me</button>
        <p>Button clicked: <span id="clickCount">0</span> times</p>
    </div>
</body>
</html>
    `,
    css: `
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    text-align: center;
    margin: 0;
    padding: 20px;
}
.container {
    margin: 20px auto;
    padding: 20px;
    max-width: 600px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
h1 {
    font-size: 2.5rem;
    color: #ff007f;
}
button {
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #00ff90;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
button:hover {
    background-color: #00d07b;
}
p {
    font-size: 1.2rem;
    margin-top: 20px;
}
    `,
    js: `
let count = 0;
const clickCountDisplay = document.getElementById('clickCount');

document.getElementById('counterButton').addEventListener('click', function() {
    count++;
    clickCountDisplay.textContent = count;
});
    `
};
