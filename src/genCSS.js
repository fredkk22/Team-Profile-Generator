function genCSS() {
    return `* {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    
    main {
        display: flex;
        justify-content: center;
    }
    
    h1 {
        color: white;
        background-color: red;
        padding: 2rem;
        font-size: 4rem;
        text-align: center;
    }
    
    h2,
    h3 {
        font-size: 2rem;
    }
    
    ul {
        margin: 0.5rem;
    }
    
    li {
        padding: 2rem;
        border: 1px solid black;
    }
    
    .card {
        margin: 2rem;
    }`
}

module.exports = genCSS;