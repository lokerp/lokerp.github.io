let projectsArray = [
    {
        name: 'Lokerp - Chopper',
        image: './projects_images/Chopper.jpg',
        deskriptionRu: 'Я в сортире прячусь. Бро, надо тренироваться',
        deskriptionEn: 'Shut up man i will kill u suka ebanaya Shut up man i will kill u suka ebanaya Shut up man i will kill u suka ebanaya Shut up man i will kill u suka ebanaya',
        links: {
            YouTube: 'https://www.youtube.com/watch?v=stUu1pG6cxo',
            Telegram: 'https://www.youtube.com/watch?v=stUu1pG6cxo'
        }
    },
]

const projectsOnPage = 12;
const projectsWrapper = document.querySelector('.projects_wrapper');
const skips = document.querySelectorAll('[next-projects]');
let currentPage = 0;

function changePopup(e){
    e.target.nextSibling.nextSibling.classList.toggle('popup_inactive');
}

function showAllProjects(leftBorder = 0, rightBorder = projectsOnPage){
    let lang = localStorage.getItem('language') || navigator.language || navigator.userLanguage;
    lang = lang.includes('ru');
    if(rightBorder > projectsArray.length){
        rightBorder = projectsArray.length;
    }
    for(let i = leftBorder; i < rightBorder; i++){
        const item = projectsArray[i];
        let links = '';
        for(let j of Object.keys(item.links)) {
            links += `<a href="${item.links[j]}" class="project_link" target="_blank">${j}</a>`
        };
        if(lang){
            projectsWrapper.innerHTML += `            
        <div class="card">
            <div class="front">
                <img src="${item.image}" alt="${item.name}" class="project_image">
                <span class="project_name">${item.name}</span>
                <div class='card_p_wrapper'>
                    <p class="ru_elem">${item.deskriptionRu}</p>
                    <p class="eng_elem hidden">${item.deskriptionEn}</p>
                </div>
            </div>
            <div class="card_popup popup_inactive">${links}</div> 
        </div>`
        }
        if(!lang){
            projectsWrapper.innerHTML += `            
            <div class="card">
                <div class="front">
                    <img src="${item.image}" alt="${item.name}" class="project_image">
                    <span class="project_name">${item.name}</span>
                    <div class='card_p_wrapper'>
                        <p class="ru_elem hidden">${item.deskriptionRu}</p>
                        <p class="eng_elem">${item.deskriptionEn}</p>
                    </div>
                </div>
                <div class="card_popup popup_inactive">${links}</div> 
            </div>`
            }
        }
    for(let front of document.querySelectorAll('.front')){
        front.addEventListener('click', changePopup);
    }
}

function skipNext(e){
    const where = e.target.getAttribute('next-projects');
    const next = currentPage + where * projectsOnPage;
    if(currentPage > 0 && next < projectsArray.length){
        projectsWrapper.innerHTML = '';
        showAllProjects(currentPage, next);
        currentPage = next;
    }
}

showAllProjects();

for(let skip of skips){
    skip.addEventListener('click', skipNext);
}

