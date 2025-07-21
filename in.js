// Dynamic project data
const projects = [
    {
        title: "<i class="+"ri-book-3-line"+"></i>Academic",
        description: "||Academics||Research & Projects||",
        link: " https://golibear12.github.io/acadmic/"
    },
    {
        title: "<i class="+"ri-pages-fill"+"></i>Website Project",
        description: "||Modern||Websites||UxUi||",
        link: "#"
    }
    
];

// Render projects dynamically
function renderProjects() {
    const list = document.getElementById('project-list');
    list.innerHTML = '';
    projects.forEach((project, idx) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" >View Project</a>
        `;
        // If first project, add click handler for modal
        if (idx === 1) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', (e) => {
                // Prevent link click
                e.preventDefault();
                showProjectModal(projects[1]);
            });
        }
        list.appendChild(card);
    });
}

// Modal for project details
function showProjectModal(project) {
    // Remove any existing modal
    const oldModal = document.getElementById('project-modal');
    if (oldModal) oldModal.remove();

    const modal = document.createElement('div');
    modal.id = 'project-modal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.background = 'rgba(30,32,40,0.98)';
    modal.style.zIndex = '9999';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.flexDirection = 'column';
    modal.style.color = '#fff';

    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '32px';
    closeBtn.style.right = '32px';
    closeBtn.style.background = 'transparent';
    closeBtn.style.color = '#fff';
    closeBtn.style.fontSize = '2rem';
    closeBtn.style.border = 'none';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.zIndex = '10000';
    closeBtn.addEventListener('click', () => {
        modal.remove();
    });

    // Modal content
    const content = document.createElement('div');
    content.style.maxWidth = '600px';
    content.style.background = 'rgba(60,63,80,0.98)';
    content.style.borderRadius = '16px';
    content.style.boxShadow = '0 8px 32px rgba(108,99,255,0.25)';
    content.style.padding = '2.5rem';
    content.style.textAlign = 'center';
    content.innerHTML = `
        <h2 style="font-size:2rem; margin-bottom:1rem;">${project.title}</h2>
        <div style="margin-bottom:1.5rem;">
            <a href="https://golibear12.github.io/burgerking/" target="_blank" style="color:#6c63ff; font-size:1.1rem; text-decoration:underline; display:inline-flex; align-items:center; gap:6px;"><i class='ri-link'></i> Burger King</a>
            <p>
            A clean one-page Burger King-inspired demo featuring. Visually appealing layout with solid HTML/CSS structure. Showcases good design sense and layout skills.
            </p>
            <a href="https://golibear12.github.io/Pnalisam/" target="_blank" style="color:#6c63ff; font-size:1.1rem; text-decoration:underline; display:inline-flex; align-items:center; gap:6px;"><i class='ri-link'></i> Pnalisam</a>
            <p>Futuristic web animation project featuring advanced scroll effects and interactive canvas animations. Designed with GSAP and JavaScript</p>
            <a href="https://golibear12.github.io/lazarev./" target="_blank" style="color:#6c63ff; font-size:1.1rem; text-decoration:underline; display:inline-flex; align-items:center; gap:6px;"><i class='ri-link'></i> Lazarev</a>
            <p>An animated portfolio clone inspired by Lazarev Agency. Built using HTML, CSS, JavaScript, GSAP, and Locomotive Scroll to replicate fluid motion and visual storytelling. </p>
            <a href="https://golibear12.github.io/Bulibuli/" target="_blank" style="color:#6c63ff; font-size:1.1rem; text-decoration:underline; display:inline-flex; align-items:center; gap:6px;"><i class='ri-link'></i> Bulibuli</a>
            <p>A fun and endless mining-themed web game made using vanilla JavaScript and styled with CSS. Offers interactive UI and basic game logic for entertainment</p>
        </div>
    `;

    modal.appendChild(closeBtn);
    modal.appendChild(content);
    document.body.appendChild(modal);
}

// Smooth fade-in animation for sections
function fadeInSections() {
    const sections = document.querySelectorAll('.fade-in');
    const onScroll = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 60) {
                section.classList.add('visible');
            }
        });
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
}

// Image slider for education section
const listimg = [
    'img/kirorimal.jpg',
    'img/Kirorimal1.jpg',
    'img/kmc.jpg',
    
    'img/kmc1.jpg',
    
    
];

function createSlider(n) {
    const sdl = document.querySelector('.sdl');
    if (!sdl) return;
    // Animate old image out to the left
    const oldImg = sdl.querySelector('img');
    if (oldImg) {
        oldImg.style.transition = 'opacity 0.8s, transform 0.8s';
        oldImg.style.opacity = '0';
        oldImg.style.transform = 'translateX(-60px)';
        setTimeout(() => {
            if (oldImg.parentNode) oldImg.parentNode.removeChild(oldImg);
        }, 3000); // Remove after 3s to match interval
    }
    // Create new image coming from right
    const img = document.createElement('img');
    img.src = listimg[n % listimg.length];
    img.alt = `Education Image ${n+1}`;
    img.style.width = '95%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.opacity = '0';
    img.style.borderRadius = '12px';
    img.style.transform = 'translateX(60px)';
    img.style.position = 'absolute';
    img.style.left = '0';
    img.style.top = '0';
    img.style.transition = 'opacity 1.2s cubic-bezier(0.4,0,0.2,1), transform 1.2s cubic-bezier(0.4,0,0.2,1)';
    sdl.style.position = 'relative';
    sdl.appendChild(img);
    setTimeout(() => {
        img.style.opacity = '1';
        img.style.transform = 'translateX(0)';
    }, 45);
}

function startSlider() {
    let idx = 0;
    createSlider(idx);
    setInterval(() => {
        idx = (idx + 1) % listimg.length;
        createSlider(idx);
    }, 3200);
}

// Separate image lists for each hobby
const hobbyImages = {
    'music': [
        'img/i flu.jpg',
        
    ],
    'theater & drama': [
        'img/th1.jpg',
        'img/th2.jpg'
        
    ],
    'books reading': [
        'img/kirorimal.jpg',
        
    ],
    'physical': [
        'img/physical1.jpg',
        'img/physical2.jpg',
        'img/physical3.jpg'
    ]
};

// ...existing code...

let currentHobby = 'music';
let currentHobbyList = hobbyImages[currentHobby];
let hobSliderInterval;

function createHobSlider(n) {
    const hsdl = document.querySelector('.hsdl');
    const unionHsdl = document.querySelector('.union-hsdl');
    if (hsdl) {
        // Animate old image out to the left
        const oldImg = hsdl.querySelector('img');
        if (oldImg) {
            oldImg.style.transition = 'opacity 0.8s, transform 0.8s';
            oldImg.style.opacity = '0';
            oldImg.style.transform = 'translateX(-60px)';
            setTimeout(() => {
                if (oldImg.parentNode) oldImg.parentNode.removeChild(oldImg);
            }, 3000);
        }
        // Create new image coming from right
        const img = document.createElement('img');
        img.src = currentHobbyList[n % currentHobbyList.length];
        img.alt = `Hobby Image ${n+1}`;
        img.style.width = '99%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        img.style.opacity = '0';
        img.style.borderRadius = '12px';
        img.style.transform = 'translateX(60px)';
        img.style.position = 'absolute';
        img.style.left = '0';
        img.style.top = '0';
        img.style.transition = 'opacity 1.2s cubic-bezier(0.4,0,0.2,1), transform 1.2s cubic-bezier(0.4,0,0.2,1)';
        hsdl.style.position = 'relative';
        hsdl.appendChild(img);
        setTimeout(() => {
            img.style.opacity = '1';
            img.style.transform = 'translateX(0)';
        }, 45);
    }
    if (unionHsdl) {
        // Animate old image out to the left
        const oldImg = unionHsdl.querySelector('img');
        if (oldImg) {
            oldImg.style.transition = 'opacity 0.8s, transform 0.8s';
            oldImg.style.opacity = '0';
            oldImg.style.transform = 'translateX(-60px)';
            setTimeout(() => {
                if (oldImg.parentNode) oldImg.parentNode.removeChild(oldImg);
            }, 3000);
        }
        // Create new image coming from right
        const img2 = document.createElement('img');
        img2.src = currentHobbyList[n % currentHobbyList.length];
        img2.alt = `Union Image ${n+1}`;
        img2.style.width = '99%';
        img2.style.height = '100%';
        img2.style.objectFit = 'cover';
        img2.style.opacity = '0';
        img2.style.borderRadius = '12px';
        img2.style.transform = 'translateX(60px)';
        img2.style.position = 'absolute';
        img2.style.left = '0';
        img2.style.top = '0';
        img2.style.transition = 'opacity 1.2s cubic-bezier(0.4,0,0.2,1), transform 1.2s cubic-bezier(0.4,0,0.2,1)';
        unionHsdl.style.position = 'relative';
        unionHsdl.appendChild(img2);
        setTimeout(() => {
            img2.style.opacity = '1';
            img2.style.transform = 'translateX(0)';
        }, 45);
    }
}

function startHobSlider() {
    let idx = 0;
    createHobSlider(idx);
    if (hobSliderInterval) clearInterval(hobSliderInterval);
    hobSliderInterval = setInterval(() => {
        idx = (idx + 1) % currentHobbyList.length;
        createHobSlider(idx);
    }, 3000);
}

// Add click listeners to hobby list items
function setupHobbyClicks() {
    const hobbyList = document.querySelectorAll('#hob ul li');
    hobbyList.forEach(li => {
        li.addEventListener('click', function(e) {
            e.preventDefault();
            const text = li.textContent.trim().toLowerCase();
            if (hobbyImages[text]) {
                currentHobby = text;
                currentHobbyList = hobbyImages[currentHobby];
                startHobSlider();
            }
        });
    });
}
// ...existing code...

// ...existing code...
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    fadeInSections();
    startSlider();
    startHobSlider();
    setupHobbyClicks();

    // Hobby section color change (if needed)
    const color = {
        'music':'rgba(2, 5, 25, 0.87)',
        'theater & drama':'rgba(171, 7, 23, 0.88)',
        'books reading':'rgba(1, 142, 135, 0.87)',
        'physical':'rgba(167, 72, 34, 0.88)'
    };
    const ht = document.getElementById('hob');
    const htl = document.querySelectorAll('#hob ul li');
    const bh=document.body;
    htl.forEach(li => {
        li.addEventListener('click', function() {
            const text = li.textContent.trim().toLowerCase();
            if (color[text]) {
                ht.style.backgroundColor = color[text];
            }
            if (color[text]) {
                bh.style.backgroundColor = color[text];
            }
        });
    });


    // Contact form handler
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        status.textContent = 'Sending...';
        setTimeout(() => {
            status.textContent = 'Thank you for reaching out!';
            form.reset();
        }, 1200);
    });
});
