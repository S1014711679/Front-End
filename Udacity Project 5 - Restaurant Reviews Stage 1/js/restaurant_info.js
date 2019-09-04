<!DOCTYPE html>
<html>

<head>
    <!-- responsivee -->
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <!-- Normalize.css for better cross-browser consistency -->
    <link rel="stylesheet" src="//normalize-css.googlecode.com/svn/trunk/normalize.css" />
    <!-- Main CSS file -->
    <link rel="stylesheet" href="css/styles.css" type="text/css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css" integrity="sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ==" crossorigin="" />
    <title>Restaurant Info</title>
</head>

<body class="inside">
    <!-- Beginning header -->
    <header>
        <!-- Beginning nav -->
        <nav>
            <h1><a href="/">Restaurant Reviews</a></h1>

            <!-- Beginning breadcrumb -->
            <ul id="breadcrumb" aria-label="Breadcrumb">
                <li><a href="/">Home</a></li>
            </ul>
            <!-- End breadcrumb -->
        </nav>
        <!-- End nav -->
    </header>
    <!-- End header -->

    <!-- Beginning main -->
    <div id="maincontent">

        <!-- Beginning map-->
        <div id="map-container" aria-label="Map of Restaurants" role="application">
            <div id="map"></div>
        </div>
        <!-- End map -->

        <div id="info">
            <!-- Beginning restaurant -->
            <div id="restaurant-container" aria-label=" Restaurant Information" tabindex="0">
                <!-- restaurnt name -->
                <h2 id="restaurant-name" tabindex="0"></h2>
                <img id="restaurant-img" tabindex="0">
                <p id="restaurant-cuisine" tabindex="0"></p>
                <p id="restaurant-address" tabindex="0"></p>
                <table id="restaurant-hours" tabindex="0"></table>
            </div>
            <!-- end restaurant -->


            <!-- Beginning reviews -->
            <div id="reviews-container">
                <ul id="reviews-list" tabindex="0"></ul>
            </div>
            <!-- End reviews -->

        </div>
        <!-- End of Info -->

    </div>
    <!-- End main -->

    <!-- Beginning footer -->
    <footer id="footer">
        Copyright (c) 2017 <a href="/"><strong>Restaurant Reviews</strong></a> All Rights Reserved.
    </footer>
    <!-- End footer -->


    <!-- Beginning scripts -->
    <!-- Database helpers -->
    <script type="text/javascript" src="js/dbhelper.js"></script>
    <!-- Main javascript file -->
    <script type="text/javascript" src="js/restaurant_info.js"></script>
    <!--  Map -->
    <script src="https://unpkg.com/leaflet@1.3.1/dist/leaflet.js" integrity="sha512-/Nsx9X4HebavoBvEBuyp3I7od5tA0UzAxs+j83KgC8PU0kgB4XiK4Lfe4y4cgBtaRJQEIFCW+oC506aPT2L1zw==" crossorigin=""></script>
    <!-- Service Worker -->
    <script type="application/javascript" src="js/register_sw.js"></script>

    <!-- Google Maps -->
    <!--  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA_tKbW6A5pQ-eupxI56myUnHLqYCzOjKo&libraries=places&callback=initMap"></script> -->
    <!-- End scripts -->

</body>
