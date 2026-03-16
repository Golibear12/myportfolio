// ==========================================
// 1. DATA ARRAYS
// ==========================================

const educationData = [
    { title: "BSc (Hons) in Physics", meta: "Kirori Mal College, University of Delhi | Pursuing" },
    { title: "Minor in Computer Science", meta: "Kirori Mal College, University of Delhi | Pursuing" },
    { title: "Web Development", meta: "C-Tech Institute Certification | 2024" },
    { title: "Research for Marketing", meta: "NPTEL & IITM Certification | 2025" },
    
    
];

const skillsData = [
    { 
        icon: "ri-window-line", 
        title: "Frontend Development", 
        items: ["HTML, CSS, JavaScript", "GSAP, Three.js, React.js", "Locomotive Scroll"]
    },
    { 
        icon: "ri-database-2-line", 
        title: "Backend & Database", 
        items: ["Python, NumPy, Matplotlib", "Pandas", "MySQL, DBMS"]
    },
    { 
        icon: "ri-lightbulb-flash-line", 
        title: "Soft Skills", 
        items: ["Analytical Thinking, Problem-Solving", "Adaptability, Collaboration", "Originality, Detail-Oriented"]
    },
    { 
        icon: "ri-pencil-ruler-2-line", 
        title: "Design & Tools", 
        items: ["Responsive Design, UI/UX", "Pattern Analysis, Colour theory", "SEO Optimization", "Git, GitHub"]
    }
];

const projectsData = [
    { title: "Lazarev Clone", desc: "Animated portfolio clone with GSAP.", link: "https://golibear12.github.io/lazarev./" },
    { title: "Burger King UI", desc: "A clean, responsive one-page demo.", link: "https://golibear12.github.io/burgerking/" },
    { title: "Pnalisam Animation", desc: "Futuristic web project with scroll effects.", link: "https://golibear12.github.io/Pnalisam/" },
    { title: "Bulibuli Game", desc: "Endless mining-themed web game.", link: "https://golibear12.github.io/Bulibuli/" }
];

const sliderImages = [
    'img/kmc.jpg',
    'img/kmc1.jpg',
    'img/kirorimal.jpg',
    'img/Kirorimal1.jpg'
];

// ==========================================
// 2. DOM RENDERING & MENU LOGIC
// ==========================================

function renderContent() {
    const eduList = document.getElementById('edu-list');
    educationData.forEach(item => {
        eduList.innerHTML += `<div class="card"><h3>${item.title}</h3><p class="meta" style="margin-top: 1rem;">${item.meta}</p></div>`;
    });

    const skillList = document.getElementById('skill-list');
    skillsData.forEach(skill => {
        let listItems = skill.items.map(i => `<li style="margin-bottom: 0.5rem;">${i}</li>`).join('');
        skillList.innerHTML += `
            <div class="card">
                <h3><i class="${skill.icon}"></i> ${skill.title}</h3>
                <ul style="margin-left: 1.2rem; margin-top: 1rem; color: var(--text-secondary);">${listItems}</ul>
            </div>`;
    });

    const projectList = document.getElementById('project-list');
    projectsData.forEach(proj => {
        projectList.innerHTML += `
            <div class="card">
                <h3>${proj.title}</h3>
                <p class="meta" style="margin-bottom: 1.5rem; margin-top: 1rem;">${proj.desc}</p>
                <a href="${proj.link}" target="_blank" style="color: var(--accent); text-decoration: none; font-weight: 600;">View Project <i class="ri-arrow-right-line"></i></a>
            </div>`;
    });
}

function setupMenu() {
    const menuBtn = document.getElementById('menu-toggle');
    const dropdown = document.getElementById('dropdown-menu');

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation(); 
        dropdown.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!menuBtn.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });

    dropdown.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            dropdown.classList.remove('active');
        });
    });
}

// ==========================================
// 3. IMAGE SLIDER ENGINE
// ==========================================

function createSlider(n) {
    const container = document.getElementById('visual-slider');
    if (!container || sliderImages.length === 0) return;

    const oldImg = container.querySelector('img');
    if (oldImg) {
        oldImg.style.transition = 'opacity 0.8s, transform 0.8s';
        oldImg.style.opacity = '0';
        oldImg.style.transform = 'translateX(-60px)';
        setTimeout(() => oldImg.remove(), 2000); 
    }

    const img = document.createElement('img');
    img.src = sliderImages[n % sliderImages.length];
    img.style.opacity = '0';
    img.style.transform = 'translateX(60px)';
    img.style.transition = 'opacity 1.2s cubic-bezier(0.4,0,0.2,1), transform 1.2s cubic-bezier(0.4,0,0.2,1)';
    
    container.appendChild(img);

    setTimeout(() => {
        img.style.opacity = '1';
        img.style.transform = 'translateX(0)';
    }, 50);
}

function startSlider() {
    let idx = 0;
    createSlider(idx);
    setInterval(() => {
        idx = (idx + 1) % sliderImages.length;
        createSlider(idx);
    }, 3500);
}

// ==========================================
// 4. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    renderContent();
    setupMenu();
    startSlider();
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});