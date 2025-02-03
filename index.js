const audio = new Audio("./media/pochvnidni.mp3")

const buttonVupros = document.getElementById("vupros");
const tekstData = document.getElementById("data");
const tekstPraznik = document.getElementById("praznik");
const infoDiv = document.getElementById("info");
const body = document.body;

const pochivniDni = [
    [new Date(2025, 0, 1), "Нова година"],
    [new Date(2025, 2, 3), "Ден на Освобождението на България от османско робство", "./media/asenipetur.jpeg"],
    [new Date(2025, 3, 20), "Великден – християнската религия отбелязва Възкресение Христово", "./media/velikden.JPG"],
    [new Date(2025, 4, 1), "Ден на труда и на международната работническа солидарност", "./media/dennatruda.jpg"],
    [new Date(2025, 4, 6), "Гергьовден, Ден на храбростта и Българската армия", "./media/gergiovden.png"],
    [new Date(2025, 4, 24), "Денят на българската просвета и култура и на славянската писменост", "./media/prosvetaikultura.jpeg"],
    [new Date(2025, 8, 6), "Съединението на България", "./media/suedinenie.jpg"],
    [new Date(2025, 8, 22), "Ден на независимостта на България", "./media/nezavisimost.jpeg"],
    [new Date(2025, 11, 24), "Коледа", "./media/koleda.jpg"],
    [new Date(2025, 11, 25), "Коледа", "./media/koleda.jpg"],
    [new Date(2025, 11, 26), "Коледа", "./media/koleda.jpg"]
];

const dnes = Date.now();

const sledvashtPraznik = pochivniDni.reduce(
    (prev, curr) => {
        const prevDiff = Math.abs(prev[0] - dnes);
        const currDiff = Math.abs(curr[0] - dnes);
        
        return currDiff < prevDiff ? curr : prev
    }
)

buttonVupros.onclick = () => {
    audio.currentTime = 19.8;
    audio.play();
    tekstData.innerHTML = sledvashtPraznik[0].toLocaleDateString()
    tekstPraznik.innerHTML = sledvashtPraznik[1]
    body.style.backgroundImage = `url(${sledvashtPraznik[2]}`
    body.style.backgroundSize = "cover"
    buttonVupros.style.display = "none";
    infoDiv.style.display = "block"
}