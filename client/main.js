const complimentBtn = document.getElementById("complimentButton")
let fortuneButton = document.getElementById("fortuneBtn")


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