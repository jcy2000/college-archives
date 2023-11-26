<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-400 leading-tight">
            {{ __('Schedules') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <a href="{{ route('schedules.create') }}">+ New Schedule</a>
            <table class="table">
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Section</th>
                        <th>Time</th>
                        <th>Instructor</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($schedules as $schedule)
                    <tr>
                        <td>
                            <a href="{{ route('schedules.show', $schedule->id )}}">{{ $schedule->subject}} {{ $schedule->number}}</a>
                        </td>
                        <td>{{ $schedule->section}}</td>
                        <td>
                            <a href="{{ route('schedules.show', $schedule->id )}}">
                                @if ($schedule->time != "TBA")
                                    {{$schedule->days}}
                                @endif
                                {{$schedule->time}}
                            </a>
                        </td>
                        <td>
                            <a href="{{ route('schedules.show', $schedule->id )}}">{{ $schedule->instructor}}</a>
                        </td>
                        <td>
                            <a href="{{ route('schedules.show', $schedule->id )}}">{{ $schedule->location}}</a>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
            {{ $schedules->links() }}
        </div>
    </div>
</x-app-layout>