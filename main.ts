// Модальне вікно
const openModalBtn: HTMLButtonElement = document.getElementById('open-modal-btn') as HTMLButtonElement;
const closeModalBtn: HTMLButtonElement = document.getElementById('close-modal-btn') as HTMLButtonElement;
const modal: HTMLElement = document.getElementById('modal') as HTMLElement;
const modalOverlay: HTMLElement = document.getElementById('modal-overlay') as HTMLElement;

openModalBtn.addEventListener('click', () => {
    modal.classList.add('show');
    modalOverlay.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    setTimeout(() => modal.style.display = 'none', 300);  // Затримка для плавного закриття
    modalOverlay.style.display = 'none';
});

// Подія прокрутки (scroll)
window.addEventListener('scroll', () => {
    const header: HTMLElement = document.querySelector('header') as HTMLElement;
    const scrollTopBtn: HTMLButtonElement = document.getElementById('scroll-top-btn') as HTMLButtonElement;
    
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        scrollTopBtn.style.display = 'block';  // Показуємо кнопку "Прокрутити вгору"
    } else {
        header.style.backgroundColor = '#333';
        scrollTopBtn.style.display = 'none';  // Ховаємо кнопку
    }
});

// Прокрутка до початку сторінки
const scrollTopBtn: HTMLButtonElement = document.getElementById('scroll-top-btn') as HTMLButtonElement;

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Fetch API для отримання даних з jsonplaceholder
const dataContainer: HTMLElement = document.getElementById('data-container') as HTMLElement;

async function fetchData(): Promise<void> {
    try {
        const response: Response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data: Array<{ id: number, title: string, body: string }> = await response.json();
        
        data.slice(0, 5).forEach((post) => {
            const postElement: HTMLElement = document.createElement('div');
            postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
            dataContainer.appendChild(postElement);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();
