// تأكد من أن الكود يستجيب بشكل صحيح عند التبديل
let toggleBtn = document.querySelector(".toggle"); // تغيير المرجعية باستخدام .toggle
let sidebar = document.querySelector(".navigation"); // السايد بار
let mainContent = document.querySelector(".main"); // المحتوى الرئيسي

toggleBtn.onclick = function () {
    sidebar.classList.toggle("active"); // إخفاء أو إظهار السايد بار
    mainContent.classList.toggle("active"); // تغيير موقع المحتوى الرئيسي
};
