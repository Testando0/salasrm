const express = require('express');
const app = express();

const html = `<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VIVI Music — Your Ultimate Audio Experience</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
        body {
            margin: 0; padding: 0;
            background: linear-gradient(135deg, #0a0a0a, #1a0033);
            color: #fff;
            font-family: 'Roboto', system-ui, sans-serif;
            text-align: center;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .container {
            max-width: 480px;
            padding: 40px 20px;
        }
        h1 {
            font-size: 3.5rem;
            font-weight: 700;
            margin-bottom: 10px;
            background: linear-gradient(90deg, #bb86fc, #03dac6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        p {
            font-size: 1.3rem;
            line-height: 1.6;
            margin: 20px 0;
            opacity: 0.9;
        }
        .btn {
            display: inline-block;
            padding: 16px 32px;
            margin: 12px 8px;
            font-size: 1.2rem;
            font-weight: 500;
            border-radius: 50px;
            text-decoration: none;
            transition: all 0.3s;
        }
        .btn-primary {
            background: #bb86fc;
            color: #000;
        }
        .btn-primary:hover {
            background: #03dac6;
            transform: scale(1.05);
        }
        .btn-secondary {
            background: rgba(255,255,255,0.1);
            color: #fff;
            border: 2px solid rgba(255,255,255,0.3);
        }
        .btn-secondary:hover {
            background: rgba(255,255,255,0.2);
        }
        .features {
            margin-top: 40px;
            display: grid;
            grid-template-columns: 1fr;
            gap: 12px;
            text-align: left;
            font-size: 1.1rem;
        }
        .features li {
            background: rgba(255,255,255,0.05);
            padding: 12px 20px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .session-code {
            margin-top: 30px;
            font-size: 1.4rem;
            padding: 16px;
            background: rgba(187,134,252,0.2);
            border-radius: 16px;
            display: inline-block;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>VIVI Music</h1>
        <p>You're invited to listen together or explore the ultimate audio experience.<br>Open the app to join the vibes.</p>
        
        <a id="open-app" href="vivimusic://listen?code=DEMO" class="btn btn-primary">Open VIVI Music</a>
        <a href="https://github.com/vivizzz007/vivi-music/releases" class="btn btn-secondary">Download Latest APK</a>
        
        <div class="features">
            <ul>
                <li>✅ Material You — Stunning dynamic design</li>
                <li>✅ Synced Lyrics — Karaoke-style highlighting</li>
                <li>✅ YouTube Music — Vast library integration</li>
                <li>✅ Offline Play — Download favorite tracks</li>
            </ul>
        </div>
        
        <div id="session-code" class="session-code"></div>
    </div>

    <script>
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');
        
        if (code) {
            document.getElementById('session-code').innerHTML = 
                'Código da sessão: <strong>' + code + '</strong><br><small>Abra o app para entrar na sala</small>';
            
            document.getElementById('open-app').href = 'vivimusic://listen?code=' + code;
        } else {
            document.getElementById('session-code').innerHTML = 
                'Gere um código no app e cole o link aqui!';
        }
    </script>
</body>
</html>`;

app.get('*', (req, res) => {
    res.send(html);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('✅ Servidor VIVI Listen Together rodando na porta ' + port);
});
