import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {Song} from '../../model/Song';
import {SongService} from '../../service/song.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list-song',
  templateUrl: './list-song.component.html',
  styleUrls: ['./list-song.component.scss']
})
export class ListSongComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Name', 'Description', 'File', 'Singer', 'musician', 'count', 'countLike', 'Edit', 'Delete'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource: any;
  songs: Song[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.getListSong();
  }
  getListSong() {
    this.songService.listSong().subscribe(listSong => {
      this.songs = listSong;
      this.dataSource = new MatTableDataSource<Song>(this.songs);
      this.dataSource.paginator = this.paginator;
    });
  }
}
