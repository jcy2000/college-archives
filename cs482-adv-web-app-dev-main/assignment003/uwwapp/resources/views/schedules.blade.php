@extends('layouts.app')
  
@section('content')
<div class="container-fluid p-0">
    <div class="col-12">
        <h3>Schedule of Classes</h3>
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button"
                    id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Select Subject
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                @foreach($subjects as $s) 
                <li>
                    <a class="dropdown-item" href="{{url('/schedules', [$s->subject])}}">
                        {{ $s->subject}}: {{ $s->full_name }}
                    </a>
                </li>
                @endforeach
            </ul>
        </div>
        <h2>List of {{ $subject}} Courses</h2>
    
        <table class="table">
            <thead>
                <tr>
                    <th>Course</th>
                    <th>Section</th>
                    <th>Time</th>
                    <th>Instructor</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($schedules as $s) 
                <tr>
                    <td>{{ $s->subject }} {{ $s->number}}</td>
                    <td>{{ $s->section}}</td>
                    <td>{{$s->time}}</td>
                    <td>{{$s->instructor}}</td>
                    <td>{{$s->location}}</td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</div>
@endsection
