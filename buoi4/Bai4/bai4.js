function tinhSoLanXuatHien() {
    var inputA = document.getElementById("inputA").value;
    var inputB = document.getElementById("inputB").value;
    
    // Sử dụng biểu thức chính quy để tìm số lần xuất hiện của B trong A
    var regex = new RegExp(inputB, "g");
    var matches = inputA.match(regex);

    var resultElement = document.getElementById("result");
    
    if (matches) {
        resultElement.textContent = "Số lần xuất hiện của '" + inputB + "' trong đoạn văn (A) là " + matches.length;
    } else {
        resultElement.textContent = "Không tìm thấy '" + inputB + "' trong đoạn văn (A).";
    }
}
