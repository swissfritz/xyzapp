import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-anfahrt',
  templateUrl: './anfahrt.page.html',
  styleUrls: ['./anfahrt.page.scss'],
})
export class AnfahrtPage {

  @ViewChild('map', {static: false}) mapElement: ElementRef;
  map: google.maps.Map;
  home: google.maps.Marker;
  start: google.maps.LatLng;
  end: google.maps.LatLng;
  direction: google.maps.DirectionsResult;

  constructor(private geoloacation: Geolocation, private plt: Platform) { }

  ionViewWillEnter() {
    this.loadMap();
    this.loadUserPosition();
  }

  loadMap() {
    const elat = 14.925044;
    const elng = 103.279186;
    const latLng = new google.maps.LatLng(elat, elng);

    const mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.end = new google.maps.LatLng(elat, elng);
    this.addMarker(elat, elng, '<b>xyz</b><br>Parkservice');
  }

  loadUserPosition() {
    this.plt.ready().then(() => {
      this.geoloacation.getCurrentPosition().then(resp => {
        console.log('response: ', resp);
        const slat = resp.coords.latitude;
        const slng = resp.coords.longitude;
        this.start = new google.maps.LatLng(slat, slng);
      })
    });
  }

  addMarker(lat, lng, info) {
    const latLng = new google.maps.LatLng(lat, lng);
    this.home = new google.maps.Marker({
      map: this.map,
      position: latLng,
      animation: google.maps.Animation.DROP
    });

    const infoWindow = new google.maps.InfoWindow({
      content: info
    })
    this.home.addListener('click', () => {
      infoWindow.open(this.map, this.home);
    })

  }

  getDirections() {
    const directionsService = new google.maps.DirectionsService();
    const request: google.maps.DirectionsRequest = {
      origin: this.start,
      destination: this.end,
      travelMode: google.maps.TravelMode.DRIVING,
      provideRouteAlternatives: true
    };

    directionsService.route(request, (result, status) => {
      console.log('result: ', result);
      this.direction = result;
    })
  }

  pickRoute(index) {
    new google.maps.DirectionsRenderer({
      map: this.map,
      directions: this.direction,
      routeIndex: index
    });
  }
}
