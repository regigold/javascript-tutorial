//JavaScript Document

// Global Variables

var map01, map02, map03;

function initMap() {
         
    // Style map 01
    map01 = new google.maps.Map(document.getElementById('map-01'), {
      center: {lat: 49.2827, lng: -123.1207},
      zoom: 13,
    });
     
    // Style map 02 
    map02 = new google.maps.Map(document.getElementById('map-02'), {
      center: {lat: 49.2827, lng: -123.1207},
      zoom: 13,
              styles: [
                {
                  featureType: 'water',
                  elementType: 'geometry',
                  stylers: [{color: '#17263c'}]
                },
                {
                  featureType: 'water',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#515c6d'}]
                },
                {
                  featureType: 'water',
                  elementType: 'labels.text.stroke',
                  stylers: [{color: '#17263c'}]
                }
              ]
    });
    
    // Style map 03
    map03 = new google.maps.Map(document.getElementById('map-03'), {
          center: {lat: 49.2827, lng: -123.1207},
          zoom: 13,
          styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
        }); 
     
}

//// Map 02
//
//function initMap02() {
//        // Styles a map in night mode.
//        var map02 = new google.maps.Map(document.getElementById('map-02'), {
//          center: {lat: 49.2827, lng: -123.1207},
//          zoom: 14,
////          styles: [
////            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
////            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
////            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
////            {
////              featureType: 'administrative.locality',
////              elementType: 'labels.text.fill',
////              stylers: [{color: '#d59563'}]
////            },
////            {
////              featureType: 'poi',
////              elementType: 'labels.text.fill',
////              stylers: [{color: '#d59563'}]
////            },
////            {
////              featureType: 'poi.park',
////              elementType: 'geometry',
////              stylers: [{color: '#263c3f'}]
////            },
////            {
////              featureType: 'poi.park',
////              elementType: 'labels.text.fill',
////              stylers: [{color: '#6b9a76'}]
////            },
////            {
////              featureType: 'road',
////              elementType: 'geometry',
////              stylers: [{color: '#38414e'}]
////            },
////            {
////              featureType: 'road',
////              elementType: 'geometry.stroke',
////              stylers: [{color: '#212a37'}]
////            },
////            {
////              featureType: 'road',
////              elementType: 'labels.text.fill',
////              stylers: [{color: '#9ca5b3'}]
////            },
////            {
////              featureType: 'road.highway',
////              elementType: 'geometry',
////              stylers: [{color: '#746855'}]
////            },
////            {
////              featureType: 'road.highway',
////              elementType: 'geometry.stroke',
////              stylers: [{color: '#1f2835'}]
////            },
////            {
////              featureType: 'road.highway',
////              elementType: 'labels.text.fill',
////              stylers: [{color: '#f3d19c'}]
////            },
////            {
////              featureType: 'transit',
////              elementType: 'geometry',
////              stylers: [{color: '#2f3948'}]
////            },
////            {
////              featureType: 'transit.station',
////              elementType: 'labels.text.fill',
////              stylers: [{color: '#d59563'}]
////            },
////            {
////              featureType: 'water',
////              elementType: 'geometry',
////              stylers: [{color: '#17263c'}]
////            },
////            {
////              featureType: 'water',
////              elementType: 'labels.text.fill',
////              stylers: [{color: '#515c6d'}]
////            },
////            {
////              featureType: 'water',
////              elementType: 'labels.text.stroke',
////              stylers: [{color: '#17263c'}]
////            }
////          ]
//        });
//      }

// Map 03

function initMap03() {
        // Styles a map in night mode.
        var map03 = new google.maps.Map(document.getElementById('map-03'), {
          center: {lat: 49.2827, lng: -123.1207},
          zoom: 14,
          styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
        });
      }