import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MaterialModule,CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() title!: string;
  @Input() longText!: string;
  @Input() authorName!: string;
  @Input() aliasName!: string;
  @Input() urlProfileImage!: string;
  @Input() topics!: { id: number, name: string }[];
}
