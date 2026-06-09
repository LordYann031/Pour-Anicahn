body{
    margin:0;
    font-family:Arial,sans-serif;
    text-align:center;
    background:linear-gradient(135deg,#aeefff,#c8ffd4,#ffd1e8);
    color:#333;
}

.hero{
    padding:80px 20px;
}

.hero h1{
    font-size:3rem;
}

section{
    padding:50px 20px;
}

.message,
.countdown,
.gallery,
.final{
    background:white;
    margin:20px;
    border-radius:20px;
    padding:30px;
    box-shadow:0 0 15px rgba(0,0,0,0.1);
}

.photos{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
    gap:15px;
}

.photos img{
    width:100%;
    border-radius:15px;
    transition:0.3s;
}

.photos img:hover{
    transform:scale(1.05);
}

#timer{
    font-size:2rem;
    font-weight:bold;
    color:#ff4f8b;
}
