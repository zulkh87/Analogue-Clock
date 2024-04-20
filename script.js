// Yazacağımız ana fonksiyon saniyede 1 kere çalışır.
setInterval(setClock, 1000);
// 1000 milisaniye === 1 saniye

// Şimdi nasıl akrep, yelkovan ve saniye çubuklarını seçeceğiz?
const hourHand = document.querySelector("[data-hour-hand]");
// sabit bir değişken (türkçe) tanımlamak için const kullandım.
const minuteHand = document.querySelector("[data-minute-hand]");
// document bir objedir. bunun içinden köseli parantez'deki attribute'a sahip olan elementi seçtim.
const secondHand = document.querySelector("[data-second-hand]");
// querySelector ile bir seçim yapacağımı belirttim.

// Evet şimdi JavaScript eksiğimizi tamamlayalım!

// Anlamadıysanız sorun değil, devam!
// Akıl sağlığınızı korumak istiyorsanız yukarıdaki kodu doğru yazın.
// Akıl sağlığınızı korumak istiyorsanız yukarıdaki kodu doğru yazın.
// Akıl sağlığınızı korumak istiyorsanız yukarıdaki kodu doğru yazın.

// Ana fonksiyon

function setClock() {
    // SET CLOCK FONKSİYON TANIMLAMASININ İÇİNDEYİM.
    // sistemden şu anki zamanı alalım.
    const currentDate = new Date();
    // saniyeleri bir değişkene atadık
    const secondsRatio = currentDate.getSeconds() / 60;
    // Dakiları alıp bir değişkene atadık.
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    // aynı şeyi saatler için yaptık.
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    // peki niye topladık? Bunu siz düşünün bakalım.

    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);

    // bir ara daha gelebilir...
    // tamamdır!
}

// bu fonksiyonu kısmen anlatacağım.
// fonksiyonuma "setRotation" diye bir isim verdim.
// element ve rotationRatio adlı iki parametre(!) alacağını söyledim.
// verdiğim elementin, stil özelliklerinin (css), property'lerini değiştireceğimi belirttim.
// --rotation property'sine sahip olan elementlerin --rotation property'lerini (küfretmeyelim :)), verdiğim rotationRatio ile çarpılan değere sabitle.
function setRotation(element, rotationRatio){
    element.style.setProperty("--rotation", rotationRatio * 360);
}

// Yaşamanız muhtemel skıntılardan sorumluluğum olmadığımı beyan ederim ^^

setClock();