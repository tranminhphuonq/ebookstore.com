// Thông báo khi click nút "Xem chi tiết"
document.querySelectorAll('.btn-primary').forEach((button) => {
    button.addEventListener('click', () => {
        alert('Bạn đã chọn một eBook!');
    });
});
