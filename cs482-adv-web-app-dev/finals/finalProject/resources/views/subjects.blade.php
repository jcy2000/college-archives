<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Courses') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">

            <p class="ml-6"><a href="{{ route('courses.edit', $course) }}" class="btn-link">Edit Course </a></p>


            <h3 class="mt-6">{{ $course->subject}} {{$course->number}} </h3>
            <p class="mt-6">{{ $course->title}}</p>
            <p class="mt-6 whitespace-pre-wrap">{{ $course->description}}</p>

        </div>
    </div>
</x-app-layout>