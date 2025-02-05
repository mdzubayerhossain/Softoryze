/*
 * bundleContacts.js
 * diffco-site-template
 *
 * Created by Diffco.us
 * Copyright © 2020 Diffco.us. All rights reserved.
 */

var styles = [
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [{ saturation: 36 }, { color: "#000000" }, { lightness: 40 }],
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [{ visibility: "on" }, { color: "#000000" }, { lightness: 16 }],
  },
  {
    featureType: "all",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [{ color: "#000000" }, { lightness: 20 }],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [{ color: "#000000" }, { lightness: 17 }, { weight: 1.2 }],
  },
  {
    featureType: "administrative",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "administrative.country",
    elementType: "all",
    stylers: [{ visibility: "simplified" }],
  },
  {
    featureType: "administrative.country",
    elementType: "geometry",
    stylers: [{ visibility: "simplified" }],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text",
    stylers: [{ visibility: "simplified" }],
  },
  {
    featureType: "administrative.province",
    elementType: "all",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "administrative.locality",
    elementType: "all",
    stylers: [
      { visibility: "simplified" },
      { saturation: "-100" },
      { lightness: "30" },
    ],
  },
  {
    featureType: "administrative.neighborhood",
    elementType: "all",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "all",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      { visibility: "simplified" },
      { gamma: "0.00" },
      { lightness: "74" },
    ],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{ color: "#34334f" }, { lightness: "-37" }],
  },
  {
    featureType: "landscape.man_made",
    elementType: "all",
    stylers: [{ lightness: "3" }],
  },
  { featureType: "poi", elementType: "all", stylers: [{ visibility: "off" }] },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#000000" }, { lightness: 21 }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ visibility: "simplified" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [{ color: "#2d2c45" }, { lightness: "0" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#000000" }, { lightness: 29 }, { weight: 0.2 }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#7d7c9b" }, { lightness: "43" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.stroke",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [{ color: "#2d2c45" }, { lightness: "1" }],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text",
    stylers: [{ visibility: "on" }],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [{ color: "#7d7c9b" }],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.stroke",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [{ color: "#2d2c45" }, { lightness: "-1" }, { gamma: "1" }],
  },
  {
    featureType: "road.local",
    elementType: "labels.text",
    stylers: [{ visibility: "on" }, { hue: "#ff0000" }],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [{ color: "#7d7c9b" }, { lightness: "-31" }],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.stroke",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2d2c45" }, { lightness: "-36" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#2d2c45" }, { lightness: "0" }, { gamma: "1" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ visibility: "off" }],
  },
];

function Maps(el, lat, long) {
  this.el = el;
  this.lat = lat;
  this.long = long;
  var center = new google.maps.LatLng(this.lat, this.long);
  var win = $(window);
  var map = "";
  var image = {
    url: "images/pin.svg",
    size: new google.maps.Size(26, 38),
  };

  this.orientationChange = function () {
    win.on("orientationchange", function (event) {
      google.maps.event.addDomListener(window, "resize", function () {
        map.setCenter(center);
      });
    });
  };

  this.initialize = function () {
    var mapProp = {
      center: center,
      zoom: 8,
      scrollwheel: false,
      mapTypeControl: false,
      scaleControl: false,
      rotateControl: false,
      fullscreenControl: false,
      styles: styles,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    map = new google.maps.Map(document.getElementById(this.el), mapProp);

    var marker = new google.maps.Marker({
      position: center,
      icon: image,
    });

    marker.setMap(map);

    var msgs = [
      "Yes, we here! ;)",
      "Come to us, we have cookies!",
      "Still here!",
      "Red pill or Blue pill?",
    ];
    var contentString = "<div class='msgs'>Yes, we here! ;)</div>";
    var infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
    var iterator = 0;

    marker.addListener("click", function () {
      $(".msgs").text(msgs[iterator]);

      if (iterator == 3) {
        iterator = 0;
      } else {
        iterator++;
      }

      infowindow.open(map, marker);

      $(".msgs")
        .parents(".gm-style-iw")
        .prev("div")
        .children("div:last-child")
        .addClass("parent");
      $(".msgs").parents(".gm-style-iw").next("div").css({
        marginTop: "3px",
      });
    });

    google.maps.event.addListener(map, "click", function () {
      infowindow.close();
    });

    this.orientationChange();
  };

  return this.initialize();
}

if ($("#google-map-holder").length) {
  var lat = $("#google-map-holder").attr("data-lat");
  var lng = $("#google-map-holder").attr("data-lng");

  var map = new Maps("google-map-holder", lat, lng);
}

