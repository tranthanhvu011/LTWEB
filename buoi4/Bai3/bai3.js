document.addEventListener("DOMContentLoaded", function() {
    // Mảng chứa các lời chào ngẫu nhiên
    var greetings = [
        "Chào bạn!",
        "Xin chào!",
        "Hi there!",
        "Chào mừng bạn đến với trang web!",
        "Chúc bạn một ngày vui vẻ!",
    ];

    // Chọn một lời chào ngẫu nhiên từ mảng
    var randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

    // Hiển thị lời chào trên trang web
    var greetingElement = document.getElementById("greeting");
    greetingElement.textContent = randomGreeting;
});
