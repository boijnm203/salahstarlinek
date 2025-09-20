 
// ===== دعم المتصفح والتأكد من دعم واجهة التعرف على الصوت =====

    // نحاول استخدام SpeechRecognition من المتصفح، ونعمل نسخة Webkit للكروم
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    // إذا لم يكن المتصفح يدعم هذا، نعرض تنبيه
    if (!SpeechRecognition) {
        alert("متصفحك لا يدعم الأوامر الصوتية. استخدم Chrome أو Edge.");
} else {
    // ===== إنشاء كائن التعرف على الصوت =====
    const recognition = new SpeechRecognition();

    // يجعل المايك يستمع باستمرار دون توقف
    recognition.continuous = true;

    // عدم استخدام النتائج المؤقتة أثناء التحدث، فقط النتيجة النهائية
    recognition.interimResults = false;

    // تحديد اللغة العربية
    recognition.lang = 'ar-SA';

    // ===== عند التعرف على الكلام =====
    recognition.onresult = function(event) {
        // آخر نتيجة تم التعرف عليها
        const transcript = event.results[event.results.length - 1][0].transcript.trim();

    // نطبع النص في Console لمراقبة التعرف
    console.log("تم التعرف:", transcript);

    // نرسل النص لدالة معالجة الأوامر
    handleCommand(transcript);
    };

    // ===== عند انتهاء الاستماع =====
    recognition.onend = function() {
        // نعيد تشغيل الاستماع تلقائيًا لضمان الاستماع المستمر
        recognition.start();
    };

    // ===== عند حدوث خطأ أثناء التعرف على الصوت =====
    recognition.onerror = function(event) {
        console.error("خطأ في التعرف على الصوت:", event.error);
    };

    // بدء الاستماع عند تحميل الصفحة
    recognition.start();

    // ===== دالة لتحديث حالة الأوامر على الصفحة =====
    function updateStatus(message) {
        // نعرض رسالة في div الحالة
        const status = document.getElementById("status");
    if(status) status.textContent = message;
    }

    // ===== قائمة الأوامر مع كلمات مفتاحية (مرنة جدًا) =====
    const commands = [
        {
            // أمر فتح واتساب
            keywords: ["واتساب"],
            action: () => {
                const whatsappNumber = "23566571490";
                const url = `https://wa.me/${whatsappNumber}`;
                window.open(url, "_blank");
                updateStatus("تم فتح واتساب!");

                const audio = new Audio("OkWHATS.wav"); // ضع مسار ملف الصوت هنا
                audio.play().catch(err => console.error("خطأ في تشغيل الصوت:", err));
            }
            
            
        },
        {
            // أمر الاتصال برقم تيقو
            keywords: ["تيقو", 'اتصل' , 'ابيل'],
            action: () => {
                const tigoNumber = "+23590494041";
                window.location.href = `tel:${tigoNumber}`;
                updateStatus("جارٍ الاتصال برقم تيقو...");

                const audio = new Audio("ok_call.wav"); // ضع مسار ملف الصوت هنا
                audio.play().catch(err => console.error("خطأ في تشغيل الصوت:", err));

            }
        },
        {
            // أمر الاتصال برقم artil
           
            keywords: ["نادي ارتيل", 'ارتيل', 'نادي'],
            action: () => {
                const artil_Number = "+23566571490";
                window.location.href = `tel:${artil_Number}`;
                updateStatus("جارٍ الاتصال برقم تيقو...");

                const audio = new Audio("artil.wav"); // ضع مسار ملف الصوت هنا
                audio.play().catch(err => console.error("خطأ في تشغيل الصوت:", err));

            }
        },
        {
            // أمر فتح تيك توك
            keywords: ["تيك توك"],
            action: () => {
                const tiktokUrl = "https://www.tiktok.com/@salaheddine7742";
                window.open(tiktokUrl, "_blank");
                updateStatus("تم فتح تيك توك!");
                const audio = new Audio("ok (2).wav"); // ضع مسار ملف الصوت هنا
                audio.play().catch(err => console.error("خطأ في تشغيل الصوت:", err));

            }
        },
        {
            keywords: ["خرائط", "خريطة", "موقع",'فوكة' , 'وصفني' ,'وين','google' ,'map' , 'اين' ],
            action: () => {
                const mapUrl = "https://maps.app.goo.gl/K7Yjh2saaaC911kX6"; // رابط خرائط جوجل
                window.open(mapUrl, "_blank");
                updateStatus("تم فتح الخرائط!");

                const audio = new Audio("map.wav"); // ضع مسار ملف الصوت هنا
                audio.play().catch(err => console.error("خطأ في تشغيل الصوت:", err));

            }
        },
        {
            // أمر حفظ الصورة
            keywords: ["حفظ", "صورة", "التقط"],
            action: () => {
                // تحديد رابط الصورة على موقعك
                const imageURL = window.location.origin + "/images/card.png";
                // window.location.origin يعطي https://example.com

                // إنشاء رابط تنزيل وتنفيذه
                const link = document.createElement('a');
                link.href = imageURL;          // رابط الصورة
                link.download = 'vip-card.png'; // اسم الملف عند التنزيل
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                // تحديث الحالة في الصفحة
                updateStatus("تم تنزيل الصورة بنجاح!");
            }
        },
        {
 

            keywords: ["ما اسمك ", 'من انت',],
            action: () => {
                const audio = new Audio("iam.wav"); // ضع مسار ملف الصوت هنا
                audio.play().catch(err => console.error("خطأ في تشغيل الصوت:", err));

            }
        },
          {
    

            keywords: ["مميزة", 'شخصية',],
            action: () => {
                const whatsappNumber = "23568775247";
                const url = `https://wa.me/${whatsappNumber}`;
                window.open(url, "_blank");
                updateStatus("تم فتح واتساب!");


                const audio = new Audio("need1.wav"); // ضع مسار ملف الصوت هنا
                audio.play().catch(err => console.error("خطأ في تشغيل الصوت:", err));

            }
        }
       

    ];

    // دالة لمعالجة الأوامر بشكل مرن
    function handleCommand(command) {
        command = command.toLowerCase();
        let found = false;

        commands.forEach(cmd => {
            // إذا أي كلمة مفتاحية موجودة في الجملة، نفذ الأمر
            const match = cmd.keywords.some(word => command.includes(word));
            if (match) {
                cmd.action();
                found = true;
            }
        });

        if (!found) updateStatus("أمر غير معروف: " + command);
        }
} 

 
function downloadAnyImage(url, fileName = "card.png") {
    const link = document.createElement('a');
    link.href = url;          // رابط الصورة الموجودة على الموقع
    link.download = fileName; // اسم الملف عند التنزيل
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    updateStatus("تم تنزيل الصورة بنجاح!");
}
