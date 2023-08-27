import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

  const div1 = document.createElement("div");
  div1.classList.add("card");

  div1.addEventListener("click", (e) => {
    console.log(makale.anabaslik);
  });
  const div2 = document.createElement("div");
  div2.classList.add("headline");
  div2.textContent = makale.anabaslik;

  const div3 = document.createElement("div");
  div3.classList.add("author");

  const divİmg = document.createElement("div");
  divİmg.classList.add("img-container");

  const img = document.createElement("img");
  img.src = makale.yazarFoto;

  const span = document.createElement("span");
  span.textContent = `${makale.yazarAdi} tarafından`;

  divİmg.append(img);
  div3.append(divİmg, span);
  div1.append(div2, div3);

  return div1;
};

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  axios
    .get(`http://localhost:5001/api/makaleler`)
    .then((e) => {
      for (let key in e.data.makaleler) {
        e.data.makaleler[key].forEach((element) => {
          document.querySelector(secici).append(Card(element));
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export { Card, cardEkleyici };
