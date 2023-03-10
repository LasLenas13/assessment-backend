let zenbase = []

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortune = ["A fresh start will put you on your way.", "A smile is your personal welcome mat.", "An inch of time is an inch of gold.", "Any day above ground is a good day.", "Believe it can be done."]

        let randomData = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomData];
      
        res.status(200).send(randomFortune);
    },

    getZen: (req, res) => {
        zenbase.push(req.body)
        res.status(200).send(zenbase)
    },

}