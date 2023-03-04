import { Component, HostListener } from '@angular/core';
declare const window: any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  @HostListener("window:scroll", [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 200) {
      document.getElementById("navigation")!.style.transition="0.3s";
      document.getElementById("navigation")!.style.setProperty("background-color", "rgba(0, 0, 0, 0.5)");
      document.getElementById("logo")!.style.color="white";
      document.getElementById("hamburger")!.style.color="white";

    } else if (number < 200) {
      document.getElementById("navigation")!.style.backgroundColor="transparent";
      document.getElementById("navigation")!.style.borderBottom="none";
      document.getElementById("logo")!.style.color="white";
      document.getElementById("hamburger")!.style.color="white";

    }

  }
}
