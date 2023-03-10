const complimentBtn = document.getElementById("complimentButton")
let fortuneButton = document.getElementById("fortuneBtn")

let zenForm = document.getElementById("zen-form")
let mindForm = document.getElementById("mind-form")
let oneForm = document.getElementById("one-form")
let zenName = document.getElementById("post-name")
let zenTemp = document.getElementById("post-temp")
let improveMind = document.getElementById("put-mind")
let oneNess = document.getElementById("delete-name")


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)
fortuneButton.addEventListener('click', getFortune)

zenForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const zenBody ={
        name: zenName.value,
        temperament: zenTemp.value,
    }

    axios.post("http://localhost:4000/api/zen", zenBody).then((result) => {
        alert("New Mind State")
        console.log(result.data)
    }).catch((err) => {})
})

mindForm.addEventListener("submit", (event) => {
    event.preventDefault()

    let name = improveMind.value

    axios.put("http://localhost:4000/api/mindful?name=" + name)
    .then((result) => {
        alert(name + "one step closer to Nirvana")
        console.log(result.data)
    }).catch((err) => {})
})

oneForm.addEventListener("submit", (event) => {
    event.preventDefault()

    let name = oneNess.value

    axios.delete("http://localhost:4000/api/oneness/" + name)
    .then((result) => {
        alert(name + "is now enlightened")
        console.log(result.data)
    }).catch((err) => {})
})