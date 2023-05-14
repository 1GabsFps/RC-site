const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

const searchBox = document.querySelector('#caixap');
const faqe = document.querySelectorAll('.faq');

searchBox.addEventListener('input', (event) => {
  const searchTerm = event.target.value.toLowerCase();
  faqe.forEach(faq => {
    const questionText = faq.querySelector('.questao').textContent.toLowerCase();
    if (questionText.includes(searchTerm)) {
      faq.style.display = 'block';
    } else {
      faq.style.display = 'none';
    }
  });
});
