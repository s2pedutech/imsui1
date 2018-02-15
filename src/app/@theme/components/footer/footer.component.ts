import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created by <b><a href="http://www.s2pedutech.com/" target="_blank">S2P Edutech,Nagpur</a></b></span>
    <div class="socials">
      <a href="https://www.facebook.com/FromStudentToProfessional/" target="_blank" class="ion ion-social-facebook"></a>

      <!--<a href="#" target="_blank" class="ion ion-social-github"></a>
            <a href="#" target="_blank" class="ion ion-social-twitter"></a>
      <a href="#" target="_blank" class="ion ion-social-linkedin"></a>-->
      
    </div>
  `,
})
export class FooterComponent {
}
