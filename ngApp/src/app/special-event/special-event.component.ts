import { Component } from '@angular/core';
import { EventService } from '../event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-event',
  templateUrl: './special-event.component.html',
  styleUrls: ['./special-event.component.css']
})
export class SpecialEventComponent {
  specialEvents = []
  constructor(private _eventService: EventService,private _router: Router) {

  }
  ngOnInit(): void {
    this._eventService.getSpecialEvents().subscribe({
      next: res => this.specialEvents = res,
      error: (err) => {
        if(err instanceof HttpErrorResponse) {
          if(err.status === 401) {
            this._router.navigate(['/login'])
          }
        }
      }
    }
    );
  }
}
