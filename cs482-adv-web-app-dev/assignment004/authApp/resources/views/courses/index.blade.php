<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-400 leading-tight">
            {{ __('Courses') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <a href="{{ route('courses.create') }}">+ New Course</a>
            <table class="table">
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Title</th>
                        <th>Credits</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($courses as $course)
                    <tr>
                        <td>
                            <a href="{{ route('courses.show', $course->id )}}">{{ $course->subject}} {{$course->number}}</a>
                        </td>
                        <td>
                            <a href="{{ route('courses.show', $course->id )}}">{{ $course->title}}</a>
                        </td>
                        <td>{{ $course->credits}}</td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
            {{ $courses->links() }}
        </div>
    </div>
</x-app-layout>