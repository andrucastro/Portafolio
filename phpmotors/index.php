<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-sacale=1.0>">
        <title>My First PHP Page</title>
        <link rel="stylesheet" type="text/css" href="/phpmotors/css/style.css?1.0">
        <link rel="stylesheet" type="text/css" href="/phpmotors/css/large_view.css">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;1,400;1,500&family=Montserrat:wght@100&family=Zen+Dots&display=swap" rel="stylesheet">
    </head>
    <body>
        <div class="blue_border_Main_container">
            <header>
                <?php require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/Snippets/header.php'; ?> 
            </header>
            <main>
                <h1>Welcome to PHP Motors!</h1>
                <div class="delorean_container">
                <section class="deloarean_info_box">
                        <h2>DMC Delorean</h2>
                        <p> 3 Cup holders 
                        <br>Superman doors 
                        <br>Fuzzy dice!</p>
                        <div class="btn_own_today_large_view"><a href="#"><img src="/phpmotors/images/site/own_today.png" alt="button own Today"></a></div>
                </section>  
                    <img src="/phpmotors/images/delorean.jpg" alt="Delorean picture">
                </div>

                <div class="btn_own_today"><a href="#"><img src="/phpmotors/images/site/own_today.png" alt="button own Today"></a></div>     
                <div class="delorean_info">
                    <section class="delorean_reviews">
                        <h2>DMC Deloeran Reviews</h2>
                        <ul>
                            <li>"So Fast its almos like traveling in time." (4/5)</li>
                            <li>"Coolest ride in the road." (4/5)</li>
                            <li>"I'm feeling Marty Macfly!" (5/5)</li>
                            <li>"The most futuristic ride!" (4.5/5)</li>
                            <li>"80's living and I love it" (5/5)</li>
                        </ul>
                    </section>    
                    <section class="delorean_upgrades">
                        <h2>Delorean Upgrades</h2>
                        <div class="upgrades_flex_container">
                            <div>
                                <img src="/phpmotors/images/upgrades/flux-cap.png" alt="flux cap">
                            </div>
        
                            <div>
                                <img src="/phpmotors/images/upgrades/flame.jpg" alt="flame picture">
                            </div>
                            <a href="#">Flux Capacitor</a>
                            <a href="#">Flame</a>
                            <div>
                                <img src="/phpmotors/images/upgrades/bumper_sticker.jpg" alt="Bumper Stickers">
                            </div>
                                
                            <div>
                                <img src="/phpmotors/images/upgrades/hub-cap.jpg" alt="Hub Caps">
                            </div>
                            <a href="#">Bumper Stickers</a>
                            <a href="#">Hub Caps</a>
                        </div>
                    </section>
                </div>   
            </main>
            <footer>
                <?php require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/Snippets/footer.php'; ?> 
            </footer>
        </div>
    </body>
</html>