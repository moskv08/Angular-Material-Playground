import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Note } from '../../models/note';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  @Input() notes: Note[];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  displayedColumns: string[] = ['id', 'title', 'date'];
  dataSource: MatTableDataSource<Note>;
  
  constructor() { }

  ngOnInit(): void {

    this.dataSource = new MatTableDataSource<Note>(this.notes);
    this.dataSource.paginator = this.paginator;
  }

}


