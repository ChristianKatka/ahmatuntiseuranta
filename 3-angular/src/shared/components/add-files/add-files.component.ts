import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-files',
  templateUrl: './add-files.component.html',
  styleUrls: ['./add-files.component.scss'],
})
export class AddFilesComponent {
  @Output()
  filesAdded: EventEmitter<File[]> = new EventEmitter();

  onFileSelect(files: File[] | FileList | any) {
    if (files instanceof FileList) {
      this.addFilesToUpload(Array.from(files));
    } else {
      this.addFilesToUpload(files);
    }
  }

  addFilesToUpload(files: File[]) {
    this.filesAdded.emit(files);
  }
}
