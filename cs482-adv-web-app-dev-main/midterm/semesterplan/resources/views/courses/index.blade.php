<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Courses') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <table class="table">
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Title</th>
                        <th>Credits</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($courses as $course)
                    <tr>
                        <td>{{ $course->subject}} {{$course->number}}</td>
                        <td>{{ $course->title}}</td>
                        <td>{{ $course->credits}}</td>
                        <td>{{ $course->description}}</td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
            {{ $courses->links() }}
        </div>
    </div>
</x-app-layout>