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
