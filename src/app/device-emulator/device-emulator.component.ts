import {AfterViewInit, Component, ElementRef, HostBinding, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-device-emulator',
  templateUrl: './device-emulator.component.html',
  styleUrls: ['./device-emulator.component.scss']
})
export class DeviceEmulatorComponent implements OnInit, AfterViewInit {
  @HostBinding('style.transform') transform = 'scale(1) translateY(0%)';
  @ViewChild('device') device: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.updateTransform();
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    /*if (this.device.nativeElement.getBoundingClientRect().height > window.innerHeight) {
      const deviceHeight = this.device.nativeElement.getBoundingClientRect().height + 300;
      const screenHeight = window.innerHeight;
      const yPosition = (deviceHeight * (screenHeight / deviceHeight)) / 2
      console.log(screenHeight, deviceHeight, yPosition);
      this.device.nativeElement.style.transform = `scale(${(screenHeight / deviceHeight)}) translate3d(10px, -${yPosition}px, 10px)`;
    }*/
    this.updateTransform();
  }

  updateTransform() {
    /*setTimeout(() => {
      const deviceHeight = document.getElementById('device').clientHeight;
      const windowHeight = window.innerHeight - 100;
      if (windowHeight < deviceHeight) {
        const scale = windowHeight < deviceHeight ? windowHeight / deviceHeight : 1;
        // const translateY = scale == 1 ? '0%' : `${((1 - scale) / 4)}%`;
        const translateY = ( (windowHeight - 140) / deviceHeight ) * -100;
        this.transform = `scale(${scale}) translateY(${translateY}%)`;
        console.log(windowHeight / deviceHeight);
      }else{
        this.transform = `scale(1) translateY(0%)`;
      }
    })*/
  }


}
