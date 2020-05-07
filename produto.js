

var express = require('express');
var cors = require('cors');
var app = express();



app.use(cors({origin: '*'}));



app.get('/produtos', function(req,res){
    let produtos = 
        [
        {
        'nome':'processador intel i9',
        'preco':900,
        'peso': 0.50,
        'img':"../webApi/img/i9.jpg"
    },
    {
        'nome':'Placa de Vídeo PCYes AMD Radeon R7 240, 2GB, GDDR5 - PJ240R712802D5',
        'preco':369.90,
        'peso': 580,
        'img':"../webApi/img/placadevideo.png"
    },
    {
        'nome':'Mouse Gamer Razer Deathadder Elite Chroma Mecânico 16.000 DPI - RZ01-02010100-R3U1',
        'preco':284.90,
        'peso': 240,
        'img':"../webApi/img/mouse.jpg"
    }
    ]
    
    
    
    res.json(produtos);
});
app.listen(3000, function(){
    console.log('porta  3000!');
});
