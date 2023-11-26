<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Schedules') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            @if (session('status'))
                <div class="alert alert-success">
                    {{ session('status') }}
                </div>
            @endif

            <a href="{{ route('semesterplans.index') }}" class="mt-4">
                <x-primary-button>
                    {{ __('View Semester Plan') }}
                </x-primary-button>
            </a>
            <table class="table">
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Section</th>
                        <th>Time</th>
                        <th>Location</th>
                        <th>Instructor</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($schedules as $schedule)
                    <tr>
                        <td>{{ $schedule->subject}} {{ $schedule->number}}</td>
                        <td>{{ $schedule->section}}</td>
                        <td>
                            @if ($schedule->time != "TBA")
                                {{$schedule->days}}
                            @endif
                            {{$schedule->time}}
                        </td>
                        <td>{{ $schedule->location}}</td>
                        <td>{{ $schedule->instructor}}</td>
                        <td>
                            <form method="POST" action="{{ route('semesterplans.store') }}">
                            @csrf
                                <input hidden id="post_id" name="post_id" value={{$schedule->id}}>
                                <x-primary-button onclick="return confirm('Are you sure you wish to add this course?')">
                                    {{ __('ADD TO PLAN') }}
                                </x-primary-button>
                            </form>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
            {{ $schedules->links() }}
        </div>
    </div>
</x-app-layout>