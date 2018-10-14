import { Component, ViewChild, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatInput,
  MatTableDataSource
} from '@angular/material';

import { StoryService } from '../services/story.service';
import { Story } from '../models/story.model';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  @ViewChild(MatInput)
  filterValue: MatInput;

  displayedColumns = ['title', 'url', 'created_at', 'author'];
  dataSource: MatTableDataSource<Story>;
  constructor(private dialog: MatDialog, private storyService: StoryService) {
    this.storyService.getStories().subscribe(stories => {
      this.dataSource = new MatTableDataSource(stories);
      this.dataSource.filterPredicate = this.customFilter;
      this.dataSource.filter = this.filterValue.value.trim().toLowerCase();
    });
  }

  ngOnInit() {

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  customFilter(item: Story, pattern: string) {
    const flag = item.title.toLowerCase().search(pattern.toLowerCase()) < 0 ? false : true;
    return flag;
  }

  openDialog(row: Story): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = row;
    this.dialog.open(DialogComponent, dialogConfig);
  }
}
