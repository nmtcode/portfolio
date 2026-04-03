import { useState, useEffect } from "react";

export const useTypist = (text: string, speed: number = 100) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayText(""); // تصفير النص فور تغير الـ text

    const typingInterval = setInterval(() => {
      if (i < text.length) {
        // نستخدم الوظيفة المرجعية لضمان الحصول على آخر حالة للـ string
        setDisplayText(() => text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]); // ضروري مراقبة text هنا

  return displayText;
};
