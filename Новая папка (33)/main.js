// 1. Savollarni prompt orqali so'rash
let ism = prompt("Ismingizni kiriting:");
let familiya = prompt("Familiyangizni kiriting:");
let yosh = prompt("Yoshingizni kiriting:");
let fan = prompt("Yoqtirgan faningizni kiriting:");

// 2. Ma'lumotlar kiritilganini tekshirish (pustoy bo'lmasa)
if (ism && familiya && yosh && fan) {
    
    // Natijani ekranga alert orqali chiqarish
    alert(
        "Ma'lumotlar qabul qilindi, shef!\n\n" +
        "👤 Ism: " + ism + "\n" +
        "📋 Familiya: " + familiya + "\n" +
        "🔢 Yosh: " + yosh + " yosh\n" +
        "📚 Yoqtirgan fan: " + fan
    );

    // Konsolga ham chiqarib qo'yamiz (F12 ni bossangiz ko'rinadi)
    console.log("Ism: " + ism);
    console.log("Familiya: " + familiya);
    console.log("Yosh: " + yosh);
    console.log("Fan: " + fan);

} else {
    // Agar foydalanuvchi birortasini yozmasdan "Otmena" bossa
    alert("Shef, hamma savollarga javob bermadingiz-ku!");
}