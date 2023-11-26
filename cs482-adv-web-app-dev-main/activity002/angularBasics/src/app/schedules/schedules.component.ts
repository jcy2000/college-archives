import { Component } from '@angular/core';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent {
  scheduleList = [
    {"id":537,"subject":"COMPSCI","number":"162","section":"1","days":"Tu","time":"15:30 16:45","instructor":"Ma,Jiehui","location":"McGraw 0115","created_at":null,"updated_at":null},
    {"id":538,"subject":"COMPSCI","number":"162","section":"2","days":"W","time":"12:30 13:45","instructor":"Cao,Tina Y","location":"McGraw 0125","created_at":null,"updated_at":null},
    {"id":539,"subject":"COMPSCI","number":"162","section":"3","days":"TBA","time":"TBA","instructor":"Gunawardena,Athula D. A.","location":"CANVAS ONLINE","created_at":null,"updated_at":null},
    {"id":540,"subject":"COMPSCI","number":"162","section":"4","days":"TBA","time":"TBA","instructor":"Gunawardena,Athula D. A.","location":"CANVAS ONLINE","created_at":null,"updated_at":null},
    {"id":541,"subject":"COMPSCI","number":"165","section":"1","days":"MW","time":"14:00 15:15","instructor":"Maresso,Brian S","location":"McGraw 0115","created_at":null,"updated_at":null},
    {"id":542,"subject":"COMPSCI","number":"170","section":"1","days":"Tu","time":"12:30 13:45","instructor":"Ma,Jiehui","location":"McGraw 0115","created_at":null,"updated_at":null},
    {"id":543,"subject":"COMPSCI","number":"172","section":"2","days":"Th","time":"14:00 14:50","instructor":"Maresso,Brian S","location":"McGraw 0125","created_at":null,"updated_at":null},
    {"id":544,"subject":"COMPSCI","number":"172","section":"2","days":"TuTh","time":"12:30 13:45","instructor":"Maresso,Brian S","location":"McGraw 0125","created_at":null,"updated_at":null},
    {"id":545,"subject":"COMPSCI","number":"172","section":"1","days":"Th","time":"15:30 16:20","instructor":"Ma,Jiehui","location":"McGraw 0115","created_at":null,"updated_at":null},
    {"id":546,"subject":"COMPSCI","number":"172","section":"1","days":"MW","time":"15:30 16:45","instructor":"Ma,Jiehui","location":"Hyer Hall 0210","created_at":null,"updated_at":null},
    {"id":547,"subject":"COMPSCI","number":"174","section":"1","days":"MW","time":"14:00 15:15","instructor":"Sharma,Chandra","location":"McGraw 0125","created_at":null,"updated_at":null},
    {"id":548,"subject":"COMPSCI","number":"174","section":"1","days":"Th","time":"14:00 14:50","instructor":"Sharma,Chandra","location":"McGraw 0115","created_at":null,"updated_at":null},
    {"id":549,"subject":"COMPSCI","number":"174","section":"2","days":"TuTh","time":"09:30 10:45","instructor":"Sharma,Chandra","location":"McGraw 0125","created_at":null,"updated_at":null},
    {"id":550,"subject":"COMPSCI","number":"174","section":"2","days":"Th","time":"11:00 11:50","instructor":"Sharma,Chandra","location":"McGraw 0125","created_at":null,"updated_at":null},
    {"id":551,"subject":"COMPSCI","number":"181","section":"1","days":"W","time":"12:30 13:45","instructor":"Ma,Jiehui","location":"McGraw 0115","created_at":null,"updated_at":null},
    {"id":552,"subject":"COMPSCI","number":"215","section":"1","days":"MW","time":"11:00 12:15","instructor":"Mukherjee,Lopamudra","location":"Heide Hall 0311","created_at":null,"updated_at":null},
    {"id":553,"subject":"COMPSCI","number":"215","section":"2","days":"TBA","time":"TBA","instructor":"Mukherjee,Lopamudra","location":"CANVAS ONLINE","created_at":null,"updated_at":null},
    {"id":554,"subject":"COMPSCI","number":"220","section":"1","days":"W","time":"14:00 14:50","instructor":"Cao,Tina Y","location":"Hyer Hall 0210","created_at":null,"updated_at":null},
    {"id":555,"subject":"COMPSCI","number":"220","section":"1","days":"MW","time":"11:00 12:15","instructor":"Cao,Tina Y","location":"Hyer Hall 0210","created_at":null,"updated_at":null},
    {"id":556,"subject":"COMPSCI","number":"221","section":"1","days":"TuTh","time":"17:00 18:15","instructor":"Maresso,Brian S","location":"Hyer Hall 0210","created_at":null,"updated_at":null},
    {"id":557,"subject":"COMPSCI","number":"222","section":"1","days":"MW","time":"15:30 16:45","instructor":"Maresso,Brian S","location":"McGraw 0115","created_at":null,"updated_at":null},
    {"id":558,"subject":"COMPSCI","number":"222","section":"1","days":"Th","time":"12:30 13:20","instructor":"Maresso,Brian S","location":"McGraw 0115","created_at":null,"updated_at":null},
    {"id":559,"subject":"COMPSCI","number":"223","section":"1","days":"Tu","time":"14:00 15:15","instructor":"Ganguly,Arnab","location":"McGraw 0115","created_at":null,"updated_at":null},
    {"id":560,"subject":"COMPSCI","number":"223","section":"2","days":"W","time":"15:30 16:45","instructor":"Ganguly,Arnab","location":"McGraw 0125","created_at":null,"updated_at":null},
    {"id":561,"subject":"COMPSCI","number":"271","section":"2","days":"Tu","time":"11:00 12:15","instructor":"Gunawardena,Athula D. A.","location":"McGraw 0125","created_at":null,"updated_at":null},
    {"id":562,"subject":"COMPSCI","number":"271","section":"1","days":"M","time":"14:00 15:15","instructor":"Gunawardena,Athula D. A.","location":"Hyer Hall 0210","created_at":null,"updated_at":null},
    {"id":563,"subject":"COMPSCI","number":"332","section":"1","days":"TuTh","time":"12:30 13:45","instructor":"Mukherjee,Lopamudra","location":"Hyer Hall 0210","created_at":null,"updated_at":null}
  ];

}

