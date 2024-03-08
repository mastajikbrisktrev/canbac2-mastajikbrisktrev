// index.js

// Hàm tính căn bậc 2
function calculateSquareRoot(number) {
  if (number < 0) {
    return 'Không có căn bậc 2 của số âm trong tập số thực.';
  }

  return Math.sqrt(number);
}

// Nhận giá trị từ dòng lệnh
const args = process.argv.slice(2);
const number = parseFloat(args[0]);

// Kiểm tra xem đầu vào có hợp lệ không
if (isNaN(number)) {
  console.log('Vui lòng nhập một số hợp lệ.');
} else {
  // Tính căn bậc 2 và hiển thị kết quả
  const result = calculateSquareRoot(number);
  console.log(`Căn bậc 2 của ${number} là: ${result}`);
}
