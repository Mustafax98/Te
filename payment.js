var modal = document.getElementById("myModal");

// الحصول على الزر الذي يفتح المودال
var btn = document.getElementById("payment");

// الحصول على العنصر الذي يغلق المودال
var span = document.getElementsByClassName("close")[0];

// عندما يضغط المستخدم على الزر، يفتح المودال
btn.onclick = function() {
    modal.classList.add('open');
}

// عندما يضغط المستخدم على × (علامة الإغلاق)، يغلق المودال
span.onclick = function() {
    modal.classList.remove('open');
}

// عندما يضغط المستخدم في أي مكان خارج المودال، يغلق المودال
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove('open');
    }
}

// التعامل مع الأزرار لاختيار طريقة الدفع
const paymentButtons = document.querySelectorAll('.payment-button');
paymentButtons.forEach((button) => {
    button.addEventListener('click', function () {
        // إزالة التحديد من جميع الأزرار
        paymentButtons.forEach((btn) => {
            btn.classList.remove('selected');
        });

        // تحديد الزر الذي تم الضغط عليه
        this.classList.add('selected');

        const selectedMethod = this.getAttribute('data-method');

        // إخفاء جميع بيانات الدفع
        document.querySelectorAll('.payment-details-field').forEach((field) => {
            field.style.display = 'none';
        });

        // إظهار بيانات الدفع بناءً على الخيار
        if (selectedMethod === 'credit') {
            document.getElementById('credit-card').style.display = 'block';
        } else if (selectedMethod === 'wallet') {
            document.getElementById('wallet').style.display = 'block';
        } else if (selectedMethod === 'crypto') {
            document.getElementById('crypto').style.display = 'block';
        } else if (selectedMethod === 'cash') {
            document.getElementById('cash').style.display = 'block';
        }
    });
});