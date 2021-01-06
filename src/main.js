// Progress bar for my skills //
const masSkills = [
    {name: "js", progressSkill: 65},
    {name: "css", progressSkill: 60},
    {name: "html", progressSkill: 85},
    {name: "react", progressSkill: 65},
];
const loadSkills = () => {
    const jsSkill = document.getElementById("progress_js");
    const cssSkill = document.getElementById("progress_css");
    const htmlSkill =  document.getElementById("progress_html")
    const reactSkill = document.getElementById("progress_react");
    masSkills.map( (skill) => {
        let widthSkill = (250 * skill.progressSkill)/100;
        let heightSkill = 20;
        switch (skill.name) {
            case "js":
                jsSkill.style.width = widthSkill+"px";
                jsSkill.style.height = heightSkill+"px";
                jsSkill.firstChild.textContent = skill.progressSkill + "%";
                break;
            case "css":
                cssSkill.style.width = widthSkill+"px";
                cssSkill.style.height = heightSkill+"px";
                cssSkill.firstChild.textContent = skill.progressSkill + "%";
                break;
            case "html":
                htmlSkill.style.width = widthSkill+"px";
                htmlSkill.style.height = heightSkill+"px";
                htmlSkill.firstChild.textContent = skill.progressSkill + "%";
                break;
            case "react":
                reactSkill.style.width = widthSkill+"px";
                reactSkill.style.height = heightSkill+"px";
                reactSkill.firstChild.textContent = skill.progressSkill + "%";
                break;
            default:
                console.log("error");
        }
        console.log(skill);
    })
}
window.addEventListener("load", loadSkills);
// Progress bar for my skills //

// Open contacts in social networking //
const myContacts = document.getElementsByClassName('contacts');
for (let contact of myContacts) {
    contact.addEventListener('click', () => {
        switch (contact.id) {
            case "telegram-contact":
                window.open("https://t.me/PrettyWigga");
                break;
            case "facebook-contact":
                window.open("https://www.facebook.com/anton.vikhrest/")
                break;
            case "linkedIn-contact":
                window.open("https://www.linkedin.com/in/anton-vyhrest-8709041bb/")
            default:
                console.log("no posts");
                break;
        }
    })
};
// Open contacts in social networking //

// Open block on page //
/*const myBlock = document.getElementsByClassName('li-block');
for (let block of myBlock){
    block.addEventListener('click', () => {
        switch (block.id) {
            case "li-main":
                location.href = '#mainBox';
                break;
            case "li-my-skills":
                location.href = '#mySkills';
                break;
            case "li-portfolio":
                location.href = '#myPortfolio';
                break;
            case "linkedIn-contact":
                location.href = 'mainBox';
                break;
            case "linkedIn-contact":
                location.href = 'mainBox';
                break;
            default:
                console.log("no posts");
                break;
        }
    })
}
// Open block on page //
*/


// Open block on page //
const myLiBlock = document.getElementsByClassName('li-block');
const myBlock = document.getElementsByClassName('block');
for (let block of myLiBlock){
    block.addEventListener('click', () => {
        switch (block.id) {
            case "li-main":
                for (let block_hidden of myBlock) {
                    if(block_hidden.id != "mainBox") block_hidden.style.display = "none";
                    else block_hidden.style.display = "block";
                }
                break;
            case "li-my-skills":
                for (let block_hidden of myBlock) {
                    if(block_hidden.id != "mySkills") block_hidden.style.display = "none";
                    else block_hidden.style.display = "block";
                }
                break;
            case "li-portfolio":
                for (let block_hidden of myBlock) {
                    if(block_hidden.id != "myPortfolio") block_hidden.style.display = "none";
                    else block_hidden.style.display = "grid";
                }
                break;
            case "linkedIn-contact":
                block.style.display = block;
                break;
            case "linkedIn-contact":
                block.style.display = block;
                break;
            default:
                console.log("no posts");
                break;
        }
    })
}
// Open block on page //

const load = document.getElementById("loadForm");

const rectangles = document.getElementsByClassName('loadRectangle');
anime({
    targets: rectangles,
    rotate: {
        value: 360,
        duration: 1800,
        easing: 'easeInOutSine',
    },
    scale: {
        value: 2,
        duration: 1600,
        delay: 800,
        easing: 'easeInOutQuart'
    },
    delay: 250,
});
