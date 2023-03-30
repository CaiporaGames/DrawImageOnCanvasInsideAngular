import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit 
{

  @ViewChild('canvas', { static: false, read: ElementRef}) canvas: ElementRef = {} as ElementRef;
  public ctx!: CanvasRenderingContext2D;

  image = new Image();

  ngAfterViewInit(): void
  {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.animationLoop();
  }

  animationLoop()
  {
    this.image.src = './../assets/A0.png'
    this.ctx.drawImage(this.image, 0, 0);
    requestAnimationFrame(() => this.animationLoop());
  }

}
