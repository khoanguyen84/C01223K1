function rank() {
    let score = Number(document.getElementById('score').value)
    if (score >= 9) {
        document.getElementById('result').innerText = "Rank: A"
    }
    else if (score >= 8) {
        document.getElementById('result').innerText = "Rank: B"
    }
    else if (score >= 7) {
        document.getElementById('result').innerText = "Rank: C"
    }
    else if (score >= 6) {
        document.getElementById('result').innerText = "Rank: D"
    }
    else {
        document.getElementById('result').innerText = "Rank: F"
    }
}