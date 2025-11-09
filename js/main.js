$(document).ready(function() {
    $('#calculateBtn').on('click', function() {
        const length = parseFloat($('#length').val());
        const width = parseFloat($('#width').val());
        const $resultDiv = $('#result');

        $resultDiv.removeClass('fade-in').addClass('fade-out').text('Kết quả: ');

        if (isNaN(length) || isNaN(width) || length < 0 || width < 0) {
            $resultDiv.text("Vui lòng nhập số dương hợp lệ.").css('color', 'red');
            $resultDiv.removeClass('fade-out').addClass('fade-in'); 
            return; 
        }

        const area = length * width;

        setTimeout(() => { 
            $resultDiv.css('color', '#007bff'); 
            $resultDiv.text("Diện tích HCN là " + area.toFixed(2));
            $resultDiv.removeClass('fade-out').addClass('fade-in');
        }, 100); 
    });

    $('input[type="number"]').on('input', function() {
        $('#result').removeClass('fade-in').addClass('fade-out');
    });
});