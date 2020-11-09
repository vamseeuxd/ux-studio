import {AfterViewInit, Component, ElementRef, HostBinding, HostListener, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-device-emulator',
  templateUrl: './device-emulator.component.html',
  styleUrls: ['./device-emulator.component.scss']
})
export class DeviceEmulatorComponent implements OnInit, AfterViewInit {
  @HostBinding('style.transform') transform = 'scale(1) translateY(0%)';
  @ViewChild('device') device: ElementRef;
  trustedUrl: SafeResourceUrl;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.updateTransform();
  }

  constructor(private sanitizer: DomSanitizer) {
    this.trustedUrl = sanitizer.bypassSecurityTrustResourceUrl('http://' + window.location.host + '/preview');
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.updateTransform();
  }

  updateTransform() {

  }


}
