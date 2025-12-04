const faqItems = document.querySelectorAll(".faq_item");

faqItems.forEach(item => {
  const header = item.querySelector(".faq_header");

  header.addEventListener("click", () => {

    // Tutup semua item kecuali yang ditekan
    faqItems.forEach(i => {
      if (i !== item) i.classList.remove("active");
    });

    // Toggle item saat ini
    item.classList.toggle("active");
  });
});
